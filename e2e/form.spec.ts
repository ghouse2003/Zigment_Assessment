import { test, expect } from '@playwright/test';

test('form generation and submission', async ({ page }) => {
  await page.goto('/');

  // Check initial render
  await expect(page.getByText('Dynamic Form Generator')).toBeVisible();

  // Test JSON editor
  const editor = page.locator('.monaco-editor');
  await expect(editor).toBeVisible();

  // Test form rendering
  await expect(page.getByText('Project Requirements Survey')).toBeVisible();

  // Test form validation
  const submitButton = page.getByText('Submit');
  await submitButton.click();

  // Check for validation errors
  await expect(page.getByText('This field is required')).toBeVisible();

  // Test form submission
  await page.fill('input[type="text"]', 'John Doe');
  await page.fill('input[type="email"]', 'john@example.com');
  await submitButton.click();

  // Check for success message
  await expect(page.getByText('Form submitted successfully!')).toBeVisible();
});