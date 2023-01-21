const { getLanguageDictionary, buildTitle } = require("../../lang/utils");
const { lightBlue } = require("../../util/colors");
const { FOOTER_IMAGE, WEBSITE_LINK, NO_BREAK_SPACE, LAST_UPDATED_NEWS_TIME, LNTRN_ID, DAETH_ID, SHIRO_ID, ASTER_ID } = require("../../util/constants");
const { bar, kiwi, gamma, round } = require("../../util/emojis");

exports.newsEmbed = (locale) => {
    const dictionary = getLanguageDictionary(locale);
    const {
        announcements,
        footerText,
        lastUpdated,
        news,
        specialThanks,
        updates,
        version
    } = dictionary;

    const bullet = ":white_small_square:";
    const tab = `${NO_BREAK_SPACE} ${NO_BREAK_SPACE} ${NO_BREAK_SPACE} ${NO_BREAK_SPACE}`;

    return {
        color: lightBlue,
        title: `:newspaper: ${buildTitle(news, bar.emoji, true)} :newspaper:`,
        description: `${lastUpdated}: <t:${LAST_UPDATED_NEWS_TIME}:R>`
                    + `\n***${version} 4.0.0***`,
        fields: [
            {
                name: NO_BREAK_SPACE,
                value: `:mega: ${buildTitle(announcements, bar.emoji, true)} :mega:`
            },
            {
                name: NO_BREAK_SPACE,
                value: `${bullet} ${kiwi.emoji} **Kiwi** is now ${gamma.emoji} **Gamma**!`
                    + `\n${bullet} ${gamma.emoji} **Gamma** now has a **[website](${WEBSITE_LINK})**`
            },
            {
                name: NO_BREAK_SPACE,
                value: `:new: ${buildTitle(updates, bar.emoji, true)} :new:`
            },
            {
                name: NO_BREAK_SPACE,
                value: `${bullet} All commands are now **slash commands**`
                    + `\n${bullet} All commands have received **visual updates**`
                    + `\n${bullet} Some unused commands have been removed`
                    + `\n${bullet} The **\`stats\`** command can now ${round.emoji} **round**`
                    + `\n${tab} for :flag_us: **NA** and :flag_eu: **EU**`
                    + `\n${bullet} ${gamma.emoji} **Gamma** now displays in your Discord`
                    + `\n${tab} display language`
                    + `\n${bullet} ${gamma.emoji} **Gamma** now has language support`
                    + `\n${tab} for :flag_us: **en**, :flag_fr: **fr**, and :flag_es: **es**`
            },
            {
                name: NO_BREAK_SPACE,
                value: `:raised_hands::skin-tone-3:  ${buildTitle(specialThanks, bar.emoji, true)} :raised_hands::skin-tone-3:`
            },
            {
                name: NO_BREAK_SPACE,
                value: "Special thanks to these contributors:"
                    + `\n${bullet} <@${LNTRN_ID}> ${tab} ${bullet} <@${DAETH_ID}>`
                    + `\n${bullet} <@${SHIRO_ID}> ${tab} ${bullet} <@${ASTER_ID}>`
            },
            { name: NO_BREAK_SPACE, value: NO_BREAK_SPACE },
            { name: NO_BREAK_SPACE, value: NO_BREAK_SPACE }
        ],
        footer: { text: footerText, icon_url: FOOTER_IMAGE }
    };
};