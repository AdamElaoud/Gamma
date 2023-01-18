const { ButtonBuilder, ButtonStyle } = require("discord.js");
const { help, gamma } = require("../../util/emojis");
const { getLanguageDictionary } = require("../../lang/utils");
const { BOT_INVITE_LINK, SUPPORT_SERVER_LINK, WEBSITE_LINK } = require("../../util/constants");

exports.inviteButton = (locale) => {
    const dictionary = getLanguageDictionary(locale);
    const { invite } = dictionary;

    return new ButtonBuilder()
        .setLabel(invite)
        .setStyle(ButtonStyle.Link)
        .setURL(BOT_INVITE_LINK)
        .setEmoji(gamma.id);
};

exports.helpButton = (locale) => {
    const dictionary = getLanguageDictionary(locale);
    const { help: helpText } = dictionary;

    return new ButtonBuilder()
        .setLabel(helpText)
        .setStyle(ButtonStyle.Link)
        .setURL(SUPPORT_SERVER_LINK)
        .setEmoji(help.id);
};

exports.websiteButton = (locale) => {
    const dictionary = getLanguageDictionary(locale);
    const { website } = dictionary;

    return new ButtonBuilder()
        .setLabel(website)
        .setStyle(ButtonStyle.Link)
        .setURL(WEBSITE_LINK)
        .setEmoji("💻");
};