import { container } from 'tsyringe';
import { parseISO } from 'date-fns';
import { Request, Response } from 'express';

import CreateAppointmentService from '@modules/Appointments/services/CreateAppointmentService';

class AppointmentController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { provider_id, date } = request.body;

    const parseDate = parseISO(date);

    const createAppointment = container.resolve(CreateAppointmentService);

    const appointment = await createAppointment.execute({
      date: parseDate,
      provider_id,
    });

    return response.json(appointment);
  }
}

export default AppointmentController;
