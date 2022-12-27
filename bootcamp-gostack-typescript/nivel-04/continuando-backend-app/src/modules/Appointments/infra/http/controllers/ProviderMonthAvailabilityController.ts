import { container } from 'tsyringe';
import { Request, Response } from 'express';
import ListProviderMonthAvailabilityService from '@modules/Appointments/services/ListProviderMonthAvailabilityService';

class ProviderMonthAvailabilityController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { year, month } = request.body;
    const { provider_id } = request.params;

    const listProviders = container.resolve(
      ListProviderMonthAvailabilityService,
    );

    const availability = await listProviders.execute({
      providerId: provider_id,
      month,
      year,
    });

    return response.json(availability);
  }
}

export default ProviderMonthAvailabilityController;
