import * as mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
  id: String,
  action: String,
  value: String,
});

const Car = mongoose.model('Car', logSchema);

export default Car;
