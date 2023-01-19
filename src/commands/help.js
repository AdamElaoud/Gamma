const { SlashCommandBuilder, ActionRowBuilder } = require("discord.js");
const { inviteButton, helpButton, websiteButton } = require("../components/buttons/linkButtons.js");
const { helpEmbed } = require("../components/embeds/helpEmbeds.js");
const { logCommand, logError } = require("../util/logger.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("View list of explanations of Gamma's commands"),
    execute: async (interaction) => {
        const { locale } = interaction;

        logCommand(interaction);

        const buttons = [inviteButton(locale), helpButton(locale), websiteButton(locale)];
        const buttonRow = new ActionRowBuilder().addComponents(...buttons);

        const embed = helpEmbed(locale);

        try {
            await interaction.reply({
                embeds: [embed],
                components: [buttonRow]
            });

        } catch (error) {
            logError(interaction, error);
            console.error("ERROR:\n", error);
        }
    }
};