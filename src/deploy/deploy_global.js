const { REST, Routes } = require("discord.js");
require("dotenv").config();
const FS = require("fs");
const { BOT_ID } = require("../util/constants.js");

const commands = [];
const commandFiles = FS.readdirSync("./src/commands");
for (const file of commandFiles) {
    const command = require(`../commands/${file}`);
    commands.push(command.data.toJSON());
}

const deploy = async () => {
    const rest = new REST({ version: "10" }).setToken(process.env.GAMMATOKEN);

    try {
        const response = await rest.put(Routes.applicationCommands(BOT_ID),	{ body: commands });

        console.log(`Successfully registered ${response.length} slash commands globally`); // eslint-disable-line

    } catch (err) {
        console.error(err);
    }
};

deploy();