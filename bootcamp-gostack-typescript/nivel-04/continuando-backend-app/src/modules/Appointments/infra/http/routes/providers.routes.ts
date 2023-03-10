import { Router } from 'express';

import ensureAuthenticated from '@modules/Users/infra/http/middleware/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';
import ProviderMonthAvailabilityController from '../controllers/ProviderMonthAvailabilityController';
import ProviderDayAvailabilityController from '../controllers/ProviderDayAvailabilityController';

const providersRouter = Router();
const providersController = new ProvidersController();
const providerMonthAvailability = new ProviderMonthAvailabilityController();
const providerDayAvailability = new ProviderDayAvailabilityController();

providersRouter.use(ensureAuthenticated);
providersRouter.get('/', providersController.show);
providersRouter.get(
  '/:provider_id/month-availability',
  providerMonthAvailability.show,
);
providersRouter.get(
  '/:provider_id/day-availability',
  providerDayAvailability.show,
);

export default providersRouter;
