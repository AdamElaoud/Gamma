const { SlashCommandBuilder, ActionRowBuilder, ComponentType } = require("discord.js");
const {
    buildCategoryButtonRow,
    BASE_BUTTON_CUSTOM_ID,
    RATING_BUTTON_CUSTOM_ID,
    HEALTH_BUTTON_CUSTOM_ID,
    MISC_BUTTON_CUSTOM_ID,
    categoryButtonIDs
} = require("../components/buttons/categoryButtons");
const { statsBaseEmbed, statsRatingEmbed, statsHealthEmbed, statsMiscEmbed } = require("../components/embeds/statsEmbeds");
const { getLanguageDictionary } = require("../lang/utils");
const {
    INTERACTION_TIME,
    MIN_VALUE,
    MAX_SELFISH_STRENGTH,
    MAX_SELFISH_INTELLECT,
    MAX_SELFISH_AGILITY,
    MAX_SELFISH_WILL,
    MAX_SELFISH_POWER,
    NO_ROUNDING_ID
} = require("../util/constants");
const { buildRoundingButtonRow, NA_ROUNDING_BUTTON_CUSTOM_ID } = require("../components/buttons/roundingButtons");
const { logCommand, logError } = require("../util/logger");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("stats")
        .setDescription("Calculate pet talent stats")
        .addIntegerOption(option =>
            option.setName("strength")
                .setDescription("Value of your pet's strength")
                .setRequired(true)
                .setMinValue(MIN_VALUE)
                .setMaxValue(MAX_SELFISH_STRENGTH))
        .addIntegerOption(option =>
            option.setName("intellect")
                .setDescription("Value of your pet's intellect")
                .setRequired(true)
                .setMinValue(MIN_VALUE)
                .setMaxValue(MAX_SELFISH_INTELLECT))
        .addIntegerOption(option =>
            option.setName("agility")
                .setDescription("Value of your pet's agility")
                .setRequired(true)
                .setMinValue(MIN_VALUE)
                .setMaxValue(MAX_SELFISH_AGILITY))
        .addIntegerOption(option =>
            option.setName("will")
                .setDescription("Value of your pet's will")
                .setRequired(true)
                .setMinValue(MIN_VALUE)
                .setMaxValue(MAX_SELFISH_WILL))
        .addIntegerOption(option =>
            option.setName("power")
                .setDescription("Value of your pet's power")
                .setRequired(true)
                .setMinValue(MIN_VALUE)
                .setMaxValue(MAX_SELFISH_POWER)),
    execute: async (interaction) => {
        const { locale, options, user: initialUser } = interaction;

        logCommand(interaction);

        const { value: strength } = options.get("strength");
        const { value: intellect } = options.get("intellect");
        const { value: agility } = options.get("agility");
        const { value: will } = options.get("will");
        const { value: power } = options.get("power");
        const stats = { agility, intellect, power, strength, will };

        let currentPageID = BASE_BUTTON_CUSTOM_ID;
        let currentRoundingID = NA_ROUNDING_BUTTON_CUSTOM_ID;

        let pageButtons = buildCategoryButtonRow(locale, currentPageID);
        let pageButtonRow = new ActionRowBuilder().addComponents(...pageButtons);

        let roundingButtons = buildRoundingButtonRow(locale, currentRoundingID);
        let roundingButtonRow = new ActionRowBuilder().addComponents(...roundingButtons);

        let embeds = {
            [BASE_BUTTON_CUSTOM_ID]: statsBaseEmbed(locale, stats, currentRoundingID),
            [RATING_BUTTON_CUSTOM_ID]: statsRatingEmbed(locale, stats, currentRoundingID),
            [HEALTH_BUTTON_CUSTOM_ID]: statsHealthEmbed(locale, stats, currentRoundingID),
            [MISC_BUTTON_CUSTOM_ID]: statsMiscEmbed(locale, stats, currentRoundingID)
        };

        let message;

        try {
            message = await interaction.reply({
                embeds: [embeds[currentPageID]],
                components: [pageButtonRow, roundingButtonRow]
            });

        } catch (error) {
            logError(interaction, error);
            console.error("ERROR:\n", error);
        }

        if (message) {
            const collectorFilter = (buttonInteraction) => {
                const { customId } = buttonInteraction;

                // only react to interactions when changing to a new page
                if (customId === currentPageID) {
                    buttonInteraction.deferUpdate();
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
                    buttonInteraction.deferUpdate();

                    if (categoryButtonIDs.includes(customId)) {
                        currentPageID = customId;
                        pageButtons = buildCategoryButtonRow(locale, currentPageID);
                        pageButtonRow = new ActionRowBuilder().addComponents(...pageButtons);

                    } else {
                        currentRoundingID = customId === currentRoundingID ? NO_ROUNDING_ID : customId;
                        roundingButtons = buildRoundingButtonRow(locale, currentRoundingID);
                        roundingButtonRow = new ActionRowBuilder().addComponents(...roundingButtons);
                        embeds = {
                            [BASE_BUTTON_CUSTOM_ID]: statsBaseEmbed(locale, stats, currentRoundingID),
                            [RATING_BUTTON_CUSTOM_ID]: statsRatingEmbed(locale, stats, currentRoundingID),
                            [HEALTH_BUTTON_CUSTOM_ID]: statsHealthEmbed(locale, stats, currentRoundingID),
                            [MISC_BUTTON_CUSTOM_ID]: statsMiscEmbed(locale, stats, currentRoundingID)
                        };
                    }

                    try {
                        await interaction.editReply({
                            embeds: [embeds[currentPageID]],
                            components: [pageButtonRow, roundingButtonRow]
                        });

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
                const disabledButtons = pageButtons.map(button => button.setDisabled(true));
                const disabledButtonRow = new ActionRowBuilder().addComponents(...disabledButtons);

                const disabledRoundingButtons = roundingButtons.map(button => button.setDisabled(true));
                const disabledRoundingButtonRow = new ActionRowBuilder().addComponents(...disabledRoundingButtons);

                let lastInteraction = interaction;
                if (collected.size > 0)
                    lastInteraction = collected.first();

                try {
                    await lastInteraction.editReply({
                        embeds: [embeds[currentPageID]],
                        components: [disabledButtonRow, disabledRoundingButtonRow]
                    });

                } catch (error) {
                    logError(interaction, error);
                    console.error("ERROR:\n", error);
                }
            });
        }

    }
};