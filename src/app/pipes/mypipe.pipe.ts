import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: string,len:number): string {
    if(value.length>=15){
      return value.slice(0,len)
    }
    else{
      return value
    }
  }

}
