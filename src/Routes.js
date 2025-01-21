const Utilities = require('./Utilities');
const express = require('express');
const Route = express.Router();

const AuthController = require('./controllers/AuthController');
const LaboController = require('./controllers/LaboController');
const CrudController = require('./controllers/CrudController');

Route.route('/').get((req, res) =>
    Utilities.apiResponse(res, 200, 'Server Running'),
);

Route.route('/api/v1/login')
    .post(Utilities.decryptRequestBody, AuthController.login)
    .all((req, res) => Utilities.apiResponse(res, 405, `Not Allowed`));

Route.route('/api/v1/signup')
    .post(Utilities.decryptRequestBody, AuthController.signup)
    .all((req, res) => Utilities.apiResponse(res, 405, `Not Allowed`));

Route.route('/api/v1/users')
    .post(CrudController.createUser)
    .get(CrudController.getUsers)
    .put(CrudController.updateUser)
    .delete(CrudController.deleteUser)
    .all((req, res) => Utilities.apiResponse(res, 405, `Not Allowed`));

Route.route('/api/v1/user/:userId').get(CrudController.getUser);

Route.route('/api/v1/validate-token').get(
    Utilities.verifyAccessToken,
    AuthController.validateToken,
);

// route CRUDS for labo
Route.route('/api/v1/labo')
    .post(LaboController.createLabo)
    .get(LaboController.getLabos)
    .put(LaboController.updateLabo)
    .delete(LaboController.deleteLabo)
    .all((req, res) => Utilities.apiResponse(res, 405, `Not Allowed`));

Route.route('/api/v1/labo/:codeNo').get(LaboController.getLaboByCodeNo);

Route.route('/api/v1/labo/clinic/:clinic').get(LaboController.getLaboByClinic);

Route.route('/api/v1/labo/labo-name/:laboName').get(LaboController.getLaboByLaboName);

Route.route('/api/v1/labo/position/:position').get(LaboController.getLaboByPosition);

Route.route('/api/v1/labo/fullname/:fullName').get(LaboController.getLaboByFullname);

module.exports = Route;
