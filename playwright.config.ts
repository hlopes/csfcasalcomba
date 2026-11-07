import { defineConfig, devices } from '@playwright/test'

const baseURL = 'http://127.0.0.1:3000'

export default defineConfig({
  forbidOnly: Boolean(process.env.CI),
  fullyParallel: true,
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  reporter: process.env.CI
    ? [['github'], ['html', { open: 'never' }]]
    : [['list'], ['html', { open: 'never' }]],
  retries: process.env.CI ? 2 : 0,
  testDir: './e2e',
  use: {
    baseURL,
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'npm run build && npm run start',
    reuseExistingServer: !process.env.CI,
    timeout: 240_000,
    url: baseURL,
  },
  workers: process.env.CI ? 1 : undefined,
})
