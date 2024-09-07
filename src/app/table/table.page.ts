import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../services/data.service";
import {AlertController, IonicSafeString} from "@ionic/angular";
import {Directory, Filesystem} from "@capacitor/filesystem";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {
  public id!: number;
  public stateId!: number;
  public muniId!: number;
  public parrishId!: number;
  public centerId!: number;
  private activatedRoute = inject(ActivatedRoute);
  tableData: any;
  graphicData: number[] = [];
  downloading: boolean = false;
  imageSrc?: string = undefined
  constructor(private dataService: DataService,
              private router: Router,
              private http: HttpClient,
              private alertController: AlertController) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as unknown as number;
    this.parrishId = this.activatedRoute.snapshot.paramMap.get('parrishId') as unknown as number;
    this.stateId = this.activatedRoute.snapshot.paramMap.get('stateId') as unknown as number;
    this.muniId = this.activatedRoute.snapshot.paramMap.get('muniId') as unknown as number;
    this.centerId = this.activatedRoute.snapshot.paramMap.get('centerId') as unknown as number;
    this.tableData = this.dataService.getTable(this.stateId, this.muniId, this.parrishId, this.centerId, this.id);
    console.log(this.tableData)
    this.graphicData = [this.tableData.totals.eg, this.tableData.totals.nm, this.tableData.totals.others]
  }
  getImageUrl(img: string){
    const baseUrl = "https://github.com/andreujuanc/actas-2024/blob/main/actas"
    const fileName = img.slice(img.lastIndexOf("/"))
    return baseUrl + fileName + "?raw=true";
  }
  public async openImage(img: string) {
    const newUrl = this.getImageUrl(img)
    const alert = await this.alertController.create({
      animated: true,
      backdropDismiss: true,
      message: new IonicSafeString(`<img src="${this.imageSrc}" alt="photo" />`),
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel',
        },
      ],
    });
    await alert.present();
  }

  async downloadAct(url: string) {
    this.downloading = true;
    let ref = this;
    const fileName = url.slice(url.lastIndexOf("/"))
    this.getBase64ImageFromUrl(this.getImageUrl(url)).then(result => {
      this.imageSrc = result as string;
      this.save(String(result), fileName)
    });

  }
  async getFinalLocation(url: string) {
    let res = await fetch(url, {mode: 'no-cors', redirect: 'follow'});
    let location = res.headers.get('Location');
    console.log(res.redirected);
    console.log(res.url)
    console.log(res.headers)
    if (location !== null) {
      let res2 = await fetch(url, {mode: 'no-cors'});
      let location2 = res2.headers.get('Location');
      console.log(location2);
    }

  }
  async getBase64ImageFromUrl(imageUrl: string) {
    let url = await this.getFinalLocation(imageUrl)
    let res = await fetch(url!, { mode: 'no-cors' });
    console.log(res);
    console.log(res.headers.get('Location'));

    let blob = await res.blob();
    return new Promise((resolve, reject) => {
      let reader  = new FileReader();
      reader.addEventListener("load", function () {
        resolve(reader.result);
      }, false);

      reader.onerror = () => {
        return reject(this);
      };
      reader.readAsDataURL(blob);
    })
  }

  save( base64 : string, filename: string) {
    Filesystem.writeFile({
      path: filename,
      data: base64,
      directory: Directory.Documents,
    }).then((res) => {
      this.downloading = false
    }, (err) => {
    })
  }
}
