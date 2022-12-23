import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberT'
})
export class NumberTPipe implements PipeTransform {
  readonly nums = [
    {num: 1, trans: [{lang: 'esp', tran: 'uno'},{lang: 'eng', tran: 'one'}, {lang: 'por', tran: 'um'}]},
    {num: 2, trans: [{lang: 'esp', tran: 'dos'},{lang: 'eng', tran: 'two'}, {lang: 'por', tran: 'dois'}]},
    {num: 3, trans: [{lang: 'esp', tran: 'tres'},{lang: 'eng', tran: 'three'}, {lang: 'por', tran: 'três'}]},
    {num: 4, trans: [{lang: 'esp', tran: 'cuatro'},{lang: 'eng', tran: 'four'}, {lang: 'por', tran: 'quatro'}]},
    {num: 5, trans: [{lang: 'esp', tran: 'cinco'},{lang: 'eng', tran: 'five'}, {lang: 'por', tran: 'cinco'}]},
    {num: 6, trans: [{lang: 'esp', tran: 'seis'},{lang: 'eng', tran: 'six'}, {lang: 'por', tran: 'seis'}]},
    {num: 7, trans: [{lang: 'esp', tran: 'siete'},{lang: 'eng', tran: 'seven'}, {lang: 'por', tran: 'sete'}]},
  ];

  transform(value: any, lang: any = 'esp'): any {
    
    return this.nums.find(el => el.num == value)?.trans.find(el => el.lang == lang)?.tran;
  }

}
