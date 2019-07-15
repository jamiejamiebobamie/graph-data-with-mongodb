
const Schema = mongoose.Schema;

const EdgeSchema = new Schema({
    id: { type: String},
    source: { id: String, weight: Number },
    target: { id: String, weight: Number },
});

module.exports = mongoose.model("Edge", EdgeSchema);
