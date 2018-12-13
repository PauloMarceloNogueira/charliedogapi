import Users from '../models/Users';
import Breeds from '../models/Breeds';
import DeliveryAddress from '../models/DeliveryAddress';
import Dogs from '../models/Dogs';
import CheckIn from '../models/CheckIn';

module.exports = class RoutesController {
  constructor(restify) {
    if (restify) {
      this.restify = restify;
      this.applyRoutes();
      this.users = Users;
      this.breeds = Breeds;
      this.address = DeliveryAddress;
      this.dogs = Dogs;
      this.checkin = CheckIn;
    }
  }

  applyRoutes() {
    this.restify.get('/users/:id', (req, res) => this.users.getUser(req, res));
    this.restify.get('/users', (req, res) => this.users.getUsers(req, res));
    this.restify.post('/users', (req, res) => this.users.insertUser(req, res));
    this.restify.put('/users', (req, res) => this.users.updateUser(req, res));
    this.restify.del('/users/:id', (req, res) => this.users.deleteUser(req, res));

    this.restify.get('/breeds/:id', (req, res) => this.breeds.getBreed(req, res));
    this.restify.get('/breeds', (req, res) => this.breeds.getBreeds(req, res));
    this.restify.post('/breeds', (req, res) => this.breeds.insertBreed(req, res));
    this.restify.put('/breeds', (req, res) => this.breeds.updateBreed(req, res));
    this.restify.del('/breeds/:id', (req, res) => this.breeds.deleteBreed(req, res));

    this.restify.get('/address/:id', (req, res) => this.address.getDeliveryAddress(req, res));
    this.restify.get('/addresses', (req, res) => this.address.getDeliveryAddresses(req, res));
    this.restify.post('/address', (req, res) => this.address.insertDeliveryAddress(req, res));
    this.restify.put('/address', (req, res) => this.address.updateDeliveryAddress(req, res));
    this.restify.del('/address/:id', (req, res) => this.address.deleteDeliveryAddress(req, res));

    this.restify.get('/dogs/:id', (req, res) => this.dogs.getDog(req, res));
    this.restify.get('/dogs', (req, res) => this.dogs.getDogs(req, res));
    this.restify.post('/dogs', (req, res) => this.dogs.insertDog(req, res));
    this.restify.put('/dogs', (req, res) => this.dogs.updateDog(req, res));
    this.restify.del('/dogs/:id', (req, res) => this.dogs.deleteDog(req, res));
    this.restify.get('/dogs/size/:size', (req, res) => this.dogs.getDogsBySize(req, res));
    this.restify.get('/dogs/value/:valueMax/:valueMin', (req, res) => this.dogs.getDogsByValue(req, res));

    this.restify.get('/checkin/:userId', (req, res) => this.checkin.getUserCheckin(req, res));
    this.restify.post('/checkin', (req, res) => this.checkin.insertCheckin(req, res));
  }
};
