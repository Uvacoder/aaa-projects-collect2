import { container } from 'tsyringe';
import { Request, Response } from 'express';
import ListProviderAppointmentsService from '@modules/Appointments/services/ListProviderAppointmentsService';
import { classToClass } from 'class-transformer';

class ProviderAppointmentsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { year, month, day } = request.query;

    const listProviders = container.resolve(ListProviderAppointmentsService);

    const appointments = await listProviders.execute({
      providerId: user_id,
      year: Number(year),
      month: Number(month),
      day: Number(day),
    });

    return response.json(classToClass(appointments));
  }
}

export default ProviderAppointmentsController;
