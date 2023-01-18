const { REST, Routes } = require("discord.js");
require("dotenv").config();
const FS = require("fs");
const { DEV_BOT_ID, SUPPORT_SERVER_ID } = require("../util/constants.js");

const commands = [];
const commandFiles = FS.readdirSync("./src/commands"); // FS runs from level script was called at
for (const file of commandFiles) {
    const command = require(`../commands/${file}`);
    commands.push(command.data.toJSON());
}

const deploy = async () => {
    const rest = new REST({ version: "10" }).setToken(process.env.GAMMADEVTOKEN);

    try {
        const response = await rest.put(Routes.applicationGuildCommands(DEV_BOT_ID, SUPPORT_SERVER_ID),	{ body: commands });

        console.log(`Successfully registered ${response.length} slash commands in the support server`); // eslint-disable-line

    } catch (err) {
        console.error(err);
    }
};

deploy();