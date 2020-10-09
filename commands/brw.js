const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("BRW Vragen")
        .setColor("#2a4724")
        .addFields(
            { name: "Vraag 1", value: "Wat is je Roblox naam?" },
            { name: "Vraag 2", value: "Is je roblox account 13+?" },
            { name: "Vraag 3", value: "Waarom wil je solliciteren?" },
            { name: "Vraag 4", value: "Waarom kies je voor BRW?" },
            { name: "Vraag 5", value: "Som hier een paar begrippen op van BRW." },
            { name: "Vraag 6", value: "Waarvoor staat BRW?" },
            { name: "Vraag 7", value: "Wat is P1?" },
            { name: "Vraag 8", value: "Wat is MS?" },
            { name: "Vraag 9", value: "Wat is CH?" },
            { name: "Vraag 10", value: "Wat is P4?" },
            { name: "Vraag 11", value: "Wat is BTGV (uitleg+betekenis)" },
            { name: "Vraag 12", value: "Heb jij vragen voor ons?" },
        );


    return message.channel.send(botEmbed);


}

module.exports.help = {
    name: "brw"
}