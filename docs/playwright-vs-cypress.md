# Playwright vs Cypress

I only listed out main points that I prefer playwright over cypress from my experiences. I look for the tool that can:
- perform end to end tests
- perform api tests
- open multiple browser instances / tabs
- support at least chromium browser
- run parallel tests

| Function | Playwright | Cypress | Comments |
| -------- | ---------- | ------- | -------- |
| async | standard js async / await | [Cypress Command Queue](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#The-Cypress-Command-Queue) |  |
| parallel tests | supported | need [Cypress Cloud](https://docs.cypress.io/guides/cloud/smart-orchestration/parallelization) | |
| debug | [standard breakpoints](https://playwright.dev/docs/debug) | [debug command](https://docs.cypress.io/guides/guides/debugging) | breakpoint style is more familiar, however cypress dashboard is nicer |
| open multiple browser instances / tabs | supported | [trade off limitation](https://docs.cypress.io/guides/references/trade-offs#Multiple-browsers-open-at-the-same-time) |
| sharing test setup | [fixtures concept](https://playwright.dev/docs/test-fixtures) | `before/after` hook in [support file](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Support-file) | playwright fixture style is easier to create shared setup for a group of specific tests |
| api testing | supported | supported | in cypress, multiple api calls leads to chaining `.then()` hell, while playwright standard async / await is nicer |

## Other Thoughts
- Playwright framework is standard js / typescript, you'll get overlapping experiences with being front end / nodejs devs.
- Cypress test dashboard is nice for time travel debugging, and even better when paying for Cypress Cloud. Playwright Trace is still not there yet.
