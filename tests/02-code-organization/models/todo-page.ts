import { Page, expect } from '@playwright/test'
import { TodoItem } from './todo-item'

export class TodoPage {
  private readonly todoItems = this.page.getByTestId('todo-item')

  constructor(private readonly page: Page, private readonly url: string) {}

  async goto() {
    await this.page.goto(this.url)
  }

  async assertTodoItemsHidden() {
    await expect(this.todoItems).toBeHidden()
  }

  async getTodoItems() {
    const todoTitles = await this.page.getByTestId('todo-title').allInnerTexts()
    const todoItems = todoTitles.map(t => new TodoItem(this.page, t))
    return todoItems
  }

  async addTodo(todoText: string) {
    const input = this.page.locator('input.new-todo')
    await input.fill(todoText)
    await input.press('Enter')
  }
}
