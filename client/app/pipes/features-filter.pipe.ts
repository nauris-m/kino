import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'featuresFilter'
})

export class FeaturesFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter(item => {
      return item.group === args;
    });
  }
}
