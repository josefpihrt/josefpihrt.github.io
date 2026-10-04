---
sidebar_label: "Intro"
---

# Gitalias

## Summary

Gitalias maps each [git](https://git-scm.com/) command to the shortest possible alias. You don't need to memorize aliases — you can derive them from the full command.

:::tip
The `alias` command lists all aliases (alias for `config --global --get-regexp ^alias\\.`)
:::

## Usage

- Copy the [alias list](https://raw.githubusercontent.com/josefpihrt/gitalias/main/alias.gitconfig) and paste it into your [.gitconfig](https://git-scm.com/docs/git-config) file.

### Usage Example

#### Implement feature on a new branch
```sh
git th                 # reset --hard
git sm                 # switch main
git l                  # pull
git sc feature/foo     # switch --create feature/foo
                       # Implement feature ...
git aa                 # add --all
git cm "Implement foo" # commit --message "Implement foo"
```

#### Create and Merge PR

Use GitHub CLI or web UI ...

#### Clean feature branch
```sh
git sm              # switch main
git l               # pull
git opo             # remote prune origin
git bdf feature/foo # branch --delete --force feature/foo
```

## Rules

Each alias is created according to several simple rules:

1. **Each command is represented by a single letter.**
   - For example `merge`  is represented by `m`.

2. **Each parameter/value is formed from the first letter of each word.**
   - For example `--no-commit` is represented by `nc`.
   - Branch `main` is represented by letter `m`
   - If the short parameter is uppercase letter then the letter is doubled.
     - For example `branch -D` is represented by `bdd`.

3. **Parameters are sorted in alphabetical order.**
   - For example: `merge --no-commit --squash` is represented by `mncs`.
   - When the alias contains parameter that requires value to be specified by the user, that parameter is the last one.
     - For example `log --oneline --max-count <MAX_COUNT>` is represented by `lomc`.
   - Parameter `--dry-run` is always the last one.
     - For example  `git clean --force --dry-run` is represented by `git nfdr`