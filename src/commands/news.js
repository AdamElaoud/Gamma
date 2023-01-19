const { SlashCommandBuilder, ActionRowBuilder } = require("discord.js");
const { inviteButton, helpButton, websiteButton } = require("../components/buttons/linkButtons");
const { newsEmbed } = require("../components/embeds/newsEmbed");
const { logError, logCommand } = require("../util/logger");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("news")
        .setDescription("News and updates for Gamma"),
    execute: async (interaction) => {
        const { locale } = interaction;

        logCommand(interaction);

        const buttons = [inviteButton(locale), helpButton(locale), websiteButton(locale)];
        const buttonRow = new ActionRowBuilder().addComponents(...buttons);

        const embed = newsEmbed(locale);

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