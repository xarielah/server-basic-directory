let BASE_URL = "";

if (import.meta.env.MODE === "development") {
  BASE_URL = "http://localhost:6969";
} else {
  BASE_URL = window.location.origin;
}

async function discordInformation(): Promise<DiscordInformationResponse> {
  return fetch(`${BASE_URL}/discord`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}

export { discordInformation };

export type DiscordInformationResponse = {
  members: number;
  online: number;
  server_name: string;
  icon: string;
};
