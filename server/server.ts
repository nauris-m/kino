import * as express from 'express';
import {Application} from 'express';
import {getAllDummyData} from './get-data.route';

const app: Application = express();

app.route('/api').get(getAllDummyData);

const httpServer = app.listen(9000, () => {
  console.log('HTTP REST API Server running at http://localhost:' + httpServer.address().port);
});
