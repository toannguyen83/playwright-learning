import { expect } from '@playwright/test'
import { test } from './fixtures/todo-app-fixture'

/**
 * For learning how fixture works and organize code into page object pattern
 */

test('test code organization', async ({ todoPage }) => {
  // initial visit to the todo app should not have any todo items
  await todoPage.assertTodoItemsHidden()
})

test('add new todo', async ({ todoPage }) => {
  const newTodoText = 'new todo test'
  await todoPage.addTodo(newTodoText)
  const todos = await todoPage.getTodoItems()
  await expect(todos).toHaveLength(1)
  const [todo] = todos
  await todo.assertTitle(newTodoText)
})
