const { NA_ROUNDING_BUTTON_CUSTOM_ID, EU_ROUNDING_BUTTON_CUSTOM_ID } = require("../components/buttons/roundingButtons");
const { fake } = require("./emojis");

// OUT OF DATE: needs to be updated to work with rounding
exports.sumData = (formulas, stats) => {
    const total = formulas.reduce((sum, formula) => {
        return sum + formula(stats);
    }, 0);

    return total.toFixed(2);
};

const isFake = (value) => {
    const float = (value % 1).toFixed(4);

    // fake range is 0.5 - 0.549
    return 0.49 < float && float < 0.55;
};

const roundStatNA = (value) => {
    if (value < 1)
        return 1;

    return Math.round(value);
};

const roundStatEU = (value) => {
    if (value < 1)
        return 1;

    if (isFake(value))
        return `${fake.emoji}${Math.round(value)}`;
    else
        return Math.round(value);
};

const calcStat = (func, stats, rounding) => {
    return rounding === NA_ROUNDING_BUTTON_CUSTOM_ID ?
        roundStatNA(func(stats))
        : rounding === EU_ROUNDING_BUTTON_CUSTOM_ID ?
            roundStatEU(func(stats))
            : func(stats).toFixed(2);
};

// DAMAGE
const dealer = ({ power, strength, will }) => ((2 * strength) + (2 * will) + power) * 3 / 400;
exports.dealerCalc = (stats, rounding) => calcStat(dealer, stats, rounding);
const giver = ({ power, strength, will }) => ((2 * strength) + (2 * will) + power) / 200;
exports.giverCalc = (stats, rounding) => calcStat(giver, stats, rounding);
const boon = ({ power, strength, will }) => ((2 * strength) + (2 * will) + power) / 400;
exports.boonCalc = (stats, rounding) => calcStat(boon, stats, rounding);

exports.damageSchoolTotal = (stats, rounding) => calcStat(exports, stats, rounding);
exports.damageUniversalTotal = (stats, rounding) => calcStat(exports, stats, rounding);
exports.damageTotal = (stats, rounding) => calcStat(exports, stats, rounding);

// RESIST
const ward = ({ agility, power, strength }) => ((2 * strength) + (2 * agility) + power) * 3 / 250;
exports.wardCalc = (stats, rounding) => calcStat(ward, stats, rounding);
const proof = ({ agility, power, strength }) => ((2 * strength) + (2 * agility) + power) / 125;
exports.proofCalc = (stats, rounding) => calcStat(proof, stats, rounding);
const defy = ({ agility, power, strength }) => ((2 * strength) + (2 * agility) + power) / 250;
exports.defyCalc = (stats, rounding) => calcStat(defy, stats, rounding);

exports.resistSchoolTotal = (stats, rounding) => calcStat(exports, stats, rounding);
exports.resistUniversalTotal = (stats, rounding) => calcStat(exports, stats, rounding);
exports.resistTotal = (stats, rounding) => calcStat(exports, stats, rounding);

// ACCURACY
const sniper = ({ agility, intellect, power }) => ((2 * intellect) + (2 * agility) + power) * 3 / 400;
exports.sniperCalc = (stats, rounding) => calcStat(sniper, stats, rounding);
const shot = ({ agility, intellect, power }) => ((2 * intellect) + (2 * agility) + power) / 200;
exports.shotCalc = (stats, rounding) => calcStat(shot, stats, rounding);
const eye = ({ agility, intellect, power }) => ((2 * intellect) + (2 * agility) + power) / 400;
exports.eyeCalc = (stats, rounding) => calcStat(eye, stats, rounding);

exports.accuracySchoolTotal = (stats, rounding) => calcStat(exports, stats, rounding);
exports.accuracyUniversalTotal = (stats, rounding) => calcStat(exports, stats, rounding);
exports.accuracyTotal = (stats, rounding) => calcStat(exports, stats, rounding);

// PIERCE
const breaker = ({ agility, power, strength }) => ((2 * strength) + (2 * agility) + power) / 400;
exports.breakerCalc = (stats, rounding) => calcStat(breaker, stats, rounding);
const piercer = ({ agility, power, strength }) => ((2 * strength) + (2 * agility) + power) * 3 / 2000;
exports.piercerCalc = (stats, rounding) => calcStat(piercer, stats, rounding);

exports.pierceTotal = (stats, rounding) => calcStat(exports, stats, rounding);

// CRITICAL
const assailant = ({ agility, power, will }) => ((2 * agility) + (2 * will) + power) / 40;
exports.assailantCalc = (stats, rounding) => calcStat(assailant, stats, rounding);
const sStriker = ({ agility, power, will }) => ((2 * agility) + (2 * will) + power) * 3 / 150;
exports.sStrikerCalc = (stats, rounding) => calcStat(sStriker, stats, rounding);
const cStriker = ({ agility, power, will }) => ((2 * agility) + (2 * will) + power) * 3 / 125;
exports.cStrikerCalc = (stats, rounding) => calcStat(cStriker, stats, rounding);
const hitter = ({ agility, power, will }) => ((2 * agility) + (2 * will) + power) * 9 / 500;
exports.hitterCalc = (stats, rounding) => calcStat(hitter, stats, rounding);

