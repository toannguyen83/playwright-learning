import { test as base } from '@playwright/test'
import { TodoPage } from '../models/todo-page'

// either interface or type should work for fixture implementation
interface TodoAppFixture {
  // playwright default baseURL is a type of string | undefined, if we're going strict and have
  // strictNullChecks on, it can throw a type error when passing in to TodoPage constructor
  // this can help override the default string | undefined type with a string type (guarantee to have value)
  baseURL: string
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

      // code after await use() ran after test finishes, can be used for cleanup / teardown
    },
    { auto: true }
  ]
})
