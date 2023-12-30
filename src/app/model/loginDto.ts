export interface LoginInput {
  email: string;
  password: string;
}

export interface LoginOutput {
  _id: string,
  firstname: string,
  lastname: string,
  email: string,
  mobile: string,
  token: string
}
