const { ButtonBuilder, ButtonStyle } = require("discord.js");
const { dmg, crit, heart, luck } = require("../../util/emojis");
const { getLanguageDictionary } = require("../../lang/utils");

exports.BASE_BUTTON_CUSTOM_ID = "BASE";
exports.baseButton = (locale, selected = "") => {
    const style = selected === exports.BASE_BUTTON_CUSTOM_ID ? ButtonStyle.Primary : ButtonStyle.Secondary;
    const dictionary = getLanguageDictionary(locale);
    const { baseLabel } = dictionary;

    return new ButtonBuilder()
        .setCustomId(exports.BASE_BUTTON_CUSTOM_ID)
        .setLabel(baseLabel)
        .setStyle(style)
        .setEmoji(dmg.emoji);
};

exports.RATING_BUTTON_CUSTOM_ID = "RATING";
exports.ratingButton = (locale, selected = "") => {
    const style = selected === exports.RATING_BUTTON_CUSTOM_ID ? ButtonStyle.Primary : ButtonStyle.Secondary;
    const dictionary = getLanguageDictionary(locale);
    const { ratingLabel } = dictionary;

    return new ButtonBuilder()
        .setCustomId(exports.RATING_BUTTON_CUSTOM_ID)
        .setLabel(ratingLabel)
        .setStyle(style)
        .setEmoji(crit.emoji);
};

exports.HEALTH_BUTTON_CUSTOM_ID = "HEALTH";
exports.healthButton = (locale, selected = "") => {
    const style = selected === exports.HEALTH_BUTTON_CUSTOM_ID ? ButtonStyle.Primary : ButtonStyle.Secondary;
    const dictionary = getLanguageDictionary(locale);
    const { healthLabel } = dictionary;

    return new ButtonBuilder()
        .setCustomId(exports.HEALTH_BUTTON_CUSTOM_ID)
        .setLabel(healthLabel)
        .setStyle(style)
        .setEmoji(heart.emoji);
};

exports.MISC_BUTTON_CUSTOM_ID = "MISC";
exports.miscButton = (locale, selected = "") => {
    const style = selected === exports.MISC_BUTTON_CUSTOM_ID ? ButtonStyle.Primary : ButtonStyle.Secondary;
    const dictionary = getLanguageDictionary(locale);
    const { miscLabel } = dictionary;

    return new ButtonBuilder()
        .setCustomId(exports.MISC_BUTTON_CUSTOM_ID)
        .setLabel(miscLabel)
        .setStyle(style)
        .setEmoji(luck.emoji);
};

const { baseButton, ratingButton, healthButton, miscButton } = exports;
exports.buildCategoryButtonRow = (locale, selectedButtonID) => [
    baseButton(locale, selectedButtonID),
    ratingButton(locale, selectedButtonID),
    healthButton(locale, selectedButtonID),
    miscButton(locale, selectedButtonID)
];

const { BASE_BUTTON_CUSTOM_ID, RATING_BUTTON_CUSTOM_ID, HEALTH_BUTTON_CUSTOM_ID, MISC_BUTTON_CUSTOM_ID } = exports;
exports.categoryButtonIDs = [BASE_BUTTON_CUSTOM_ID, RATING_BUTTON_CUSTOM_ID, HEALTH_BUTTON_CUSTOM_ID, MISC_BUTTON_CUSTOM_ID];