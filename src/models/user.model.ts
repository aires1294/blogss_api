import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IUser } from '../interfaces/users';
import { ILogin } from '../interfaces/login';
import mysql from './connection';

export default class UserModel {
  private connection = mysql;

  async createUser(user: IUser): Promise<IUser> {
    const { username, vocation, level, password } = user;

    const [users] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
    const { insertId } = users;
    return { id: insertId, username, vocation, level };
  }

  async validateLogin(login: ILogin): Promise<IUser> {
    const { username, password } = login;

    const [rows] = await this.connection.execute<IUser[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?',  
      [username, password],
    );
    // return rows;
    const [iUser] = rows as IUser[];
    return iUser;
  }
}