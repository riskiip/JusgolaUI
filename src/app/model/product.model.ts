export class Product {
  name: string;
  position: number;
  price: number;
  image: string;

  constructor(name: string, price: number, position: number, image: string) {
    this.name = name;
    this.price = price;
    this.position = position;
    this.image = image;
  }
}

export const PRODUCT_DATA: Product[] = [
  new Product('Santika Hotel', 500000, 1, 'assets/images/santikahotel.jpg'),
  new Product('The Potter Hotel', 1000000, 2, 'assets/images/thepotterhotel.jpg'),
  new Product('Guzel Hotel', 800000, 3, 'assets/images/guzelhotel.jpg'),
  new Product('Gung Ju Hotel', 650000, 4, 'assets/images/gungjuhotel.jpg'),
  new Product('Kuta Hotel', 500000, 5,'assets/images/kutahotel.jpg'),
  new Product('San Cliff Hotel', 1300000, 6,'assets/images/sancliffhotel.jpeg'),
  new Product('Gaia Hotel', 1400000, 7,  'assets/images/gaiahotel.jpg'),
  new Product('Namu Hotel', 1500000, 8, 'assets/images/namuhotel.png'),
  new Product('Prism Hotel', 950000, 9,'assets/images/prismhotel.jpg'),
];