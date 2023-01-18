const { getLanguageDictionary, buildTitle } = require("../../lang/utils");
const { tan, purple, healthRed, orange } = require("../../util/colors");
const { FOOTER_IMAGE, NO_BREAK_SPACE, AUTHOR_IMAGE } = require("../../util/constants");
const {
    dmg,
    crit,
    heart,
    luck,
    res,
    acc,
    pierce: pierceEmoji,
    block: blockEmoji,
    pcon,
    pip,
    inc,
    out,
    mana,
    stunres,
    str,
    int,
    agil,
    will: willEmoji,
    power: powerEmoji,
    orangeBar,
    tanBar,
    purpleBar,
    redBar,
    fake
} = require("../../util/emojis");
const {
    dealerCalc,
    giverCalc,
    boonCalc,
    wardCalc,
    proofCalc,
    defyCalc,
    sniperCalc,
    shotCalc,
    eyeCalc,
    breakerCalc,
    piercerCalc,
    assailantCalc,
    sStrikerCalc,
    cStrikerCalc,
    hitterCalc,
    defenderCalc,
    blockerCalc,
    conserverCalc,
    saverCalc,
    pipOPlentyCalc,
    pipBoostCalc,
    livelyCalc,
    healthyCalc,
    medicCalc,
    healerCalc,
    healthBountyCalc,
    healthGiftCalc,
    healthBoostCalc,
    addCalc,
    recalcitrantCalc,
    resistantCalc,
    luckCalc,
    manaBountyCalc,
    manaGiftCalc,
    manaBoostCalc,
    extraCalc
} = require("../../util/calculations");
const { EU_ROUNDING_BUTTON_CUSTOM_ID } = require("../buttons/roundingButtons");

const enteredStatsDisplay = ({ agility, intellect, power, strength, will }) => `\n${str.emoji}**:** ${strength} ${NO_BREAK_SPACE} ${NO_BREAK_SPACE}`
                                                                            + `${int.emoji}**:** ${intellect} ${NO_BREAK_SPACE} ${NO_BREAK_SPACE}`
                                                                            + `${agil.emoji}**:** ${agility} ${NO_BREAK_SPACE} ${NO_BREAK_SPACE}`
                                                                            + `${willEmoji.emoji}**:** ${will} ${NO_BREAK_SPACE} ${NO_BREAK_SPACE}`
                                                                            + `${powerEmoji.emoji}**:** ${power}`;

const fakeStatsDisplay = (rounding) => {
    return rounding === EU_ROUNDING_BUTTON_CUSTOM_ID ?
        `\n${fake.emoji}**:** *fake stat (rounded for display)*`
        : NO_BREAK_SPACE;
};

exports.statsBaseEmbed = (locale, stats, rounding) => {
    const dictionary = getLanguageDictionary(locale);
    const {
        accuracyTitle,
        armorBreaker,
        armorPiercer,
        away,
        baseStats,
        boon,
        damageTitle,
        dealer,
        eye,
        footerText,
        giver,
        painBringer,
        painGiver,
        pierceTitle,
        proof,
        resistTitle,
        sharpEye,
        sharpShot,
        shot,
        sniper,
        spellDefying,
        spellProof,
        ward
    } = dictionary;

    return {
        color: tan,
        author: { name: baseStats, icon_url: AUTHOR_IMAGE },
        fields: [
            { name: NO_BREAK_SPACE, value: enteredStatsDisplay(stats) },
            { name: NO_BREAK_SPACE, value: fakeStatsDisplay(rounding) },
            {
                name: NO_BREAK_SPACE,
                value: buildTitle(damageTitle, tanBar.emoji)
            },
            {
                name: NO_BREAK_SPACE,
                value: `${dealer}:`
                    + `\n${giver}:`
                    + `\n${boon}:`
                    + `\n${painGiver}:`
                    + `\n${painBringer}:`,
                inline: true
            },
            {
                name: NO_BREAK_SPACE,
                value: `${dealerCalc(stats, rounding)}% ${dmg.emoji}`
                    + `\n${giverCalc(stats, rounding)}% ${dmg.emoji}`
                    + `\n${boonCalc(stats, rounding)}% ${dmg.emoji}`
                    + `\n${giverCalc(stats, rounding)}% ${dmg.emoji}`
                    + `\n${boonCalc(stats, rounding)}% ${dmg.emoji}`,
                inline: true
            },
            {
                name: NO_BREAK_SPACE,
                value: buildTitle(resistTitle, tanBar.emoji)
            },
            {
                name: NO_BREAK_SPACE,
                value: `${ward}:`
                    + `\n${proof}:`
                    + `\n${away}:`
                    + `\n${spellProof}:`
                    + `\n${spellDefying}:`,
                inline: true
            },
            {
                name: NO_BREAK_SPACE,
                value: `${wardCalc(stats, rounding)}% ${res.emoji}`
                    + `\n${proofCalc(stats, rounding)}% ${res.emoji}`
                    + `\n${defyCalc(stats, rounding)}% ${res.emoji}`
                    + `\n${proofCalc(stats, rounding)}% ${res.emoji}`
                    + `\n${defyCalc(stats, rounding)}% ${res.emoji}`,
                inline: true
            },
            {
                name: NO_BREAK_SPACE,
                value: buildTitle(accuracyTitle, tanBar.emoji)
            },
            {
                name: NO_BREAK_SPACE,
                value: `${sniper}:`
                    + `\n${shot}:`
                    + `\n${eye}:`
                    + `\n${sharpShot}:`
                    + `\n${sharpEye}:`,
                inline: true
            },
            {
                name: NO_BREAK_SPACE,
                value: `${sniperCalc(stats, rounding)}% ${acc.emoji}`
                    + `\n${shotCalc(stats, rounding)}% ${acc.emoji}`
                    + `\n${eyeCalc(stats, rounding)}% ${acc.emoji}`
                    + `\n${shotCalc(stats, rounding)}% ${acc.emoji}`
                    + `\n${eyeCalc(stats, rounding)}% ${acc.emoji}`,
                inline: true
            },
            {
                name: NO_BREAK_SPACE,
                value: buildTitle(pierceTitle, tanBar.emoji)
            },
            {
                name: NO_BREAK_SPACE,
                value: `${armorBreaker}:`
                    + `\n${armorPiercer}:`,
                inline: true
            },
            {
                name: NO_BREAK_SPACE,
                value: `${breakerCalc(stats, rounding)}% ${pierceEmoji.emoji}`
                    + `\n${piercerCalc(stats, rounding)}% ${pierceEmoji.emoji}`,
                inline: true
            }
        ],
        footer: { text: footerText, icon_url: FOOTER_IMAGE }
    };
};

