const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');

const LaboSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    codeNo: {
        type: String,
        required: true,
        unique: true,
    },
    clinic: {
        type: String,
        required: true,
    },
    validTo: {
        type: Date,
        required: true,
    },
    laboName: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    restorationType: {
        type: String,
    },
    origin: {
        type: String,
        required: true,
    },
    toothColor: {
        type: String,
    }
}, { timestamps: { currentTime: () => Date.now() } }); // Enable automatic timestamps

LaboSchema.plugin(mongoosePaginate);

const Labo = mongoose.model('labo', LaboSchema);
module.exports = Labo;
