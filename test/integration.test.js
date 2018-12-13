const chai = require('chai');
const chaiHttp = require('chai-http');
// const ApiController = require('../src/controllers/ApiController');

// const apiController = new ApiController();
let should = chai.should();

chai.use(chaiHttp);

describe('Dogs', () => {
  describe('/GET Dogs', () => {
    it('it should get all dogs', (done) => {
      chai.request('http://localhost:3003')
        .get('/dogs')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });
  });
  describe('/POST Dogs', () => {
    it('it shoud a POST new dog', (done) => {
      let dog = {
        value: '800.00',
        age: '4 meses',
        picture: 'buldogue.jpg',
        breed_id: '36',
      };
      chai.request('http://localhost:3003')
        .get('/dogs')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body[0].should.have.property('value');
          res.body[0].should.have.property('age');
          res.body[0].should.have.property('picture');
          res.body[0].should.have.property('breed_id');
          done();
        });
    });
  });
});
