import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: string): string {
    if(value.length>=15){
      return value.slice(0,15)
    }
    else{
      return value
    }
  }

}
