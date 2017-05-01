var mongoose = require('mongoose');

var problemSchema = mongoose.Schema({
    consumoCombustivel : Number,
    forcaMotor         : Number,
    fumaca             : Number,
    sujeira            : Number,
    temperatura        : Number,
    pressaoDeOleo      : Number,
    solucao            : String,
    createdAt          : { type: Date, default: Date.now },
    updatedAt          : { type: Date, default: Date.now }
});

module.exports = mongoose.model('Problem', problemSchema);