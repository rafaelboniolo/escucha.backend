import { Router } from 'express';
import UseApiController from './controllers/UseApiController';
import WordAnalyzerController from './controllers/WordAnalyzerController';
import ApiKeyController from './controllers/ApiKeyController';
import RecognizeWrappper from './controllers/RecognizeWrapper';

const routes:Router = Router();


routes.get('/list', UseApiController.list)
routes.get('/mycost', UseApiController.myCost)

routes.post("/upload", RecognizeWrappper.exec)

// routes.post('/registerkey', ApiKeyController.create)
// routes.post('/showkey', ApiKeyController.show)


export default routes;