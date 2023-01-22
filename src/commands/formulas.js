const { SlashCommandBuilder, ActionRowBuilder, ComponentType } = require("discord.js");
const {
    BASE_BUTTON_CUSTOM_ID,
    RATING_BUTTON_CUSTOM_ID,
    HEALTH_BUTTON_CUSTOM_ID,
    MISC_BUTTON_CUSTOM_ID,
    buildCategoryButtonRow
} = require("../components/buttons/categoryButtons");
const { formulasBaseEmbed, formulasRatingEmbed, formulasHealthEmbed, formulasMiscEmbed } = require("../components/embeds/formulasEmbeds");
const { getLanguageDictionary } = require("../lang/utils");
const { INTERACTION_TIME } = require("../util/constants");
const { logCommand, logError } = require("../util/logger");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("formulas")
        .setDescription("View pet talent formulas"),
    execute: async (interaction) => {
        const { locale, user: initialUser } = interaction;

        logCommand(interaction);

        let buttons = buildCategoryButtonRow(locale, BASE_BUTTON_CUSTOM_ID);
        let buttonRow = new ActionRowBuilder().addComponents(...buttons);

        const embeds = {
            [BASE_BUTTON_CUSTOM_ID]: formulasBaseEmbed(locale),
            [RATING_BUTTON_CUSTOM_ID]: formulasRatingEmbed(locale),
            [HEALTH_BUTTON_CUSTOM_ID]: formulasHealthEmbed(locale),
            [MISC_BUTTON_CUSTOM_ID]: formulasMiscEmbed(locale)
        };

        let currentPageID = BASE_BUTTON_CUSTOM_ID;

        let message;

        try {
            message = await interaction.reply({
                embeds: [embeds[currentPageID]],
                components: [buttonRow]
            });

        } catch (error) {
            logError(interaction, error);
            console.error("ERROR:\n", error);
        }

        if (message) {
            const collectorFilter = async (buttonInteraction) => {
                const { customId } = buttonInteraction;

                // only react to interactions when changing to a new page
                if (customId === currentPageID) {
                    await buttonInteraction.deferUpdate();
                    return false;
                }

                return true;
            };

            const collector = message.createMessageComponentCollector({
                componentType: ComponentType.Button,
                filter: collectorFilter,
                time: INTERACTION_TIME
            });

            collector.on("collect", async (buttonInteraction) => {
                const { customId, locale: buttonLocale, user: buttonInteractionUser } = buttonInteraction;

                if (buttonInteractionUser.id === initialUser.id) {
                    currentPageID = customId;
                    await buttonInteraction.deferUpdate();
                    buttons = buildCategoryButtonRow(locale, currentPageID);
                    buttonRow = new ActionRowBuilder().addComponents(...buttons);

                    try {
                        await interaction.editReply({ embeds: [embeds[customId]], components: [buttonRow] });

                    } catch (error) {
                        logError(interaction, error);
                        console.error("ERROR:\n", error);
                    }

                } else {
                    const dictionary = getLanguageDictionary(buttonLocale);
                    const { cannotInteract } = dictionary;

                    try {
                        await buttonInteraction.reply({ content: `*${cannotInteract}*`, ephemeral: true });

                    } catch (error) {
                        logError(interaction, error);
                        console.error("ERROR:\n", error);
                    }
                }
            });

            collector.on("end", async (collected) => {
                const disabledButtons = buttons.map(button => button.setDisabled(true));
                const disabledButtonRow = new ActionRowBuilder().addComponents(...disabledButtons);

                let lastInteraction = interaction;
                if (collected.size > 0)
                    lastInteraction = collected.first();

                try {
                    await lastInteraction.editReply({
                        embeds: [embeds[currentPageID]],
                        components: [disabledButtonRow]
                    });

                } catch (error) {
                    logError(interaction, error);
                    console.error("ERROR:\n", error);
                }
            });
        }
    }
};