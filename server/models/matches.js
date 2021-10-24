const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchSchema = new Schema({
    riki1: {
        type: Number,
    },
    riki2: {
        type: Number,
    },
    record: {
        type: String,
    },
});

matchSchema.index({ riki1: 1, riki2: 1 }, { unique: true });

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;