const { commandLogEmbed } = require("../components/embeds/commandLogEmbeds");
const { errorEmbed } = require("../components/embeds/errorEmbeds");
const { COMMAND_LOG_CHANNEL_ID, ERROR_LOG_CHANNEL_ID, DEV_COMMAND_CHANNEL_ID } = require("./constants");

exports.logCommand = (interaction) => {
    const channel = interaction.client.channels.cache.get(COMMAND_LOG_CHANNEL_ID);
    const embed = commandLogEmbed(interaction);
    channel.send({ embeds: [embed] });
};

exports.logError = (interaction, error) => {
    const channel = interaction.client.channels.cache.get(ERROR_LOG_CHANNEL_ID);
    const embed = errorEmbed(interaction, error);
    channel.send({ embeds: [embed] });
};

exports.logBootUp = (client) => {
    const channel = client.channels.cache.get(DEV_COMMAND_CHANNEL_ID);
    channel.send("bot online!");
};