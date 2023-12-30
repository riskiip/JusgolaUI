export interface ProductOutput {
  _id: string,
  title: string,
  slug: string,
  description: string,
  price: number,
  ministry_status: boolean,
  quantity: boolean,
  sold: boolean,
  images: ProductImage[],
  totalrating: number,
  ratings: ProductRating[],
  createdAt: string,
  updatedAt: string
}

export interface ProductImage {
  url: string,
  asset_id: string,
  public_id: string
}

export interface ProductRating {
  _id: string,
  comment: string,
  postedBy: string
}

export interface RegisterProductInput {
  title?: string,
  description?: string,
  price?: number,
  quantity?: number,
  ministry_status?: boolean
}

export interface RegisterProductOutput {
  title: string,
  slug: string,
  description: string
  price: number,
  ministry_status: boolean,
  quantity: number,
  sold: number,
  images: ProductImage[],
  totalrating: number,
  _id: string,
  ratings: ProductRating[],
  createdAt: string,
  updatedAt: string,
  __v: number
}

export interface RatingProductInput {
  prodId: string,
  star: number,
  comment: string
}

export interface CartInput {
  cart: ProductCart[]
}

export interface ProductCart {
  _id: string | null,
  count: number
}

export interface PurchaseProductInput {
  transactionMethod: string
}

