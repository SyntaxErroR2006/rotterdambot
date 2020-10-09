const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("AMB Vragen")
        .setColor("#fff700")
        .addFields(
            { name: "Vraag 1", value: "Wat is je Roblox naam?" },
            { name: "Vraag 2", value: "Is je roblox account 13+?" },
            { name: "Vraag 3", value: "Waarom wil je solliciteren?" },
            { name: "Vraag 4", value: "Waarom kies je voor AMB?" },
            { name: "Vraag 5", value: "Som hier een paar begrippen op van AMB." },
            { name: "Vraag 6", value: "Waarvoor staat AMB?" },
            { name: "Vraag 7", value: "Wat is A1?" },
            { name: "Vraag 8", value: "Wat is B-rit?" },
            { name: "Vraag 9", value: "Wat is Thorax?" },
            { name: "Vraag 10", value: "Wat is A3?" },
            { name: "Vraag 11", value: "Heb jij vragen voor ons?" },
        );


    return message.channel.send(botEmbed);


}

module.exports.help = {
    name: "amb"
}