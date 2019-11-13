import * as mongoose from 'mongoose';

const featSchema = new mongoose.Schema({
  cid: String,
  feats: [],
});

const Feat = mongoose.model('Feat', featSchema);

export default Feat;
