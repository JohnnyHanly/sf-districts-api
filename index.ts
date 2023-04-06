import * as dotenv from 'dotenv';

import YelpRouter from './src/routes/yelp.route';
import bodyParser from 'body-parser';
import express from 'express';
import swaggerConfig from './swagger.json';
import swaggerUi from 'swagger-ui-express';

dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
app.use('/yelp', YelpRouter);

const port = process.env.PORT || 3002;

app.listen(port, () => {
    console.log(`App listening on PORT ${port}`);
});
