---
sidebar_label: "Intro"
---

# Gitalias

## Summary

Essential goal of gitalias is to turns [git](https://git-scm.com/) command into shortest possible sequence of characters (an alias) where the alias does not have to be remembered but it can be mnemotechnically derived from the full command.

:::tip
There is special alias `alias` that lists all aliases (alias for `config --global --get-regexp ^alias\\.`)
:::

## Usage

- Copy [list of aliases](https://raw.githubusercontent.com/JosefPihrt/gitalias/main/alias.gitconfig) and paste it to your [.gitconfig](https://git-scm.com/docs/git-config) file.

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

2. **Each parameter/value is represented by combination of first letter of words it consists of.**
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