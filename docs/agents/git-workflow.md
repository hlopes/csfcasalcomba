# Git workflow

## Commit messages

Commitlint is enforced by the `commit-msg` hook (`./node_modules/.bin/commitlint`): a message is rejected unless its type is one of `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test`. Write Conventional Commits on the first try.

## Verification

No CI workflows exist beyond `dependabot.yml` — the commit-msg hook is the only automated check. Whatever you verify, you verify locally: `npm run lint` followed by `npm run build`.
