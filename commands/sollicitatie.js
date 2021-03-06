const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "764178937621381130"

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;

    var ticketBestaat = false;

    message.guild.channels.cache.forEach(channel => {

        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {
            ticketBestaat = true;

            message.reply("Je hebt al een sollicitatie aangemaakt!");

            return;

        }

    });

    if (ticketBestaat) return;

    var embed = new discord.MessageEmbed()
        .setTitle("Hallo! " + message.author.username)
        .setDescription(`Je sollicitatie is aangemaakt!`);

    message.channel.send(embed);

    message.guild.channels.create(userName.toLowerCase() + "-" + "sollicitatie", { type: "text" }).then(
        (createdChannel) => {
            createdChannel.setParent(categoryID).then(
                (settedParent) => {

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    });

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === 'DienstChef'), {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true
                    });

                    settedParent.updateOverwrite(message.author.id, {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true
                    });

                    var embedParent = new discord.MessageEmbed()
                        .setTitle(`Hallo! ${message.author.username}`)
                        .setDescription("Solliciteren? Typ: !dsi !kmar !brw !amb !pol !rws !dvp voor de vragen!");

                    settedParent.send(embedParent);




                }
            ).catch(err => {
                message.channel.send("Er is iets foutsgelopen");
            });
        }
    ).catch(err => {
        message.channel.send("Er is iets foutsgelopen");
    });


}

module.exports.help = {
    name: "sollicitatie"
}