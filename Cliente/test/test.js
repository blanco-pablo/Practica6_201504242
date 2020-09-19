const fs = require('fs');
var chai = require('chai');
var assert = chai.assert;

var suma = require('../prueba');
/*
before(done => {
    try {
        let rawdata = fs.readFileSync('../data.json');
        let json = JSON.parse(rawdata); 
        console.log("Si Encontro el archivo data.json");
        done();
    } catch (err) {
        if (err.code === 'ENOENT') {
           console.log('File not found!');
        } else {
            throw err;
        }
    }
});

*/

describe('Prueba Unitaria',function () {
   it('prueba de suma',function () {
       assert.equal(suma(2,5),5);
   }); 
});