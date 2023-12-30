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

export interface SignupInput {
  firstname: string,
  lastname: string,
  email: string,
  mobile: string,
  role: string,
  password: string
}
