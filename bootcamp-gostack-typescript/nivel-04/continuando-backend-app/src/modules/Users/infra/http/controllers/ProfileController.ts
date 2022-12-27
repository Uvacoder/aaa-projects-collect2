import { container } from 'tsyringe';
import { Request, Response } from 'express';
import UpdateProfileService from '@modules/Users/services/UpdateProfileService';
import ShowProfileService from '@modules/Users/services/ShowProfileService';

class ProfileController {
  public async show(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const showProfile = container.resolve(ShowProfileService);

    const { password: _, ...userWithoutPassword } = await showProfile.execute(
      user_id,
    );

    return response.json(userWithoutPassword);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { name, email, password, oldPassword } = request.body;

    const updateProfile = container.resolve(UpdateProfileService);

    const user = await updateProfile.execute({
      user_id,
      name,
      email,
      oldPassword,
      password,
    });

    const { password: _, ...userWithoutPassword } = user;

    return response.json(userWithoutPassword);
  }
}

export default ProfileController;
