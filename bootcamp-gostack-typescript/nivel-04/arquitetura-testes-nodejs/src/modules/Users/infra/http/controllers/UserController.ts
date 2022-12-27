import { container } from 'tsyringe';
import { Request, Response } from 'express';

import CreateUserService from '@modules/Users/services/CreateUserService';

class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    const { password: _, ...userWithoutPassword } = user;

    return response.json(userWithoutPassword);
  }
}

export default UserController;
