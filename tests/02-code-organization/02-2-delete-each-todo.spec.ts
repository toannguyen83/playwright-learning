import { expect } from '@playwright/test'
import { test } from './fixtures/created-todos-fixture'

/**
 * With this fixture, it should have some todos created for testing delete
 */

test('delete todos', async ({ todoPage }) => {
  const todoItems = await todoPage.getTodoItems()
  expect(todoItems).not.toHaveLength(0)

  for (const item of todoItems) {
    await item.assertVisible()
    await item.delete()
    await item.assertHidden()
  }
})
