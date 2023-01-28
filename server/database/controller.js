import Products from '../model/product.js';

// get: http://localhost:3000/api/users
export async function getProducts(req, res) {
  try {
    const products = await Products.find({});
    if (!products) return res.status(404).json({ error: 'Data not found' });
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ error: 'Error while fetching data' });
  }
}
// get: http://localhost:3000/api/users/1
export async function getProduct(req, res) {
  try {
    const { productId } = req.query;
    if (productId) {
      const product = await Products.findById(productId);
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'product not selected' });
    }
  } catch (error) {
    res.status(404).json({ error: 'Error while fetching data' });
  }
}

// post: http://localhost:3000/api/users
export async function postProduct(req, res) {
  try {
    const formData = req.body;
    if (!formData) return res.status(404).json({ error: 'data not found' });
    Products.create(formData, function (err, data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    res.status(404).json({ error });
  }
}

// put: http://localhost:3000/api/users/1
export async function putProduct(req, res) {
  try {
    const { productId } = req.query;
    const formData = req.body;
    if (productId && formData) {
      const product = await Products.findByIdAndUpdate(productId, formData);
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: 'product not selected' });
    }
  } catch (error) {
    res.status(404).json({ error: 'Error while updating data' });
  }
}
// delete: http://localhost:3000/api/users/1
export async function deleteProduct(req, res) {
  try {
    const { productId } = req.query;
    if (productId) {
      const product = await Products.findByIdAndDelete(productId);
      return res.status(200).json({ deleted: productId });
    }
    res.status(404).json({ error: 'user not selected' });
  } catch (error) {
    res.status(404).json({ error: 'Error while deleting product' });
  }
}
