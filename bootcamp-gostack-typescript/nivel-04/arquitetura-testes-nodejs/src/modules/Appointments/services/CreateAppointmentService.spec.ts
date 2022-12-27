import 'reflect-metadata';
import { v4 as uuid } from 'uuid';

import AppError from '@shared/errors/AppError';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointmentService: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();

    createAppointmentService = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
  });

  it('Should be able to create a new appointment', async () => {
    const provider_id = uuid();
    const date = new Date();

    const appointment = await createAppointmentService.execute({
      date,
      provider_id,
    });
    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe(provider_id);
  });

  it('Should not be able to create two appointments on the same time', async () => {
    const provider_id = uuid();
    const date = new Date(2022, 0, 11, 11);

    await createAppointmentService.execute({
      date,
      provider_id,
    });

    await expect(
      createAppointmentService.execute({
        date,
        provider_id,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
