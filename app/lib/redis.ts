// app/lib/redis.ts
// Shared Upstash Redis client for anonymous feedback storage.
// Supports both current Upstash-via-Vercel env var names and the
// older Vercel KV names, so it works whichever the integration sets.

import { Redis } from "@upstash/redis";

const url =
  process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
const token =
  process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

export const redisConfigured = Boolean(url && token);

export const redis = redisConfigured
  ? new Redis({ url: url as string, token: token as string })
  : null;
