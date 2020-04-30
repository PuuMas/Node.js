var assert = require('assert');
var toiseenPotenssiin = require('.\\toiseenPotenssiin');
var henkilo = require('.\\henkilotun');


describe('Potenssi', function () {
  describe('toiseenPotenssiin()', function () {
    //Onkohan tässä nyt annettu tarpeeksi erinlaisia testejä ajettavaksi??
    it('Palauttaa arvon false jos luku on negatiivinen', function () {
      assert.equal(false, toiseenPotenssiin.kikkailua("-100"));
    });
    it('Palauttaa arvon true jos luku on annettu oikein', function () {
      assert.equal(true, toiseenPotenssiin.kikkailua("12"));
    });
    it('Palauttaa arvon false jos luku on annettu väärässä muodossa', function () {
      assert.equal(false, toiseenPotenssiin.kikkailua("abcd"));
    });
    it('Palauttaa arvon true jos luku on annettu int muodossa', function () {
      assert.equal(true, toiseenPotenssiin.kikkailua(125));
    });
    it('Palauttaa arvon true jos luku on annettu laskukaavana', function () {
      assert.equal(true, toiseenPotenssiin.kikkailua(125+100));
    });
  });
});

// Ei näitä pysty keksimään...
describe('Henktunnus', function (){
  describe('henkilotun()', function(){
    it('Palauttaa arvon false jos tunnus on annettu väärin', function(){
      assert.equal(false, henkilo.kikkailuaosa2("110287-1872"));
    });
    it('Palauttaa arvon true jos tunnus on annettu oikein', function(){
      assert.equal(true, henkilo.kikkailuaosa2("280199-978Y"));
    });
    it('Palauttaa arvon false jos tunnus on annettu int muodossa', function(){
      assert.equal(false, henkilo.kikkailuaosa2(280199-978));
    });
    it('Palauttaa arvon false jos tunnus on annettu väärin ja tulos ei täsmää', function(){
      assert.equal(false, henkilo.kikkailuaosa2("280199-978A"));
    });
    it('Palauttaa arvon false jos tunnuksesta puuttu väliviiva', function(){
      assert.equal(false, henkilo.kikkailuaosa2("280199978A"));
    });
    it('Palauttaa arvon false jos tunnuksen väliviiva on korvattu pisteellä tai jollain muulla kuin väliviivalla', function(){
      assert.equal(false, henkilo.kikkailuaosa2("280199.978A"));
    });
    it('Palauttaa arvon false jos tunnuksen tarkistusmerkki on annettu pienellä kirjaimella', function(){
      assert.equal(false, henkilo.kikkailuaosa2("280199-978a"));
    });
    it('Palauttaa arvon false jos tunnuksen eka osa on annettu int muodossa ja tarkistus stringinä', function(){
      assert.equal(false, henkilo.kikkailuaosa2(280199-978+"Y"));
    });
    it('Palauttaa arvon false jos tunnus on liian pitkä', function(){
      assert.equal(false, henkilo.kikkailuaosa2("280199-9782Y"));
    });
  });
});