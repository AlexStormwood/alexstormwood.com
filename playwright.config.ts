import { defineConfig, devices } from '@playwright/test';

const host = '127.0.0.1';
const port = 4323;

export default defineConfig({
	testDir: './tests/e2e',
	fullyParallel: true,
	forbidOnly: Boolean(process.env.CI),
	retries: process.env.CI ? 2 : 0,
	reporter: 'list',
	use: {
		baseURL: `http://${host}:${port}`,
		trace: 'retain-on-failure',
	},
	webServer: {
		command: `npm run dev -- --host ${host} --port ${port} --ignore-lock`,
		env: { ASTRO_DEV_BACKGROUND: '1' },
		url: `http://${host}:${port}`,
		reuseExistingServer: !process.env.CI,
		timeout: 120_000,
	},
	projects: [
		{ name: 'desktop-chromium', use: { ...devices['Desktop Chrome'] } },
		{ name: 'mobile-chromium', use: { ...devices['Pixel 5'] } },
	],
});
