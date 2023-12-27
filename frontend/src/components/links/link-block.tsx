import { type LinkType } from "./link.type";
import DiscordInformation from "./discord-info";

export default function LinkBlock({ link }: ILinkBlock) {
  const discordClass =
    link.type === "discord" ? "from-zinc-900 bg-gradient-to-t" : "";

  return (
    <div
      onClick={() => window.open(link.href, "_blank")}
      className={`shadow-xl cursor-pointer ease-in-out duration-150 hover:bg-zinc-800 flex flex-col gap-6 p-5 bg-zinc-200/5 w-full max-w-[500px] mx-auto rounded-lg border-[1px] border-zinc-800/90 ${discordClass}`}
      id="link-container"
    >
      <h1
        className="text-zinc-400 ease-in-out duration-150 text-xl"
        id="link-header"
      >
        {link.title}
      </h1>
      {link.description ? <p>{link.description}</p> : ""}
      {link.type === "discord" ? <DiscordInformation /> : ""}
    </div>
  );
}

interface ILinkBlock {
  link: LinkType;
}
