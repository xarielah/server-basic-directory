import express from "express";
import path from "path";
import * as discordService from "./lib/discord.service";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 6969;
const NODE_ENV = process.env.NODE_ENV || "development";

if (NODE_ENV === "development") {
  app.use(cors());
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("/discord", async (req, res) => {
  try {
    const response = await discordService.discordInformation();
    console.log("🚀 ~ file: server.ts:15 ~ app.get ~ response:", response);
    const responseObj = {
      members: response.approximate_member_count,
      online: response.approximate_presence_count,
      server_name: response.name,
      icon: response.icon,
    };
    res.json({ data: responseObj });
  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
});

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.listen(+PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
