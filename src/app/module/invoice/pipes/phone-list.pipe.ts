import {Pipe, PipeTransform} from "@angular/core";


@Pipe({name: 'phoneList'})
export class PhoneListPipe implements PipeTransform {
  transform(phones: string[]): string {
    const formattedNumber = phones.map(phone =>
      phone.replace(/\D/g, '') // only numbers
        .replace(/(\d{3})(\d{3})(\d{3})/, '$1-$2-$3') // split
    )

    return formattedNumber.join(', ')
  }
}
