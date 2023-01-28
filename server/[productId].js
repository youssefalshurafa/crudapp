import connect from './database/conn.js';
import {
  getProduct,
  putProduct,
  deleteProduct,
} from './database/controller.js';

export default async function handler(req, res) {
  connect().catch(() =>
    res.status(405).json({ error: 'Error in the connection' })
  );
  //type of request
  const { method } = req;

  switch (method) {
    case 'GET':
      getProduct(req, res);
      break;
    case 'PUT':
      putProduct(req, res);
      break;
    case 'DELETE':
      deleteProduct(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