exports.statsRatingEmbed = (locale, stats, rounding) => {
    const dictionary = getLanguageDictionary(locale);
    const {
        assailant,
        blockTitle,
        blocker,
        criticalTitle,
        cStriker,
        defender,
        footerText,
        hitter,
        pipBoost,
        pipConserver,
        pipConvertTitle,
        pipOPlenty,
        pipSaver,
        pipsTitle,
        ratingStats,
        sStriker
    } = dictionary;

    return {
        color: purple,
        author: { name: ratingStats, icon_url: AUTHOR_IMAGE },
        fields: [
            { name: NO_BREAK_SPACE, value: enteredStatsDisplay(stats) },
            { name: NO_BREAK_SPACE, value: fakeStatsDisplay(rounding) },
            {
                name: NO_BREAK_SPACE,
                value: buildTitle(criticalTitle, purpleBar.emoji)
            },
            {
                name: NO_BREAK_SPACE,
                value: `${assailant}:`
                    + `\n${sStriker}:`
                    + `\n${cStriker}:`
                    + `\n${hitter}:`,
                inline: true
            },
            {
                name: NO_BREAK_SPACE,
                value: `+${assailantCalc(stats, rounding)} ${crit.emoji}`
                    + `\n+${sStrikerCalc(stats, rounding)} ${crit.emoji}`
                    + `\n+${cStrikerCalc(stats, rounding)} ${crit.emoji}`
                    + `\n+${hitterCalc(stats, rounding)} ${crit.emoji}`,
                inline: true
            },
            {
                name: NO_BREAK_SPACE,
                value: buildTitle(blockTitle, purpleBar.emoji)
            },
            {
                name: NO_BREAK_SPACE,
                value: `${defender}:`
                    + `\n${blocker}:`,
                inline: true
            },
            {
                name: NO_BREAK_SPACE,
                value: `+${defenderCalc(stats, rounding)} ${blockEmoji.emoji}`
                    + `\n+${blockerCalc(stats, rounding)} ${blockEmoji.emoji}`,
                inline: true
            },
            {
                name: NO_BREAK_SPACE,
                value: buildTitle(pipConvertTitle, purpleBar.emoji)
            },
            {
                name: NO_BREAK_SPACE,
                value: `${pipConserver}:`
                    + `\n${pipSaver}:`,
                inline: true
            },
            {
                name: NO_BREAK_SPACE,
                value: `+${conserverCalc(stats, rounding)} ${pcon.emoji}`
                    + `\n+${saverCalc(stats, rounding)} ${pcon.emoji}`,
                inline: true
            },
            {
                name: NO_BREAK_SPACE,
                value: buildTitle(pipsTitle, purpleBar.emoji)
            },
            {
                name: NO_BREAK_SPACE,
                value: `${pipOPlenty}:`
                    + `\n${pipBoost}:`,
                inline: true
            },
            {
                name: NO_BREAK_SPACE,
                value: `${pipOPlentyCalc(stats, rounding)}% ${pip.emoji}`
                    + `\n${pipBoostCalc(stats, rounding)}% ${pip.emoji}`,
                inline: true
            }
        ],
        footer: { text: footerText, icon_url: FOOTER_IMAGE }
    };
};

