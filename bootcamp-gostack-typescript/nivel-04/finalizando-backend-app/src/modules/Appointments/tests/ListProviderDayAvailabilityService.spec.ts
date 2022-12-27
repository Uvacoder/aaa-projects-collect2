import 'reflect-metadata';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderDayAvailabilityService from '../services/ListProviderDayAvailabilityService';

let listProviderDayAvailability: ListProviderDayAvailabilityService;
let fakeAppointmentRepository: FakeAppointmentsRepository;

describe('ListProviderDayAvailabilityService', () => {
  beforeEach(() => {
    fakeAppointmentRepository = new FakeAppointmentsRepository();
    listProviderDayAvailability = new ListProviderDayAvailabilityService(
      fakeAppointmentRepository,
    );
  });

  it('Should be able to list the day availability provider', async () => {
    await fakeAppointmentRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2022, 0, 14, 14, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2022, 0, 14, 15, 0, 0),
    });

    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2022, 0, 14, 11).getTime();
    });

    const availability = await listProviderDayAvailability.execute({
      providerId: 'user',
      day: 14,
      month: 1,
      year: 2022,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { available: false, hour: 9 },
        { available: false, hour: 10 },
        { available: false, hour: 14 },
        { available: false, hour: 15 },
        { available: true, hour: 16 },
      ]),
    );
  });
});
