import jwt from 'jsonwebtoken';
import UserModel from '../models/user.model';
import { IUser } from '../interfaces/users';
import { secret, jwtConfig } from '../utils/authFunctions';
import { ILogin } from '../interfaces/login';
import HttpException from '../utils/http.exception';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  public async createUser(user: IUser): Promise<string> {
    const result = await this.model.createUser(user);
    const { id, username, vocation, level } = result;
    const codify: IUser = { id, username, vocation, level };
    const token = jwt.sign({ codify }, secret, jwtConfig);
    return token;
  }

  public async validateLogin(login: ILogin): Promise<string> {
    const result = await this.model.validateLogin(login);
    if (!result) {
      throw new HttpException(401, 'Username or password invalid');
    }
    const { username, password } = result;
    const codify: ILogin = { username, password };
    const token = jwt.sign({ codify }, secret, jwtConfig);
    return token;
  }
}

export default UserService;
