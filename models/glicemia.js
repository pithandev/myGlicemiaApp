const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const glicemiaSchema = new Schema({

    data: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },

}, {timestamps: true})

const Glicemia = mongoose.model("Glicemia", glicemiaSchema);

module.exports = Glicemia;