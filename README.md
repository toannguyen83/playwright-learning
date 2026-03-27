# Playwright Learning

A central hub for my Playwright automation architecture patterns and technical trade-off analysis.

## ⚖️ Technical Trade-offs & Tooling
I believe a Senior SDET should be a "tool chooser," not just a "tool user." My framework decisions are based on scaling speed, reliability, and Developer Experience (DevEx).

| Category | [Playwright vs. Cypress](./docs/playwright-vs-cypress.md) | [Playwright vs. Postman](./docs/playwright-vs-postman.md) |
| :--- | :--- | :--- |
| **Why I Switch** | **Native Parallelism:** No complex plugins needed for sharding. | **Unified Repo:** API tests live in the same project as UI tests. |
| **Debugging** | **Trace Viewer:** Full network/source snapshots in a portable format. | **Type Safety:** TypeScript interfaces for API responses vs. Postman's sandbox. |
| **DevEx** | **Standard JS:** Uses native `async/await` for predictable execution. | **CI/CD Efficiency:** One pipeline for both E2E and API layers. |

## 🚀 Quick Start
```bash
# Clone the repo
git clone [https://github.com/toannguyen83/playwright-learning.git](https://github.com/toannguyen83/playwright-learning.git)

# Install dependencies
npm install
npx playwright install

# Run the test suite
npx playwright test