const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("KMar Vragen")
        .setColor("#2a4724")
        .addFields(
            { name: "Vraag 1", value: "Wat is je Roblox naam?" },
            { name: "Vraag 2", value: "Is je roblox account 13+?" },
            { name: "Vraag 3", value: "Waarom wil je solliciteren?" },
            { name: "Vraag 4", value: "Waarom kies je voor KMar?" },
            { name: "Vraag 5", value: "Som hier een paar begrippen op van KMar." },
            { name: "Vraag 6", value: "Waarvoor staat KMar?" },
            { name: "Vraag 7", value: "Wat is HRB?" },
            { name: "Vraag 8", value: "Wat is BSB?" },
            { name: "Vraag 9", value: "Wat doet de HRB?" },
            { name: "Vraag 10", value: "Wat doet de BSB?" },
            { name: "Vraag 13", value: "Wat is BTGV (uitleg+betekenis)" },
            { name: "Vraag 14", value: "Heb jij vragen voor ons?" },
        );


    return message.channel.send(botEmbed);


}

module.exports.help = {
    name: "kmar"
}