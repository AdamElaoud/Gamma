const { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } = require("../util/constants");

exports.getLanguageDictionary = (locale) => {
    const language = SUPPORTED_LANGUAGES.includes(locale) ? locale : DEFAULT_LANGUAGE;
    const dictionary = require(`../lang/${language}.js`);
    return dictionary;
};

const MAX_TITLE_LENGTH = 30;
const TIPPED_TITLE_LENGTH = 24; // a title is considered "tipped" when a different emoji is added at either end of it
const APPROXIMATE_CHARS_PER_EMOJI = 2.2;
exports.buildTitle = (text, emoji, tipped = false) => {
    const remainingChars = tipped ? Math.ceil(TIPPED_TITLE_LENGTH - text.length) : Math.ceil(MAX_TITLE_LENGTH - text.length);
    const numberOfEmojis = remainingChars / APPROXIMATE_CHARS_PER_EMOJI;
    const numberOfEmojisPerSide = Math.ceil(numberOfEmojis / 2);
    const emojiSpread = numberOfEmojis > 2 ? emoji.repeat(numberOfEmojisPerSide) : emoji;

    return emojiSpread + ` **${text}** ` + emojiSpread;
};