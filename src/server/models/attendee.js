var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    nickname: {type: string, required: true, unique: true},
    brewdays: [{type: Schema.Types.ObjectId, ref: 'BrewDay'}]
});

schema.plugin(mongooseuniquevalidator);

module.exports = mongoose.model('Attendee', schema);