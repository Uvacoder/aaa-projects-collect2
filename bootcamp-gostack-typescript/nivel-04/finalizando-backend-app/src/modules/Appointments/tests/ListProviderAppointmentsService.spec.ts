import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import 'reflect-metadata';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderAppointments from '../services/ListProviderAppointmentsService';

let listProviderAppointments: ListProviderAppointments;
let fakeAppointmentRepository: FakeAppointmentsRepository;
let fakeCacheProvider: FakeCacheProvider;

describe('ListProviderAppointmentsService', () => {
  beforeEach(() => {
    fakeAppointmentRepository = new FakeAppointmentsRepository();
    fakeCacheProvider = new FakeCacheProvider();
    listProviderAppointments = new ListProviderAppointments(
      fakeAppointmentRepository,
      fakeCacheProvider,
    );
  });

  it('Should be able list the appointments on a specific day', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2022, 0, 14, 11).getTime();
    });

    const appointment1 = await fakeAppointmentRepository.create({
      provider_id: 'provider',
      user_id: 'user',
      date: new Date(2022, 0, 14, 14, 0, 0),
    });

    const appointment2 = await fakeAppointmentRepository.create({
      provider_id: 'provider',
      user_id: 'user',
      date: new Date(2022, 0, 14, 15, 0, 0),
    });

    const availability = await listProviderAppointments.execute({
      providerId: 'provider',
      day: 14,
      month: 1,
      year: 2022,
    });

    expect(availability).toEqual([appointment1, appointment2]);
  });
});
