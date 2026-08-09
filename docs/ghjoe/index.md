---
sidebar_label: "Intro"
---

# GH Joe

## Summary

GH Joe is a managed list of [GitHub CLI](https://cli.github.com/manual/gh) [aliases](https://cli.github.com/manual/gh_alias).

GH Joe maps each command to the shortest possible alias. You don't need to memorize aliases — you can derive them from the full command.

See [aliases.yml](https://github.com/josefpihrt/ghjoe/blob/main/aliases.yml) for the full list of aliases.

## Installation

Import the list of aliases into your GitHub CLI config file:

```sh
curl https://raw.githubusercontent.com/josefpihrt/ghjoe/main/aliases.yml | gh alias import -
```

Optionally, overwrite existing aliases:

```sh
curl https://raw.githubusercontent.com/josefpihrt/ghjoe/main/aliases.yml | gh alias import --clobber -
```

## Commands Aliases

| Alias | Command |
| --- | --- |
| `a` | `alias` |
| `b` | `browse` |
| `c` | `codespace` |
| `e` | `release` |
| `g` | `gist` |
| `h` | `auth` |
| `i` | `issue` |
| `j` | `project` |
| `k` | `cache` |
| `l` | `label` |
| `n` | `run` |
| `o` | `config` |
| `p` | `pr` |
| `r` | `repo` |
| `s` | `search` |
| `t` | `secret` |
| `u` | `status` |
| `v` | `variable` |
| `w` | `workflow` |
| `x` | `extension` |

## Aliases Creation Rules

Each alias is created according to several simple rules:

1. **Each root command is represented by a single letter.**
   - For example `issue`  is represented by `i`.

2. **Each subcommand/parameter/value is formed from the first letter of each word.**
   - For example subcommand `release delete-asset` is represented by `rda`.
   - For example parameter `--exclude-pre-releases` is represented by `epr`.

3. **Parameters are sorted in alphabetical order.**
   - For example command `pr create --assignee @me --draft --title` is represented by `pcamdt`.