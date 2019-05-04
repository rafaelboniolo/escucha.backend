import { Router } from 'express';
import UseApiController from './controllers/UseApiController';
import WordAnalyzerController from './controllers/WordAnalyzerController';
import ApiKeyController from './controllers/ApiKeyController';

const routes = Router();


// routes.post("/word", WordAnalyzerController.create)

routes.get('/list', UseApiController.list)
routes.get('/listme', UseApiController.myCost)

routes.post("/upload", UseApiController.create)

routes.post('/registerkey', ApiKeyController.create)
export default routes;
