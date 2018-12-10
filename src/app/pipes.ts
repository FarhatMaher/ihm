import { PipeTransform, Pipe } from '@angular/core';


@Pipe({name: 'Puissance'})
export class Pipes implements PipeTransform  {


  transform(value: number , expo: string) {
    const exp = parseFloat(expo);
     return Math.pow(value , isNaN(exp) ? 1 : exp );

  }

}
