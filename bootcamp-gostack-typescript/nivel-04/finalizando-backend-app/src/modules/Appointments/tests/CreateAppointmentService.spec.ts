import 'reflect-metadata';
import { v4 as uuid } from 'uuid';

import AppError from '@shared/errors/AppError';
import FakeNotificationsRepository from '@modules/Notifications/repositories/fakes/FakeNotificationsRepository';
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let fakeNotificationsRepository: FakeNotificationsRepository;
let fakeCacheProvider: FakeCacheProvider;
let createAppointmentService: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    fakeNotificationsRepository = new FakeNotificationsRepository();
    fakeCacheProvider = new FakeCacheProvider();
    createAppointmentService = new CreateAppointmentService(
      fakeAppointmentsRepository,
      fakeNotificationsRepository,
      fakeCacheProvider,
    );
  });

  it('Should be able to create a new appointment', async () => {
    const provider_id = uuid();
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 0, 14, 12).getTime();
    });

    const appointment = await createAppointmentService.execute({
      date: new Date(2022, 0, 14, 13),
      user_id: 'user',
      provider_id,
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe(provider_id);
  });

  it('Should not be able to create two appointments on the same time', async () => {
    const provider_id = uuid();
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2022, 0, 14, 12).getTime();
    });

    const date = new Date(2022, 0, 14, 12);

    await createAppointmentService.execute({
      date,
      provider_id,
      user_id: 'user',
    });

    await expect(
      createAppointmentService.execute({
        date,
        provider_id,
        user_id: 'user',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Should not be able to create an appointments on a past date', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 0, 14, 12).getTime();
    });

    await expect(
      createAppointmentService.execute({
        date: new Date(2020, 0, 13, 11),
        provider_id: 'provider',
        user_id: 'user',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Should not be able to create an appointment with same user as provider', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 0, 14, 12).getTime();
    });

    await expect(
      createAppointmentService.execute({
        date: new Date(2020, 0, 14, 13),
        provider_id: 'user',
        user_id: 'user',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Should not be able to create an appointment before 8am and after 5pm', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 0, 14, 12).getTime();
    });

    await expect(
      createAppointmentService.execute({
        date: new Date(2020, 0, 15, 7),
        provider_id: 'provider_id',
        user_id: 'user_id',
      }),
    ).rejects.toBeInstanceOf(AppError);

    await expect(
      createAppointmentService.execute({
        date: new Date(2020, 0, 15, 18),
        provider_id: 'provider_id',
        user_id: 'user_id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
