// middleware/rateLimiter.ts
import rateLimit from 'express-rate-limit';

export const contactRateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 2, // 2 requests per hour
  message: {
    error: 'Too many contact form submissions',
    message: 'Please wait before sending another message',
  },
  standardHeaders: true, // Return rate limit info in headers
  legacyHeaders: false,
  // Store in Redis for production (optional)
  // store: new RedisStore({ client: redisClient }),
});