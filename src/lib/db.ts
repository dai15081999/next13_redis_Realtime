import { Redis } from '@upstash/redis';

export const db = new Redis({
  url: 'https://eu2-pro-elephant-31331.upstash.io',
  token: 'AXpjASQgYWQ2N2YyMTgtNzlhNC00YTg0LTgzNTktYjRhM2NjN2Y1ZmVhNDAxNzVjOWI4OTBlNGMyOGI1NjYxMWZmMTU5ZTc5OTM=',
})