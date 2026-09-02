// app/lib/ratelimit.ts
// Shared rate limiting for API routes, backed by the same Redis
// instance used for feedback storage. If Redis isn't configured
// (e.g. local dev without env vars), rate limiting is skipped rather
// than blocking requests.

import { Ratelimit } from "@upstash/ratelimit";
import { redis, redisConfigured } from "./redis";

// Chat: 10 messages per minute per visitor — generous for real use,
// but stops a script from running up your Anthropic API bill.
export const chatRatelimit = redisConfigured
  ? new Ratelimit({
      redis: redis!,
      limiter: Ratelimit.slidingWindow(10, "1 m"),
      prefix: "ratelimit:chat",
    })
  : null;

// Feedback votes: 20 per minute per visitor — plenty for normal use,
// stops vote-spam.
export const feedbackRatelimit = redisConfigured
  ? new Ratelimit({
      redis: redis!,
      limiter: Ratelimit.slidingWindow(20, "1 m"),
      prefix: "ratelimit:feedback",
    })
  : null;

// Passphrase attempts on /internal/feedback: 5 per minute per visitor
// — strict, since this guards against someone guessing the passphrase.
export const feedbackViewRatelimit = redisConfigured
  ? new Ratelimit({
      redis: redis!,
      limiter: Ratelimit.slidingWindow(5, "1 m"),
      prefix: "ratelimit:feedback-view",
    })
  : null;

// Best-effort visitor identifier from Vercel's forwarded headers.
export function getClientIp(req: Request): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp;
  return "unknown";
}
