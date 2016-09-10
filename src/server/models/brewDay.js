var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    date: {type: String, required: true /*, unique: true*/}/*,
    begin: {type: string},
    attendees: [{type: Schema.Types.ObjectID, ref: 'Attendees' }],
    brews: [{type: Schema.Types.ObjectID, ref: 'Brew' }]*/
});

//schema.plugin(mongooseuniquevalidator);

module.exports = mongoose.model('Brewday', schema);