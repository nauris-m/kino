import * as express from 'express';

import UserCtrl from './controllers/user';
import FeatCtrl from './controllers/feat';

export default function setRoutes(app) {

  const router = express.Router();

  const featCtrl = new FeatCtrl();
  const userCtrl = new UserCtrl();

  // Features
  router.route('/feats').get(featCtrl.getAll);
  router.route('/feats/count').get(featCtrl.count);
  router.route('/feat').post(featCtrl.insert);
  router.route('/feat/:id').get(featCtrl.getId);
  router.route('/feat/:id').put(featCtrl.update);
  router.route('/feat/:id').delete(featCtrl.delete);

  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
