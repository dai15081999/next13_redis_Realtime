const unstashRedisRestUrl = "https://eu2-pro-elephant-31331.upstash.io";
const authToken =
  "AXpjASQgYWQ2N2YyMTgtNzlhNC00YTg0LTgzNTktYjRhM2NjN2Y1ZmVhNDAxNzVjOWI4OTBlNGMyOGI1NjYxMWZmMTU5ZTc5OTM=";

type Command = "zrange" | "sismember" | "get" | "smembers";

export async function fetchRedis(
  comman: Command,
  ...args: (string | number)[]
) {
  const commandUrl = `${unstashRedisRestUrl}/${comman}/${args.join("/")}`;
  const response = await fetch(commandUrl, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`Error executing Redis command: ${response.statusText}`);
  }
  const data = await response.json();
  return data.result;
}
