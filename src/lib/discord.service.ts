// Backend discord service.

import discordConfig from "./discord.config";

async function _fetch(url: string, options: any) {
  return fetch(discordConfig.DISCORD_API + url, options).then((res) =>
    res.json()
  );
}

async function discordInformation() {
  return _fetch(
    "/guilds/" + discordConfig.DISCORD_GUILD_ID + "?with_counts=true",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bot ${discordConfig.DISCORD_BOT_TOKEN}`,
      },
    }
  );
}

export { discordInformation };
