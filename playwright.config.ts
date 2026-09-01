import { defineConfig, devices } from "@playwright/test";

// Override with PORT=xxxx if 4321 is busy on your machine (e.g. PORT=4399 npm test).
const port = process.env.PORT ?? "4321";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : "list",
  use: {
    baseURL: `http://localhost:${port}`,
    trace: "on-first-retry",
  },
  webServer: {
    // `astro preview` detaches into a background daemon, which breaks
    // Playwright's process-liveness check  serve the built dist/ directly
    // instead. Run `npm run build` before `npm test` (see CI workflow).
    command: `npx serve dist -l ${port}`,
    url: `http://localhost:${port}`,
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
