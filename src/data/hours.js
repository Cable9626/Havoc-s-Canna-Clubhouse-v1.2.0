export const hours = [
  { label: 'Monday – Thursday', days: [1, 2, 3, 4], open: 8, close: 17 },
  { label: 'Friday', days: [5], open: 8, close: 18 },
  { label: 'Saturday', days: [6], open: 8, close: 17 },
  { label: 'Sunday', days: [0], open: 9, close: 15 },
]

export function formatHour(h) {
  const suffix = h >= 12 ? 'pm' : 'am'
  const twelve = h > 12 ? h - 12 : h
  return twelve + suffix
}

export function getSouthAfricaNow() {
  const now = new Date(
    new Date().toLocaleString('en-US', { timeZone: 'Africa/Johannesburg' })
  )
  return { day: now.getDay(), hour: now.getHours() + now.getMinutes() / 60 }
}