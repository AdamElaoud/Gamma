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
    tanBar,
    purpleBar,
    redBar,
    orangeBar
} = require("../../util/emojis");
const {
    dealerFormula,
    giverFormula,
    boonFormula,
    wardFormula,
    proofFormula,
    defyFormula,
    sniperFormula,
    shotFormula,
    eyeFormula,
    breakerFormula,
    piercerFormula,
    assailantFormula,
    sStrikerFormula,
    cStrikerFormula,
    hitterFormula,
    defenderFormula,
    blockerFormula,
    conserverFormula,
    saverFormula,
    pipOPlentyFormula,
    pipBoostFormula,
    livelyFormula,
    healthyFormula,
    medicFormula,
    healerFormula,
    healthBountyFormula,
    healthGiftFormula,
    healthBoostFormula,
    addFormula,
    recalcitrantFormula,
    resistantFormula,
    epicLuckFormula,
    luckFormula,
    manaBountyFormula,
    manaGiftFormula,
    manaBoostFormula,
    extraFormula
} = require("../../util/formulas");

exports.formulasBaseEmbed = (locale) => {
    const dictionary = getLanguageDictionary(locale);
    const {
        accuracyTitle,
        armorBreaker,
        armorPiercer,
        away,
        baseFormulas,
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
        author: { name: baseFormulas, icon_url: AUTHOR_IMAGE },
        fields: [
            { name: NO_BREAK_SPACE, value: `${dmg.emoji} ${buildTitle(damageTitle, tanBar.emoji, true)} ${dmg.emoji}` },
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
                value: `${dealerFormula}`
                    + `\n${giverFormula}`
                    + `\n${boonFormula}`
                    + `\n${giverFormula}`
                    + `\n${boonFormula}`,
                inline: true
            },
            { name: NO_BREAK_SPACE, value: `${res.emoji} ${buildTitle(resistTitle, tanBar.emoji, true)} ${res.emoji}` },
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
                value: `${wardFormula}`
                    + `\n${proofFormula}`
                    + `\n${defyFormula}`
                    + `\n${proofFormula}`
                    + `\n${defyFormula}`,
                inline: true
            },
            { name: NO_BREAK_SPACE, value: `${acc.emoji} ${buildTitle(accuracyTitle, tanBar.emoji, true)} ${acc.emoji}` },
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
                value: `${sniperFormula}`
                    + `\n${shotFormula}`
                    + `\n${eyeFormula}`
                    + `\n${shotFormula}`
                    + `\n${eyeFormula}`,
                inline: true
            },
            { name: NO_BREAK_SPACE, value: `${pierceEmoji.emoji} ${buildTitle(pierceTitle, tanBar.emoji, true)} ${pierceEmoji.emoji}` },
            {
                name: NO_BREAK_SPACE,
                value: `${armorBreaker}:`
                    + `\n${armorPiercer}:`,
                inline: true
            },
            {
                name: NO_BREAK_SPACE,
                value: `${breakerFormula}`
                    + `\n${piercerFormula}`,
                inline: true
            }
        ],
        footer: { text: footerText, icon_url: FOOTER_IMAGE }
    };
};

exports.formulasRatingEmbed = (locale) => {
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
        ratingFormulas,
        sStriker
    } = dictionary;

    return {
        color: purple,
        author: { name: ratingFormulas, icon_url: AUTHOR_IMAGE },
        fields: [
            { name: NO_BREAK_SPACE, value: `${crit.emoji} ${buildTitle(criticalTitle, purpleBar.emoji, true)} ${crit.emoji}` },
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
                value: `${assailantFormula}`
                    + `\n${sStrikerFormula}`
                    + `\n${cStrikerFormula}`
                    + `\n${hitterFormula}`,
                inline: true
            },
            { name: NO_BREAK_SPACE, value: `${blockEmoji.emoji} ${buildTitle(blockTitle, purpleBar.emoji, true)} ${blockEmoji.emoji}` },
            {
                name: NO_BREAK_SPACE,
                value: `${defender}:`
                    + `\n${blocker}:`,
                inline: true
            },
            {
                name: NO_BREAK_SPACE,
                value: `${defenderFormula}`
                    + `\n${blockerFormula}`,
                inline: true
            },
            { name: NO_BREAK_SPACE, value: `${pcon.emoji} ${buildTitle(pipConvertTitle, purpleBar.emoji, true)} ${pcon.emoji}` },
            {
                name: NO_BREAK_SPACE,
                value: `${pipConserver}:`
                    + `\n${pipSaver}:`,
                inline: true
            },
            {
                name: NO_BREAK_SPACE,
                value: `${conserverFormula}`
                    + `\n${saverFormula}`,
                inline: true
            },
            { name: NO_BREAK_SPACE, value: `${pip.emoji} ${buildTitle(pipsTitle, purpleBar.emoji, true)} ${pip.emoji}` },
            {
                name: NO_BREAK_SPACE,
                value: `${pipOPlenty}:`
                    + `\n${pipBoost}:`,
                inline: true
            },
            {
                name: NO_BREAK_SPACE,
                value: `${pipOPlentyFormula}`
                    + `\n${pipBoostFormula}`,
                inline: true
            }
        ],
        footer: { text: footerText, icon_url: FOOTER_IMAGE }
    };
};

