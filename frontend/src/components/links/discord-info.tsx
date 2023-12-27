import { useEffect, useState } from "react";
import {
  discordInformation,
  type DiscordInformationResponse,
} from "../../service/discord.service";

export default function DiscordInformation() {
  const [discordInfo, setDiscordInfo] = useState<DiscordInformationResponse>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    discordInformation()
      .then(({ data }: any) => {
        setDiscordInfo(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <MockDiscordInfoLoading />;
  else
    return (
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">{discordInfo?.server_name}</h2>
        <div className="flex justify-evenly items-center flex-col sm:flex-row md:text-md text-lg">
          <p>
            Total Members:{" "}
            <span className="text-gray-400 font-bold">
              {discordInfo?.members}
            </span>
          </p>
          <p>
            Online Members:{" "}
            <span className="font-bold text-green-400">
              {discordInfo?.online}
            </span>
          </p>
        </div>
      </div>
    );
}

function MockDiscordInfoLoading() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="bg-gray-400/20 rounded-lg animate-pulse h-5"></h2>
      <div className="flex justify-evenly items-center gap-4 flex-col sm:flex-row">
        <p className="bg-gray-400/20 rounded-lg animate-pulse h-5 w-[50%]"></p>
        <p className="bg-gray-400/20 rounded-lg animate-pulse h-5 w-[50%]"></p>
      </div>
    </div>
  );
}
