var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    no: {type: int, required: true, unique: true},
    brewday: {type: Schema.Types.ObjectId, ref: 'BrewDay'}
});

schema.plugin(mongooseuniquevalidator);

module.exports = mongoose.model('Brew', schema);