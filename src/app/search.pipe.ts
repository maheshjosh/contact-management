import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!args){
      return value;
    }
    args = args.toLowerCase();

    return value.filter( items => {
      return items.first_name.toLowerCase().includes(args) || items.email.toLowerCase().includes(args) || items.home_phone.toLowerCase().includes(args);
    });
  }
  //   return value.filter(items => {
  //     return items.first_name.startsWith(args) === true || items.email.startsWith(args) === true || items.home_phone.startsWith(args) === true; 
  //   });
  // }

     

}