exports.critSchoolTotal = (stats, rounding) => calcStat(exports, stats, rounding);
exports.critUniversalTotal = (stats, rounding) => calcStat(exports, stats, rounding);
exports.critTotal = (stats, rounding) => calcStat(exports, stats, rounding);

// BLOCK
const defender = ({ intellect, power, will }) => ((2 * intellect) + (2 * will) + power) * 3 / 125;
exports.defenderCalc = (stats, rounding) => calcStat(defender, stats, rounding);
const blocker = ({ intellect, power, will }) => ((2 * intellect) + (2 * will) + power) * 9 / 500;
exports.blockerCalc = (stats, rounding) => calcStat(blocker, stats, rounding);

exports.blockTotal = (stats, rounding) => calcStat(exports, stats, rounding);

// PIP CONVERSION
const conserver = ({ agility, power, will }) => ((2 * agility) + (2 * will) + power) * 3 / 125;
exports.conserverCalc = (stats, rounding) => calcStat(conserver, stats, rounding);
const saver = ({ agility, power, will }) => ((2 * agility) + (2 * will) + power) * 9 / 500;
exports.saverCalc = (stats, rounding) => calcStat(saver, stats, rounding);

exports.pipConvertTotal = (stats, rounding) => calcStat(exports, stats, rounding);

// PIP CHANCE
const pipOPlenty = ({ intellect, power, strength }) => (((2 * strength) + (2 * intellect) + power) / 250);
exports.pipOPlentyCalc = (stats, rounding) => calcStat(pipOPlenty, stats, rounding);
const pipBoost = () => 5;
exports.pipBoostCalc = (stats, rounding) => calcStat(pipBoost, stats, rounding);

exports.pipTotal = (stats, rounding) => calcStat(exports, stats, rounding);

// INCOMING
const lively = ({ power, strength, will }) => ((2 * strength) + (2 * will) + power) * 13 / 2000;
exports.livelyCalc = (stats, rounding) => calcStat(lively, stats, rounding);
const healthy = ({ power, strength, will }) => ((2 * strength) + (2 * will) + power) * 3 / 1000;
exports.healthyCalc = (stats, rounding) => calcStat(healthy, stats, rounding);

exports.incomingTotal = (stats, rounding) => calcStat(exports, stats, rounding);

// OUTGOING
const medic = ({ power, strength, will }) => ((2 * strength) + (2 * will) + power) * 13 / 2000;
exports.medicCalc = (stats, rounding) => calcStat(medic, stats, rounding);
const healer = ({ power, strength, will }) => ((2 * strength) + (2 * will) + power) * 3 / 1000;
exports.healerCalc = (stats, rounding) => calcStat(healer, stats, rounding);

exports.outgoingTotal = (stats, rounding) => calcStat(exports, stats, rounding);

// HEALTH
const healthBounty = ({ agility, power, will }) => ((2 * agility) + (2 * will) + power) * 3 / 25;
exports.healthBountyCalc = (stats, rounding) => calcStat(healthBounty, stats, rounding);
const healthGift = ({ agility, power, will }) => ((2 * agility) + (2 * will) + power) / 10;
exports.healthGiftCalc = (stats, rounding) => calcStat(healthGift, stats, rounding);
const healthBoost = ({ agility, power, will }) => ((2 * agility) + (2 * will) + power) * 6 / 75;
exports.healthBoostCalc = (stats, rounding) => calcStat(healthBoost, stats, rounding);
const add = ({ agility, power, will }) => ((2 * agility) + (2 * will) + power) * 3 / 50;
exports.addCalc = (stats, rounding) => calcStat(add, stats, rounding);

exports.healthTotal = (stats, rounding) => calcStat(exports, stats, rounding);

// MANA
const manaBounty = ({ agility, power, will }) => ((2 * agility) + (2 * will) + power) / 10;
exports.manaBountyCalc = (stats, rounding) => calcStat(manaBounty, stats, rounding);
const manaGift = ({ agility, power, will }) => ((2 * agility) + (2 * will) + power) * 6 / 75;
exports.manaGiftCalc = (stats, rounding) => calcStat(manaGift, stats, rounding);
const manaBoost = ({ agility, power, will }) => ((2 * agility) + (2 * will) + power) * 3 / 50;
exports.manaBoostCalc = (stats, rounding) => calcStat(manaBoost, stats, rounding);
const extra = ({ agility, power, will }) => ((2 * agility) + (2 * will) + power) / 25;
exports.extraCalc = (stats, rounding) => calcStat(extra, stats, rounding);

exports.manaTotal = (stats, rounding) => calcStat(exports, stats, rounding);

// STUN RESIST
const recalcitrant = ({ intellect, power, strength }) => ((2 * strength) + (2 * intellect) + power) / 125;
exports.recalcitrantCalc = (stats, rounding) => calcStat(recalcitrant, stats, rounding);
const resistant = ({ intellect, power, strength }) => ((2 * strength) + (2 * intellect) + power) / 250;
exports.resistantCalc = (stats, rounding) => calcStat(resistant, stats, rounding);

exports.stunResistTotal = (stats, rounding) => calcStat(exports, stats, rounding);

// FISH LUCK
const luck = ({ intellect, power, will }) => ((2 * intellect) + (2 * will) + power) / 400;
exports.luckCalc = (stats, rounding) => calcStat(luck, stats, rounding);

exports.luckTotal = (stats, rounding) => calcStat(exports, stats, rounding);
