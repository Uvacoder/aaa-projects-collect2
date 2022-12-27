import { classToClass } from 'class-transformer';
import { injectable, inject } from 'tsyringe';

import User from '@modules/Users/infra/typeorm/entities/User';
import IUsersRepository from '@modules/Users/repositories/IUsersRepository';
import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

interface IRequest {
  userId: string;
}

@injectable()
class ListProvidersService {
  private usersRepository: IUsersRepository;
  private cacheProvider: ICacheProvider;

  constructor(
    @inject('UsersRepository') usersRepository: IUsersRepository,
    @inject('CacheProvider') cacheProvider: ICacheProvider,
  ) {
    this.usersRepository = usersRepository;
    this.cacheProvider = cacheProvider;
  }

  public async execute({ userId }: IRequest): Promise<User[]> {
    let users = await this.cacheProvider.recover<User[]>(
      `providers-list:${userId}`,
    );

    if (!users) {
      users = await this.usersRepository.findAllProviders({
        exceptUserId: userId,
      });

      await this.cacheProvider.save(
        `providers-list:${userId}`,
        classToClass(users),
      );
    }

    return users;
  }
}

export default ListProvidersService;
