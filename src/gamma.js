const { Collection, Client, Events, GatewayIntentBits, ActivityType } = require("discord.js");
require("dotenv").config();
const FS = require("fs");
const { logBootUp } = require("./util/logger");
const { STATUS_CYCLE_TIME } = require("./util/constants");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds // required for server, channel, and role caches to be populated and accessible
    ]
});

// ---------------------- FILE LOAD ----------------------
client.commands = new Collection();

const commandFiles = FS.readdirSync("./src/commands");
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    if (command)
        client.commands.set(command.data.name, command);
}

// ---------------------- EVENT HANDLING ----------------------
client.once(Events.ClientReady, (clientInstance) => {
    logBootUp(clientInstance);
    statusLoop(clientInstance);
});

client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand())
        return;

    const { client: clientInstance } = interaction;
    const command = clientInstance.commands.get(interaction.commandName);


    if (!command)
        return;

    try {
        await command.execute(interaction);

    } catch (err) {
        console.warn(err);
        await interaction.reply({ content: `Error executing command: ${interaction.commandName}`, ephemeral: true });
    }
});

client.login(process.env.GAMMATOKEN);

const statusLoop = (clientInstance) => {
    setInterval(setActivity(clientInstance), STATUS_CYCLE_TIME);
};

const setActivity = (clientInstance) => () => {
    const userCount = clientInstance.guilds.cache.reduce((total, guild) => total + guild.memberCount, 0);

    clientInstance.user.setActivity(`over ${userCount} users`, { type: ActivityType.Watching });
};

