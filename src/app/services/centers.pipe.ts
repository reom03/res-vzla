import { Pipe, PipeTransform } from '@angular/core';
import {DataService} from "./data.service";

@Pipe({
  name: 'centers',
  standalone: true
})
export class CentersPipe implements PipeTransform {

  centers: any[];
  constructor(private dataService: DataService) {
    this.centers = dataService.getCenters()
  }
  transform(value: string, ...args: unknown[]): string {
    console.log(value)
    return this.centers.find(c => c.code === value).name;
  }

}
