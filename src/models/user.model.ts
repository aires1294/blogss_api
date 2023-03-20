import { ResultSetHeader } from 'mysql2';
import { IUser } from '../interfaces/users';
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
}