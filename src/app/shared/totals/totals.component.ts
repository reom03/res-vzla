import {Component, Input, OnInit} from '@angular/core';
import {AlertController, IonicSafeString} from "@ionic/angular";

@Component({
  selector: 'app-totals',
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.scss'],
})
export class TotalsComponent  implements OnInit {

  @Input() totals: any;
  counter = 0;
  constructor(private alertController: AlertController) { }

  ngOnInit() {}

  setEasterEgg(){

    if(this.counter === 0){
      setTimeout(() => {
        console.log("borrando counter")
        this.counter = 0
      }, 5000)
    }
    this.counter = this.counter + 1
    console.log(this.counter)
    if(this.counter === 20){
      this.openImage()
      this.counter = 0;
    }
  }

  public async openImage() {
    const alert = await this.alertController.create({
      animated: true,
      backdropDismiss: true,
      message: new IonicSafeString(`<img src="./assets/maduro-cdtm.jpg" alt="photo" />`),
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel',
        },
      ],
    });
    await alert.present();
  }
}
