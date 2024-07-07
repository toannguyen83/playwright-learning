# Playwright vs Cypress

I used both Playwright and Cypress and both tools have pros and cons. I look for the tool that can do the following:

- perform end to end tests
- perform api tests
- open multiple browser instances / tabs
- support at least chromium browser
- run parallel tests

In the end I chose Playwright since the framework fits my needs.

| Function                               | Playwright                                                | Cypress                                                                                                                       | Comments                                                                                                          |
| -------------------------------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Async                                  | standard js async / await                                 | [Cypress Command Queue](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#The-Cypress-Command-Queue)       |                                                                                                                   |
| Run Parallel Tests                     | Parallel / Sharding                                       | Need [Cypress Cloud](https://docs.cypress.io/guides/cloud/smart-orchestration/parallelization)                                |                                                                                                                   |
| Debug                                  | [Standard Breakpoints](https://playwright.dev/docs/debug) | [Debug Command](https://docs.cypress.io/guides/guides/debugging)                                                              | breakpoint style is more familiar, however cypress dashboard is nicer                                             |
| Open multiple browser instances / tabs | Supported                                                 | [Trade off limitation](https://docs.cypress.io/guides/references/trade-offs#Multiple-browsers-open-at-the-same-time)          |
| Sharing test setup                     | [Fixtures](https://playwright.dev/docs/test-fixtures)     | `before/after` hook in [support file](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Support-file) | playwright fixture style is easier to create shared setup for a group of specific tests                           |
| API Testing                            | Supported                                                 | Supported                                                                                                                     | in cypress, multiple api calls leads to chaining `.then()` hell, while playwright standard async / await is nicer |

## Ending Notes

- Playwright framework is standard js / typescript, you'll get overlapping experiences with being front end / nodejs devs.
- Cypress test dashboard is nice for time travel debugging, and even better when paying for Cypress Cloud. Playwright Trace is still not there yet.
