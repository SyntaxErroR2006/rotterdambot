const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "764178937621381130";

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Jij kan dit niet doen");

    if (message.channel.parentID == categoryID) {
        message.channel.delete();
    } else {

        message.channel.send("Gelieve dit commando te doen bij een ticket!");

    }

}

module.exports.help = {
    name: "closesol"
}