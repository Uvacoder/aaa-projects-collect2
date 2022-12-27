import { injectable, inject } from 'tsyringe';

import User from '@modules/Users/infra/typeorm/entities/User';
import IUsersRepository from '@modules/Users/repositories/IUsersRepository';

interface IRequest {
  userId: string;
}

@injectable()
class ListProvidersService {
  private usersRepository: IUsersRepository;

  constructor(@inject('UsersRepository') usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async execute({ userId }: IRequest): Promise<User[]> {
    const users = await this.usersRepository.findAllProviders({
      exceptUserId: userId,
    });

    return users;
  }
}

export default ListProvidersService;
