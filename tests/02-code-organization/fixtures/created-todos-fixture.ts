import { test as base } from './todo-app-fixture'

/**
 * Extends existing todo app fixture and we can populate some todo items
 * for any tests that need existing data
 */

interface CreatedTodosFixture {
  initCreatedTodosFixture: void
  todoData: string[]
}

export const test = base.extend<CreatedTodosFixture>({
  todoData: ['create basic test', 'create organization test'],
  initCreatedTodosFixture: [
    async ({ todoPage, todoData }, use) => {
      for (const todo of todoData) {
        await todoPage.addTodo(todo)
      }
      await use()
    },
    { auto: true }
  ]
})
