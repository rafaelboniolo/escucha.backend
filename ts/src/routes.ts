import { Router } from 'express';
import RequestMonitorController from './controllers/RequestMonitorController';
import UseApiController from './controllers/UseApiController';

const routes = Router();



routes.get("/monitor", RequestMonitorController.list)

routes.get('/list', UseApiController.list)
routes.get('/list2', UseApiController.listByUser)
routes.post("/upload", UseApiController.create)

export default routes;

