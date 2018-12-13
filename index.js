import prettyError from 'pretty-error';
import ApiController from './src/controllers/ApiController';

prettyError.start();
const apiController = new ApiController();
apiController.run(() => {
  console.log(`Api is running on ${process.env.RESTIFY_PORT}`);
});
