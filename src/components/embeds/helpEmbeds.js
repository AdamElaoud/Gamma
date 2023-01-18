const { getLanguageDictionary, buildTitle } = require("../../lang/utils");
const { parchment } = require("../../util/colors");
const { SUPPORT_SERVER_LINK, FOOTER_IMAGE, NO_BREAK_SPACE } = require("../../util/constants");
const { bar } = require("../../util/emojis");

exports.helpEmbed = (locale) => {
    const dictionary = getLanguageDictionary(locale);
    const {
        commands,
        footerText,
        formulasDesc,
        headToSupport,
        newsDesc,
        statsDesc,
        stillNeedHelp
    } = dictionary;

    return {
        color: parchment,
        title: `:scroll: ${buildTitle(commands, bar.emoji, true)} :scroll:`,
        description: ":small_blue_diamond: **`stats`**"
                    + `\n*${statsDesc}*`
                    + "\n\n:small_blue_diamond: **`formulas`**"
                    + `\n*${formulasDesc}*`
                    + "\n\n:small_blue_diamond: **`news`**"
                    + `\n*${newsDesc}*`,
        fields: [
            { name: NO_BREAK_SPACE, value: NO_BREAK_SPACE },
            { name: stillNeedHelp, value: `${headToSupport}(${SUPPORT_SERVER_LINK})!` }
        ],
        footer: { text: footerText, icon_url: FOOTER_IMAGE }
    };
};