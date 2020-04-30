'use strict'

module.exports = 
{
    kikkailua: function (luku)
    {
        
        try{
            luku = parseInt(luku);
        }
        catch(error){
            return false;
        }
        if(luku <= 0){
            return false;

        }if(luku > 0){
            //var toimitus = Math.pow(luku,2);
            return true;
        }
        return false;
    }
}