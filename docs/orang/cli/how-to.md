---
sidebar_position: 2
sidebar_label: How to's
---

# How to's

### How to exclude directory from a search

Example: exclude directories whose names start with a dot (.) from the search.

```
orang find --include-directory "^\." negative
```
```
orang find -i "^\." e
```

### How to pass option value that starts with dash (-)

The command-line parser does not accept option values that start with a dash. See [this issue](https://github.com/commandlineparser/commandline/issues/300) for details. As a workaround, escape the dash or use the `--` separator.

```
orang find --content "\-" --replacement -- "-"
```
```
orang find -c "\-" -r -- "-"
```

