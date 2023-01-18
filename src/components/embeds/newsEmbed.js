const { getLanguageDictionary, buildTitle } = require("../../lang/utils");
const { lightBlue } = require("../../util/colors");
const { FOOTER_IMAGE, WEBSITE_LINK, NO_BREAK_SPACE } = require("../../util/constants");
const { bar, kiwi, gamma, round } = require("../../util/emojis");

exports.newsEmbed = (locale) => {
    const dictionary = getLanguageDictionary(locale);
    const { footerText, lastUpdated, news, version } = dictionary;

    const bullet = ":white_small_square:";
    const tab = `${NO_BREAK_SPACE} ${NO_BREAK_SPACE} ${NO_BREAK_SPACE} ${NO_BREAK_SPACE}`;

    return {
        color: lightBlue,
        title: `:newspaper: ${buildTitle(news, bar.emoji, true)} :newspaper:`,
        description: `${lastUpdated}: <t:1673924754:R>`
                    + `\n***${version} 4.0.0***\n\n`
                    + `\n${bullet} ${kiwi.emoji} **Kiwi** is now ${gamma.emoji} **Gamma**!`
                    + `\n${bullet} All commands are now **slash commands**`
                    + `\n${bullet} All commands have received **visual updates**`
                    + `\n${bullet} Some unused commands have been removed`
                    + `\n${bullet} ${gamma.emoji} **Gamma** now has a **[website](${WEBSITE_LINK})**`
                    + `\n${bullet} The **\`stats\`** command can now ${round.emoji} **round**`
                    + `\n${tab} for :flag_us: **NA** and :flag_eu: **EU**`
                    + `\n${bullet} ${gamma.emoji} **Gamma** now displays in your Discord`
                    + `\n${tab} display language`
                    + `\n${bullet} ${gamma.emoji} **Gamma** now has language support`
                    + `\n${tab} for :flag_us: **en**, :flag_fr: **fr**, and :flag_es: **es**`,
        fields: [
            { name: NO_BREAK_SPACE, value: NO_BREAK_SPACE },
            { name: NO_BREAK_SPACE, value: NO_BREAK_SPACE }
        ],
        footer: { text: footerText, icon_url: FOOTER_IMAGE }
    };
};