import { Locator, Page, expect } from '@playwright/test'

/**
 * Class design can go in 2 ways
 * - you can expose internal locators as public
 *   - pros: reduce wrapper method code check() / uncheck() assertVisible() etc...
 *   - cons: in rare case if you need to add logic for making sure this todo visible,
 *           such as making sure title visible, checkbox visbile, etc... you will need a wrapper method anyway
 *
 * - you can private all internal locators and expose public methods as needed
 *   - pros: greater control on internal implementation, easier to read at test level
 *   - cons: might be bloat with wrapper methods
 */

export class TodoItem {
  private readonly self: Locator
  private readonly checkbox: Locator
  private readonly title: Locator

  constructor(page: Page, title: string) {
    this.self = page
      .getByTestId('todo-item')
      .filter({ has: page.getByText(title) })
    this.checkbox = this.self.getByRole('checkbox')
    this.title = this.self.getByTestId('todo-title')
  }

  async check() {
    await this.checkbox.check()
  }

  async uncheck() {
    await this.checkbox.uncheck()
  }

  async assertTitle(titleText: string) {
    await expect(this.title).toHaveText(titleText)
  }

  async delete() {
    const deleteButton = this.self.locator('button.destroy')
    await this.self.hover() // in order to see delete button, needs to hover over todo item
    await expect(deleteButton).toBeVisible()
    await deleteButton.click()
  }

  async assertVisible() {
    await expect(this.self).toBeVisible()
  }

  async assertHidden() {
    await expect(this.self).toBeHidden()
  }
}
