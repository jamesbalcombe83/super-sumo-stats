const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rikishiSchema = new Schema({
    id: {
        type: Number,
        unique: true
    },
    ringName: { 
        type: String,
        required: true
    },
    realName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
    },
    birthPlace: {
        type: String,
    },
    heya: {
        type: String,
    },
    highestRank: {
        type: String,
    },
    height: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    openingBasho: {
        type: Date,
    },
    retirementBasho: {
        type: Date,
    },
});

//model for rikishi, capitalise, pluralised automatically, them the schema
const Rikishi = mongoose.model('Rikishi', rikishiSchema);

module.exports = Rikishi;