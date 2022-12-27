import moongose from 'mongoose';
import PointSchema from './utils/PointSchema';

const DevSchema = new moongose.Schema({
  name: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  techs: [String],
  location: {
    type: PointSchema,
    index: '2dsphere',
  },
});

module.exports = moongose.model('Dev', DevSchema);
