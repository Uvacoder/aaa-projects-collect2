import { container } from 'tsyringe';
import { Request, Response } from 'express';

import ListProvidersService from '@modules/Appointments/services/ListProvidersService';

class ProvidersController {
  public async show(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;

    const listProviders = container.resolve(ListProvidersService);

    const providers = await listProviders.execute({
      userId,
    });

    return response.json(providers);
  }
}

export default ProvidersController;
