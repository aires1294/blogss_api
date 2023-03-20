import jwt from 'jsonwebtoken';
import UserModel from '../models/user.model';
import { IToken, IUser } from '../interfaces/users';
import { secret, jwtConfig } from '../utils/authFunctions';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  public async createUser(user: IUser): Promise<string> {
    const result = await this.model.createUser(user);
    const { id, username, vocation, level } = result;
    const codify: IToken = { id, username, vocation, level };
    const token = jwt.sign({ codify }, secret, jwtConfig);
    return token;
  }
}

export default UserService;