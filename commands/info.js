const discord = require("discord.js");  

module.exports.run = async(client, message, args) => {

    try{

        var text = "**__RotterdamBot__** \n\n **Algemene commands** \n !info - Geeft dit scherm. \n !ping - Geeft de ping. \n !leden - Geeft het aantal leden weer. \n !new -  Maakt een ticket. \n !sollicitatie - Maakt een sollicitatie ticket. \n\n **Staff Commands** \n !training - Hiermee kan je een training inplannen. \n !ban - Hiermee kan je iemand bannen. \n !close Closed een ticket. \n !closesol - Closed een Sollicitatie."
        
        message.author.send(text);

        message.reply("Alle commands vind je in je prive berichten! 🔏")

    }catch(error){
        message.reply("Er is iets foutsgelopen");
    }
    
}

module.exports.help = {
    name: "info"
}