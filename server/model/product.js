import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const model = mongoose.model;
const models = mongoose.models;

const productSchema = new Schema({
  code: Number,
  category: String,
  cost: Number,
  price: Number,
  qmade: Number,
});

const Products = models.product || model('product', productSchema);
export default Products;
