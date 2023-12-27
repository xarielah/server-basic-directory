import dotenv from "dotenv";
dotenv.config();

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN || "";
const DISCORD_API = process.env.DISCORD_API || "";
const DISCORD_GUILD_ID = process.env.DISCORD_GUILD_ID || "";

const discordConfig = {
  DISCORD_BOT_TOKEN,
  DISCORD_API,
  DISCORD_GUILD_ID,
};

export default discordConfig;
