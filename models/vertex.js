
const Schema = mongoose.Schema;

const Edge = mongoose.model('Edge', {
  id: String,
  source: {
    id: String,
    weight: Number
  },
  target: {
    id: String,
    weight: Number
  }
})
