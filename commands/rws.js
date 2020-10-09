const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("RWS Vragen")
        .setColor("#88ff00")
        .addFields(
            { name: "Vraag 1", value: "Wat is je Roblox naam?" },
            { name: "Vraag 2", value: "Is je roblox account 13+?" },
            { name: "Vraag 3", value: "Waarom wil je solliciteren?" },
            { name: "Vraag 4", value: "Waarom kies je voor RWS?" },
            { name: "Vraag 5", value: "Som hier een paar begrippen op van RWS." },
            { name: "Vraag 6", value: "Waarvoor staat RWS?" },
            { name: "Vraag 7", value: "Wat is Infrastructuur?" },
            { name: "Vraag 8", value: "Wat doet RWS?" },
            { name: "Vraag 9", value: "Hoe sluit je een weg af?" },
            { name: "Vraag 10", value: "Heb jij vragen voor ons?" },
        );


    return message.channel.send(botEmbed);


}

module.exports.help = {
    name: "rws"
}