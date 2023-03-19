import { RowDataPacket } from 'mysql2';
import { IProduct } from '../interfaces';
import mysql from './connection';

export default class ProductModel {
  private connection = mysql;

  async getAll(): Promise<IProduct[]> {
    const [rows] = await this.connection.execute<IProduct[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.products',  
    );
    return rows;
  }
}