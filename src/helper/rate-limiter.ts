// ---------------------------------------------------------------------------
// In-memory rate limiter (sliding window per IP)
// ---------------------------------------------------------------------------
const RATE_LIMIT_WINDOW_MS = 60_000 // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 3 // max 3 requests per window

const requestLog = new Map<string, number[]>()

// Sliding-window check that also records the incoming request
function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const timestamps = requestLog.get(ip) ?? []

  // Keep only timestamps within the current window
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
  requestLog.set(ip, recent)

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    return true
  }

  recent.push(now)

  return false
}

export { checkRateLimit }
