const { buildTitle } = require("../../lang/utils");
const { lightParchment } = require("../../util/colors");
const { bar } = require("../../util/emojis");

exports.commandLogEmbed = (interaction) => {
    const { channel, commandName, guild: server, user } = interaction;
    const timeNow = Math.round(Date.now() / 1000); // get time in sec

    return {
        color: lightParchment,
        title: `:dividers: ${buildTitle("COMMAND LOG", bar.emoji, true)} :dividers:`,
        description: `**Command Used:** /${commandName}`
                    + `\n**User:** ${user}`
                    + `\n**Server:** ${server}`
                    + `\n**Channel:** ${channel}`
                    + `\n**Date:** <t:${timeNow}:R>`
    };
};