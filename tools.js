var assert = require('assert');
var toiseenPotenssiin = require('.\\toiseenPotenssiin');

descripe('Potenssi', function(){
    descripe('toiseenPotenssiin()', function(){
        it('Palauttaa arvon false jos lasku on väärin', function(){
            assert.equal(false, toiseenPotenssiin(100))
        })
    })
})