exports.statsHealthEmbed = (locale, stats, rounding) => {
    const dictionary = getLanguageDictionary(locale);
    const {
        footerText,
        healer,
        healthTitle,
        healthAdd,
        healthBoost,
        healthBounty,
        healthGift,
        healthStats,
        healthy,
        incomingTitle,
        lively,
        medic,
        outgoingTitle
    } = dictionary;

    return {
        color: healthRed,
        author: { name: healthStats, icon_url: AUTHOR_IMAGE },
        fields: [
            { name: NO_BREAK_SPACE, value: enteredStatsDisplay(stats) },
            { name: NO_BREAK_SPACE, value: fakeStatsDisplay(rounding) },
            {
                name: NO_BREAK_SPACE,
                value: buildTitle(incomingTitle, redBar.emoji)
            },
            {
                name: NO_BREAK_SPACE,
                value: `${lively}:`
                    + `\n${healthy}:`,
                inline: true
            },
            {
                name: NO_BREAK_SPACE,
                value: `${livelyCalc(stats, rounding)}% ${inc.emoji}`
                    + `\n${healthyCalc(stats, rounding)}% ${inc.emoji}`,
                inline: true
            },
            {
                name: NO_BREAK_SPACE,
                value: buildTitle(outgoingTitle, redBar.emoji)
            },
            {
                name: NO_BREAK_SPACE,
                value: `${medic}:`
                    + `\n${healer}:`,
                inline: true
            },
            {
                name: NO_BREAK_SPACE,
                value: `${medicCalc(stats, rounding)}% ${out.emoji}`
                    + `\n${healerCalc(stats, rounding)}% ${out.emoji}`,
                inline: true
            },
            {
                name: NO_BREAK_SPACE,
                value: buildTitle(healthTitle, redBar.emoji)
            },
            {
                name: NO_BREAK_SPACE,
                value: `${healthBounty}:`
                    + `\n${healthGift}:`
                    + `\n${healthBoost}:`
                    + `\n${healthAdd}:`,
                inline: true
            },
            {
                name: NO_BREAK_SPACE,
                value: `+${healthBountyCalc(stats, rounding)} ${heart.emoji}`
                    + `\n+${healthGiftCalc(stats, rounding)} ${heart.emoji}`
                    + `\n+${healthBoostCalc(stats, rounding)} ${heart.emoji}`
                    + `\n+${addCalc(stats, rounding)} ${heart.emoji}`,
                inline: true
            }
        ],
        footer: { text: footerText, icon_url: FOOTER_IMAGE }
    };
};

exports.statsMiscEmbed = (locale, stats, rounding) => {
    const dictionary = getLanguageDictionary(locale);
    const {
        epicFishLuck,
        extraMana,
        fishLuck,
        fishLuckTitle,
        footerText,
        manaBoost,
        manaBounty,
        manaGift,
        manaTitle,
        miscStats,
        stunRecalcitrant,
        stunResistant,
        stunResistTitle
    } = dictionary;

    return {
        color: orange,
        author: { name: miscStats, icon_url: AUTHOR_IMAGE },
        fields: [
            { name: NO_BREAK_SPACE, value: enteredStatsDisplay(stats) },
            { name: NO_BREAK_SPACE, value: fakeStatsDisplay(rounding) },
            {
                name: NO_BREAK_SPACE,
                value: buildTitle(stunResistTitle, orangeBar.emoji)
            },
            {
                name: NO_BREAK_SPACE,
                value: `${stunRecalcitrant}:`
                    + `\n${stunResistant}:`,
                inline: true
            },
            {
                name: NO_BREAK_SPACE,
                value: `${recalcitrantCalc(stats, rounding)}% ${stunres.emoji}`
                    + `\n${resistantCalc(stats, rounding)}% ${stunres.emoji}`,
                inline: true
            },
            {
                name: NO_BREAK_SPACE,
                value: buildTitle(fishLuckTitle, orangeBar.emoji)
            },
            {
                name: NO_BREAK_SPACE,
                value: `${epicFishLuck}:`
                    + `\n${fishLuck}:`,
                inline: true
            },
            {
                name: NO_BREAK_SPACE,
                value: `${luckCalc(stats, rounding)}% ${luck.emoji}`
                    + `\n${luckCalc(stats, rounding)}% ${luck.emoji}`,
                inline: true
            },
            {
                name: NO_BREAK_SPACE,
                value: buildTitle(manaTitle, orangeBar.emoji)
            },
            {
                name: NO_BREAK_SPACE,
                value: `${manaBounty}:`
                    + `\n${manaGift}:`
                    + `\n${manaBoost}:`
                    + `\n${extraMana}:`,
                inline: true
            },
            {
                name: NO_BREAK_SPACE,
                value: `+${manaBountyCalc(stats, rounding)} ${mana.emoji}`
                    + `\n+${manaGiftCalc(stats, rounding)} ${mana.emoji}`
                    + `\n+${manaBoostCalc(stats, rounding)} ${mana.emoji}`
                    + `\n+${extraCalc(stats, rounding)} ${mana.emoji}`,
                inline: true
            }
        ],
        footer: { text: footerText, icon_url: FOOTER_IMAGE }
    };
};