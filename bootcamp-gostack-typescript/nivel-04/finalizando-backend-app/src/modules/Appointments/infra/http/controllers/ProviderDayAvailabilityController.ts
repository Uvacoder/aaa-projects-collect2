import { container } from 'tsyringe';
import { Request, Response } from 'express';

import ListProviderDayAvailabilityService from '@modules/Appointments/services/ListProviderDayAvailabilityService';

class ProviderDayAvailabilityController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { year, month, day } = request.query;
    const { provider_id } = request.params;

    const listProviders = container.resolve(ListProviderDayAvailabilityService);

    const availability = await listProviders.execute({
      providerId: provider_id,
      year: Number(year),
      month: Number(month),
      day: Number(day),
    });

    return response.json(availability);
  }
}

export default ProviderDayAvailabilityController;
