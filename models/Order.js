import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Define the structure of an order document
const OrderSchema = new Schema({
  size: String,
  dough: String,
  sauce: String,
  chicken: String,
  cheese: String,
  toppings: Array,
  price: Number,
});

// Create a model using the schema
const Order = mongoose.model('Order', OrderSchema);

export default Order;
