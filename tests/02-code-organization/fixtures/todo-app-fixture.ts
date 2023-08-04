import { test as base } from '@playwright/test'
import { TodoPage } from '../models/todo-page'

// either interface or type should work for fixture implementation
interface TodoAppFixture {
  todoPage: TodoPage
  initTodoAppFixture: void
}

export const test = base.extend<TodoAppFixture>({
  // imagine if you have different environments with different urls for the same app,
  // then you can override this base url
  baseURL: 'https://demo.playwright.dev/todomvc',
  todoPage: async ({ page, baseURL }, use) => {
    await use(new TodoPage(page, baseURL))
  },
  // use for auto init any code, such as initial visit to the site
  initTodoAppFixture: [
    async ({ todoPage }, use) => {
      await todoPage.goto()

      await use()

      // if app needs to clean up after test, code can be here
    },
    { auto: true }
  ]
})
