const { ButtonBuilder, ButtonStyle } = require("discord.js");
const { round } = require("../../util/emojis");
const { getLanguageDictionary } = require("../../lang/utils");

exports.NA_ROUNDING_BUTTON_CUSTOM_ID = "NA_ROUND";
exports.naRoundingButton = (locale, selected = "") => {
    const style = selected === exports.NA_ROUNDING_BUTTON_CUSTOM_ID ? ButtonStyle.Success : ButtonStyle.Secondary;
    const dictionary = getLanguageDictionary(locale);
    const { naRoundingLabel } = dictionary;

    return new ButtonBuilder()
        .setCustomId(exports.NA_ROUNDING_BUTTON_CUSTOM_ID)
        .setLabel(naRoundingLabel)
        .setStyle(style)
        .setEmoji(round.emoji);
};

exports.EU_ROUNDING_BUTTON_CUSTOM_ID = "EU_ROUND";
exports.euRoundingButton = (locale, selected = "") => {
    const style = selected === exports.EU_ROUNDING_BUTTON_CUSTOM_ID ? ButtonStyle.Success : ButtonStyle.Secondary;
    const dictionary = getLanguageDictionary(locale);
    const { euRoundingLabel } = dictionary;

    return new ButtonBuilder()
        .setCustomId(exports.EU_ROUNDING_BUTTON_CUSTOM_ID)
        .setLabel(euRoundingLabel)
        .setStyle(style)
        .setEmoji(round.emoji);
};

const { naRoundingButton, euRoundingButton } = exports;
exports.buildRoundingButtonRow = (locale, selectedButtonID) => [
    naRoundingButton(locale, selectedButtonID),
    euRoundingButton(locale, selectedButtonID)
];