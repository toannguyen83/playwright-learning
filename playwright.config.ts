import { defineConfig } from '@playwright/test'

export default defineConfig({
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: [['list'], ['html']],
  use: {
    trace: 'on-first-retry'
  }
})
