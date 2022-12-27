import { container } from 'tsyringe';

import '@modules/Users/providers';

import '@shared/container/providers/MailTemplateProvider';
import '@shared/container/providers/MailProvider';
import '@shared/container/providers/StorageProvider';
import '@shared/container/providers/CacheProvider';

import IAppointmentRepository from '@modules/Appointments/repositories/IAppointmentsRepository';
import AppointmentsRepository from '@modules/Appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersRepository from '@modules/Users/repositories/IUsersRepository';
import UsersRepository from '@modules/Users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/Users/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/Users/infra/typeorm/repositories/UserTokensRepository';

import INotificationsRepository from '@modules/Notifications/repositories/INotificationsRepository';
import NotificationsRepository from '@modules/Notifications/infra/typeorm/repositories/NotificationsRepository';

container.registerSingleton<IAppointmentRepository>(
  'AppointmentsRepository',
  AppointmentsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);

container.registerSingleton<INotificationsRepository>(
  'NotificationsRepository',
  NotificationsRepository,
);
