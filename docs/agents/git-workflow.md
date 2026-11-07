# Git workflow

## Commit messages

Commitlint is enforced by the `commit-msg` hook (`./node_modules/.bin/commitlint`): a message is rejected unless its type is one of `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test`. Write Conventional Commits on the first try.

## Verification

CI (`.github/workflows/ci.yml`) runs on every pull request and on pushes to `main`: a `quality` job runs `npm run lint`, `npm run typecheck`, `npm run test` and `npm run build`; an `e2e` job runs `npm run test:e2e`. Reproduce the quality gate locally in the same order. See [testing.md](./testing.md) for the test suites.
