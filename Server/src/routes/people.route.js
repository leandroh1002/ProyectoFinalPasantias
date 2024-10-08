const { Router } = require('express');
const peopleRouter = Router();

const { getPeopleController } = require ('../controllers/people/getPeople.controller');
const { getPeopleIdController } = require('../controllers/people/getPeopleId.controller');
const { postPeoplePublish } = require('../controllers/people/postPeoplePublish');
const { getPeoplePublish } = require('../controllers/people/getPeoplePublish');
const { putPeopleController } = require('../controllers/people/putPeople.controller');

peopleRouter.get('/people', getPeopleController);
peopleRouter.get('/people/:idPeople', getPeopleIdController);
peopleRouter.post('/people', postPeoplePublish);
peopleRouter.get('/people/publish/:idPeople', getPeoplePublish);
peopleRouter.put('/people', putPeopleController);

module.exports = peopleRouter;