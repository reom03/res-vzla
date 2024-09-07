import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'candidate',
  standalone: true
})
export class CandidatePipe implements PipeTransform {
  candidates : Map<string, string> = new Map<string, string>();

  constructor() {
    this.candidates.set("nm","NICOLAS MADURO")
    this.candidates.set("eg","EDMUNDO GONZALEZ")
    this.candidates.set("lm","LUIS MARTÍNEZ")
    this.candidates.set("jabe", "JAVIER BERTUCCI")
    this.candidates.set("jobbr","JOSÉ BRITO")
    this.candidates.set("ae","ANTONIO ECARRI")
    this.candidates.set("cf","CLAUDIO FERMÍN")
    this.candidates.set("dc","DANIEL CEBALLOS")
    this.candidates.set("em","ENRIQUE MÁRQUEZ")
    this.candidates.set("bera","BENJAMÍN RAUSSEO")
  }
  transform(value: string, ...args: unknown[]): string {
    return this.candidates.get(value)!;
  }

}
