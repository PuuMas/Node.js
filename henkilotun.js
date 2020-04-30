'use strict'

module.exports = 
{
    kikkailuaosa2: function (tunnus)
    {
        //En tiedä oisko tähän ollu mitään kaunista tapaa mutta tällä mennään!
        let key = {
            0: '0',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            10: "A",
            11: "B",
            12: "C",
            13: "D",
            14: "E",
            15: "F",
            16: "H",
            17: "J",
            18: "K",
            19: "L",
            20: "M",
            21: "N",
            22: "P",
            23: "R",
            24: "S",
            25: "T",
            26: "U",
            27: "V",
            28: "W",
            29: "X",
            30: "Y"
        };

        //Testataan että käyttäjä antaa edes Sotun oikein
        let testi1 = /^[0-9]{6}\-?[0-9]{3}\d{1}$/;
        let testi2 = /^[0-9]{6}\-?[0-9]{3}\D{1}$/;
        let testi3 = /^[0-9]{6}\+?[0-9]{3}\D{1}$/;
        let testi4 = /^[0-9]{6}\+?[0-9]{3}\d{1}$/;
        let testi5 = /^[0-9]{6}\A?[0-9]{3}\d{1}$/;
        let testi6 = /^[0-9]{6}\A?[0-9]{3}\D{1}$/;
        if(!testi1.test(tunnus) && !testi2.test(tunnus) && !testi3.test(tunnus) && !testi4.test(tunnus) && !testi5.test(tunnus) && !testi6.test(tunnus)) {
            return false;
        }

        //Tässä splitataan annettu string taulukkoon ja tehään vähän matikkaa.
        var taulu = tunnus.split("");
        //Otetaan taulukosta numerot erikseen
        var arvo = taulu[0] + taulu[1] + taulu[2] + taulu[3] + taulu[4] + taulu[5] + taulu[7] + taulu[8] + taulu[9];
        //Jaetaan luku
        var jako = arvo / 31;
        //Tämä ottaa vaan tuloksesta pilkun jälkeiset
        var jaannos = jako % 1;
        //Sitten ne kerrotaan
        var final = jaannos * 31;
        // Ja tulos pyöristetään
        var pyoristys = Math.round(final);

        //Sit vähän vertaillaan.
        if(pyoristys in key && key[pyoristys] === taulu[10]){
            return true;
        }else{
            return false;
        }
    }
}