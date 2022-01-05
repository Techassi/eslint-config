# eslint-config

This is my personal ESLint config. It supports basic JS, TypeScript and Vue.

## Usage

### Add as a Dev Dependency

```shell
pnpm install -D eslint @techassi/eslint-config
```

### Configure ESLint Config File

Add a ESLint config file, e.g. `.eslintrc` or `.eslintrc.json` - See 
[here](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats) for valid file
names.

```json
{
  "extends": {
    "@techassi"
  }
}
```

### Configure ESLint Ignore File

`.eslintignore`

```
dist
public
```

This config is inspired by [@antfu/eslint-config](https://github.com/antfu/eslint-config).