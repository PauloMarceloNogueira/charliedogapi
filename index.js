import prettyError from 'pretty-error';
prettyError.start();


import ApiController from './src/controllers/ApiController';

const apiController = new ApiController();
apiController.run(() => {
  console.log('Api is up and running');
});