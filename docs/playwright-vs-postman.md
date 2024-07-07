# Playwright vs Postman

I use both Playwright and Postman for API testing and I'd like to share my experiences on pros and cons between the tools.

| Function                  | Playwright                                    | Postman                                                                                                                      | Comments |
| ------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------- |
| Writing Tests             | Full code base                                | UI + Pre/Post scripting                                                                                                      |          |
| Learning Curve            | Moderate                                      | Easy                                                                                                                         |          |
| Source Control            | Friendly                                      | - Friendly with Postman Workspace (might be paid) <br> - Nightmare with import / export json files (imagine merge conflicts) |
| Code review               | Friendly                                      | - Friendly with Postman Fork <br> - Nightmare with import / export json files                                                |          |
| Code re-use               | Friendly (fixtures, code shared libs, etc...) | Mostly require copy / paste                                                                                                  |
| Running Tests Performance | Parallel / Sharding                           | No Parallel, though you can setup CI/CD to run multiple collections in parallel                                              |
| Load Test                 | Not Intended                                  | Yes, in Runner > Performance Tab                                                                                             |          |

## Ending Notes

In the end, our automation team wrote all API tests in Playwright for ease of code review, refactor, less nightmare of merge conflicts.

We still have Postman API tests and being maintainted by devs. We're doing the import / export collections approach to store json files in source control. This method gives us headache when code review and nasty merge conflicts.
