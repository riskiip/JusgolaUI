export class Transaction {
  position: number;
  name: string
  total: number

  constructor(position: number, name: string, total: number) {
    this.position = position;
    this.name = name;
    this.total = total;
  }
}

export const TRANSACTION: Transaction[] = [
  { position: 1, name: 'Santika Hotel', total:80},
  { position: 2, name: 'The Potter Hotel', total:60},
  { position: 3, name: 'Guzel Hotel', total:10},
  { position: 4, name: 'Gung Ju Hotel', total:21},
  { position: 5, name: 'Kuta Hotel', total:30},
  { position: 6, name: 'San Cliff Hotel', total:53},
  { position: 7, name: 'Gaia Hotel', total:80},
  { position: 8, name: 'Namu Hotel', total:60},
  { position: 9, name: 'Prism Hotel', total:10},
]
