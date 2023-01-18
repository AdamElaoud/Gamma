// IDs
exports.BOT_ID = "743944201682681937";
exports.DEV_BOT_ID = "745279380099563541";
exports.OWNER_ID = "193427298958049280";
exports.SUPPORT_SERVER_ID = "744856371417186385";
exports.COMMAND_LOG_CHANNEL_ID = "746087206514327592";
exports.ERROR_LOG_CHANNEL_ID = "756179150796226561";
exports.DEV_COMMAND_CHANNEL_ID = "745373245213114438";

// AUTHOR
exports.AUTHOR_IMAGE = "https://i.imgur.com/pAsRRDH.png";

// FOOTER
exports.FOOTER_IMAGE = "https://i.imgur.com/gI9BVhH.png";

// LINKS
exports.BOT_INVITE_LINK = "https://discord.com/api/oauth2/authorize?client_id=743944201682681937&permissions=139586792512&scope=applications.commands%20bot";
exports.SUPPORT_SERVER_LINK = "https://discord.gg/sFMwKCy";
exports.WEBSITE_LINK = "https://gammastats.help";

// LANGUAGE
exports.DEFAULT_LANGUAGE = "en";
exports.SUPPORTED_LANGUAGES = ["en", "es-ES", "fr"];

// BUTTONS
exports.NO_ROUNDING_ID = "NO_ROUND";

// TIME
exports.MAX_INTERACTION_TIME = "900000"; // 15 minutes in ms
exports.INTERACTION_TIME = exports.MAX_INTERACTION_TIME;
exports.STATUS_CYCLE_TIME = "3600000"; // 1 hour in ms

// TEXT
exports.ZERO_WIDTH_SPACE = "\u200b";
exports.NO_BREAK_SPACE = "\u00A0";
exports.TAB = "\u0009";
exports.INVISIBLE_CHAR = " ";

// VALUE CONSTANTS
exports.MIN_VALUE = 0;

exports.MAX_BASE_AGILITY = 260;
exports.MAX_BASE_INTELLECT = 250;
exports.MAX_BASE_POWER = 250;
exports.MAX_BASE_STRENGTH = 255;
exports.MAX_BASE_WILL = 260;

exports.MAX_SELFISH_BOOST = 260; // highest selfish grant: +65 +50 +40 +40 +40 +25 = +260

exports.MAX_SELFISH_AGILITY = exports.MAX_BASE_AGILITY + exports.MAX_SELFISH_BOOST;
exports.MAX_SELFISH_INTELLECT = exports.MAX_BASE_INTELLECT + exports.MAX_SELFISH_BOOST;
exports.MAX_SELFISH_POWER = exports.MAX_BASE_POWER + exports.MAX_SELFISH_BOOST;
exports.MAX_SELFISH_STRENGTH = exports.MAX_BASE_STRENGTH + exports.MAX_SELFISH_BOOST;
exports.MAX_SELFISH_WILL = exports.MAX_BASE_WILL + exports.MAX_SELFISH_BOOST;