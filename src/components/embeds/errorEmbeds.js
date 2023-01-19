const { RESTJSONErrorCodes } = require("discord.js");
const { buildTitle } = require("../../lang/utils");
const { errorRed } = require("../../util/colors");
const { bar } = require("../../util/emojis");

const {
    InteractionHasAlreadyBeenAcknowledged,
    UnknownInteraction,
    UnknownMessage
} = RESTJSONErrorCodes;
const ERROR_CODE_MESSAGES = {
    [InteractionHasAlreadyBeenAcknowledged]: `[${InteractionHasAlreadyBeenAcknowledged}] Multiple Instances of bot running (interaction already acknowledged)`,
    [UnknownInteraction]: `[${UnknownInteraction}] Unknown Interaction`,
    [UnknownMessage]: `[${UnknownMessage}] Collector could not end (initial message deleted)`
};

const getErrorMessage = ({ code }) => ERROR_CODE_MESSAGES[code];

exports.errorEmbed = (interaction, error) => {
    const { channel, commandName, guild: server, user } = interaction;
    const timeNow = Math.round(Date.now() / 1000); // get time in sec


    const errorMessage = getErrorMessage(error) || error;

    return {
        color: errorRed,
        title: `❗ ${buildTitle("ERROR LOG", bar.emoji, true)} ❗`,
        description: `**Command Used:** /${commandName}`
                    + `\n**User:** ${user}`
                    + `\n**Server:** ${server}`
                    + `\n**Channel:** ${channel}`
                    + `\n**Date:** <t:${timeNow}:R>`
                    + `\n\n**Error:**\n${errorMessage}`
    };
};