exports.formulasHealthEmbed = (locale) => {
    const dictionary = getLanguageDictionary(locale);
    const {
        footerText,
        healer,
        healthTitle,
        healthAdd,
        healthBoost,
        healthBounty,
        healthFormulas,
        healthGift,
        healthy,
        incomingTitle,
        lively,
        medic,
        outgoingTitle
    } = dictionary;

    return {
        color: healthRed,
        author: { name: healthFormulas, icon_url: AUTHOR_IMAGE },
        fields: [
            { name: NO_BREAK_SPACE, value: `${inc.emoji} ${buildTitle(incomingTitle, redBar.emoji, true)} ${inc.emoji}` },
            {
                name: NO_BREAK_SPACE,
                value: `${lively}:`
                    + `\n${healthy}:`,
                inline: true
            },
            {
                name: NO_BREAK_SPACE,
                value: `${livelyFormula}`
                    + `\n${healthyFormula}`,
                inline: true
            },
            { name: NO_BREAK_SPACE, value: `${out.emoji} ${buildTitle(outgoingTitle, redBar.emoji, true)} ${out.emoji}` },
            {
                name: NO_BREAK_SPACE,
                value: `${medic}:`
                    + `\n${healer}:`,
                inline: true
            },
            {
                name: NO_BREAK_SPACE,
                value: `${medicFormula}`
                    + `\n${healerFormula}`,
                inline: true
            },
            { name: NO_BREAK_SPACE, value: `${heart.emoji} ${buildTitle(healthTitle, redBar.emoji, true)} ${heart.emoji}` },
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
                value: `${healthBountyFormula}`
                    + `\n${healthGiftFormula}`
                    + `\n${healthBoostFormula}`
                    + `\n${addFormula}`,
                inline: true
            }
        ],
        footer: { text: footerText, icon_url: FOOTER_IMAGE }
    };
};

exports.formulasMiscEmbed = (locale) => {
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
        miscFormulas,
        stunRecalcitrant,
        stunResistant,
        stunResistTitle
    } = dictionary;

    return {
        color: orange,
        author: { name: miscFormulas, icon_url: AUTHOR_IMAGE },
        fields: [
            { name: NO_BREAK_SPACE, value: `${stunres.emoji} ${buildTitle(stunResistTitle, orangeBar.emoji, true)} ${stunres.emoji}` },
            {
                name: NO_BREAK_SPACE,
                value: `${stunRecalcitrant}:`
                    + `\n${stunResistant}:`,
                inline: true
            },
            {
                name: NO_BREAK_SPACE,
                value: `${recalcitrantFormula}`
                    + `\n${resistantFormula}`,
                inline: true
            },
            { name: NO_BREAK_SPACE, value: `${luck.emoji} ${buildTitle(fishLuckTitle, orangeBar.emoji, true)} ${luck.emoji}` },
            {
                name: NO_BREAK_SPACE,
                value: `${epicFishLuck}:`
                    + `\n${fishLuck}:`,
                inline: true
            },
            {
                name: NO_BREAK_SPACE,
                value: `${epicLuckFormula}`
                    + `\n${luckFormula}`,
                inline: true
            },
            { name: NO_BREAK_SPACE, value: `${mana.emoji} ${buildTitle(manaTitle, orangeBar.emoji, true)} ${mana.emoji}` },
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
                value: `${manaBountyFormula}`
                    + `\n${manaGiftFormula}`
                    + `\n${manaBoostFormula}`
                    + `\n${extraFormula}`,
                inline: true
            }
        ],
        footer: { text: footerText, icon_url: FOOTER_IMAGE }
    };
};