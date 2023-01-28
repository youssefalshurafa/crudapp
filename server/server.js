import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/conn.js';
import router from './router/route.js';
const app = express();

// middleware
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());
const port = 8080;

// HTTP request
// app.get('/', (req, res) => {
//   res.status(201).json('Home Get Request');
// });
// api routes
app.use('/', router);

// start server only when we have valid connection

connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server connected to http://localhost:${port}`);
      });
    } catch (error) {
      console.log('Cannot connect to the server');
    }
  })
  .catch((error) => {
    console.log('Invalid database connection');
  });
