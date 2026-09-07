import { expect, test } from '@playwright/test';

test.describe('core portfolio journeys', () => {
	test('keeps the mobile title, menu, and search accessible', async ({ page }) => {
		await page.setViewportSize({ width: 390, height: 844 });
		await page.goto('/');

		await expect(page.getByRole('link', { name: 'Alex Stormwood' })).toBeVisible();
		await expect(page.getByRole('button', { name: 'Search the site' })).toBeVisible();

		const menuButton = page.locator('[data-nav-toggle]');
		await expect(menuButton).toHaveAccessibleName('Open menu');
		await menuButton.click();
		await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
		await expect(page.getByRole('link', { name: 'Projects', exact: true })).toBeVisible();

		await page.getByRole('button', { name: 'Search the site' }).click();
		await expect(page.getByRole('dialog', { name: 'Search the site' })).toBeVisible();
	});

	test('filters projects and reveals their secondary public evidence', async ({ page }) => {
		await page.goto('/projects');
		await expect(page.locator('.project-directory')).toHaveAttribute('data-hydrated', 'true');

		const search = page.getByLabel('Search projects');
		await search.fill('NodeJS Semver Updater');
		await expect(page.getByText('1 project found.')).toBeVisible();

		const project = page.locator('#nodejssemverupdater');
		await expect(project.getByRole('heading', { name: 'NodeJS Semver Updater' })).toBeVisible();
		await project.getByText('More links (1)').click();
		await expect(project.getByRole('link', { name: /View GitHub/ })).toBeVisible();
	});

	test('connects individual articles to related writing', async ({ page }) => {
		await page.goto('/articles/compiledreactjswithastro/');
		await expect(page.getByRole('heading', { name: 'Related writing' })).toBeVisible();
		await expect(page.getByRole('link', { name: /Read article/ }).last()).toBeVisible();
	});

	test('presents an accessible professional summary', async ({ page }) => {
		await page.goto('/work-with-me/');
		await expect(page.getByRole('heading', { name: 'Work with me' })).toBeVisible();
		await expect(page.getByRole('link', { name: 'Read why I use Stormwood.' })).toBeVisible();
		await expect(page.getByRole('link', { name: 'See the full employment timeline.' })).toBeVisible();
	});
});
