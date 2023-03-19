export interface IProduct {
  id?: number;
  name: string;
  amount: string;
  orderId?: number;
}

export interface IUser {
  username: string;
  vocation: string;
  level?: number;
  password: string;
}