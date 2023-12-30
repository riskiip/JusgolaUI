export class Approval{
  name: string;
  position: number;
  status: string;

  constructor(position: number, name: string, status: string) {
    this.position = position;
    this.name = name;
    this.status = status;
  }
}

export const APPROVAL_DATA: Approval[] = [
  { position: 1, name: 'Santika Hotel', status: 'Approved' },
  { position: 2, name: 'The Potter Hotel', status: 'Rejected' },
  { position: 3, name: 'Guzel Hotel', status: 'Pending'},
  { position: 4, name: 'Gung Ju Hotel', status: 'Rejected' },
  { position: 5, name: 'Kuta Hotel', status: 'Pending' },
  { position: 6, name: 'San Cliff Hotel', status: 'Approved' },
  { position: 7, name: 'Gaia Hotel', status: 'Approved' },
  { position: 8, name: 'Namu Hotel', status: 'Pending'},
  { position: 9, name: 'Prism Hotel', status: 'Rejected' },
]