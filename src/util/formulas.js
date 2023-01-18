const { agil, int, power, str, will } = require("./emojis.js");

// DAMAGE
exports.dealerFormula = `( 2 ${str.emoji} + 2 ${will.emoji} + ${power.emoji} ) 3 / 400`;
exports.giverFormula = `( 2 ${str.emoji} + 2 ${will.emoji} + ${power.emoji} ) / 200`;
exports.boonFormula = `( 2 ${str.emoji} + 2 ${will.emoji} + ${power.emoji} ) / 400`;

// RESIST
exports.wardFormula = `( 2 ${str.emoji} + 2 ${agil.emoji} + ${power.emoji} ) 3 / 250`;
exports.proofFormula = `( 2 ${str.emoji} + 2 ${agil.emoji} + ${power.emoji} ) / 125`;
exports.defyFormula = `( 2 ${str.emoji} + 2 ${agil.emoji} + ${power.emoji} ) / 250`;

// ACCURACY
exports.sniperFormula = `( 2 ${int.emoji} + 2 ${agil.emoji} + ${power.emoji} ) 3 / 400`;
exports.shotFormula = `( 2 ${int.emoji} + 2 ${agil.emoji} + ${power.emoji} ) / 200`;
exports.eyeFormula = `( 2 ${int.emoji} + 2 ${agil.emoji} + ${power.emoji} ) / 400`;

// PIERCE
exports.breakerFormula = `( 2 ${str.emoji} + 2 ${agil.emoji} + ${power.emoji} ) / 400`;
exports.piercerFormula = `( 2 ${str.emoji} + 2 ${agil.emoji} + ${power.emoji} ) 3 / 2000`;

// CRITICAL
exports.assailantFormula = `( 2 ${agil.emoji} + 2 ${will.emoji} + ${power.emoji} ) / 40`;
exports.sStrikerFormula = `( 2 ${agil.emoji} + 2 ${will.emoji} + ${power.emoji} ) 3 / 150`; // school striker
exports.cStrikerFormula = `( 2 ${agil.emoji} + 2 ${will.emoji} + ${power.emoji} ) 3 / 125`; // critical striker
exports.hitterFormula = `( 2 ${agil.emoji} + 2 ${will.emoji} + ${power.emoji} ) 9 / 500`;

// BLOCK
exports.defenderFormula = `( 2 ${int.emoji} + 2 ${will.emoji} + ${power.emoji} ) 3 / 125`;
exports.blockerFormula = `( 2 ${int.emoji} + 2 ${will.emoji} + ${power.emoji} ) 9 / 500`;

// PIP CONVERSION
exports.conserverFormula = `( 2 ${agil.emoji} + 2 ${will.emoji} + ${power.emoji} ) 3 / 125`;
exports.saverFormula = `( 2 ${agil.emoji} + 2 ${will.emoji} + ${power.emoji} ) 9 / 500`;

// PIP CHANCE
exports.pipOPlentyFormula = `( 2 ${str.emoji} + 2 ${int.emoji} + ${power.emoji} ) / 250`;
exports.pipBoostFormula = "5%";

// INCOMING
exports.livelyFormula = `( 2 ${int.emoji} + 2 ${agil.emoji} + ${power.emoji} ) 13 / 2000`;
exports.healthyFormula = `( 2 ${int.emoji} + 2 ${agil.emoji} + ${power.emoji} ) 3 / 1000`;

// OUTGOING
exports.medicFormula = `( 2 ${str.emoji} + 2 ${will.emoji} + ${power.emoji} ) 13 / 2000`;
exports.healerFormula = `( 2 ${str.emoji} + 2 ${will.emoji} + ${power.emoji} ) 3 / 1000`;

// HEALTH
exports.healthBountyFormula = `( 2 ${agil.emoji} + 2 ${will.emoji} + ${power.emoji} ) 3 / 25`;
exports.healthGiftFormula = `( 2 ${agil.emoji} + 2 ${will.emoji} + ${power.emoji} ) / 10`;
exports.healthBoostFormula = `( 2 ${agil.emoji} + 2 ${will.emoji} + ${power.emoji} ) 2 / 25`;
exports.addFormula = `( 2 ${agil.emoji} + 2 ${will.emoji} + ${power.emoji} ) 3 / 50`;

// MANA
exports.manaBountyFormula = `( 2 ${int.emoji} + 2 ${will.emoji} + ${power.emoji} ) / 10`;
exports.manaGiftFormula = `( 2 ${int.emoji} + 2 ${will.emoji} + ${power.emoji} ) 2 / 25`;
exports.manaBoostFormula = `( 2 ${int.emoji} + 2 ${will.emoji} + ${power.emoji} ) 3 / 50`;
exports.extraFormula = `( 2 ${int.emoji} + 2 ${will.emoji} + ${power.emoji} ) / 25`;

// STUN RESIST
exports.recalcitrantFormula = `( 2 ${str.emoji} + 2 ${int.emoji} + ${power.emoji} ) / 125`;
exports.resistantFormula = `( 2 ${str.emoji} + 2 ${int.emoji} + ${power.emoji} ) / 250`;

// FISH LUCK
exports.epicLuckFormula = `( 2 ${int.emoji} + 2 ${will.emoji} + ${power.emoji} ) / 400`;
exports.luckFormula = `( 2 ${int.emoji} + 2 ${will.emoji} + ${power.emoji} ) / 400`;

