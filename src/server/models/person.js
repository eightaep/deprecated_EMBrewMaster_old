var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    nickname: {type: String, required: true},
    address: {type: String},
    brewdays: [{type: Schema.Types.ObjectId, ref: 'BrewDay'}]
});

//schema.plugin(mongooseuniquevalidator);

module.exports = mongoose.model('Person', schema);