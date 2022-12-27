import 'reflect-metadata';

import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import ShowProfileService from './ShowProfileService';

let fakeUserRepository: FakeUsersRepository;
let showProfileService: ShowProfileService;

describe('ShowProfile', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUsersRepository();
    showProfileService = new ShowProfileService(fakeUserRepository);
  });

  it('Should be able to show one user', async () => {
    const { id: user_id } = await fakeUserRepository.create({
      name: 'John Doe',
      email: 'johndoe@exemple.com',
      password: '123456',
    });

    const user = await showProfileService.execute(user_id);

    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('email');
    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('johndoe@exemple.com');
  });

  it('Should not be able show the profile from non-existing user', async () => {
    await expect(
      showProfileService.execute('non-existing-user-id'),
    ).rejects.toBeInstanceOf(AppError);
  });
});
