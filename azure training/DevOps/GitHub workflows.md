## GitHub Container Action

**Dockerfile -> GitHub Action -> GitHub Workflow**

```yml .github/workflows/main.yml
name: A workflow for my Hello World file
on: push
jobs:
  build:
    name: Hello world action
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - uses: ./action-a
        with:
          MY_NAME: "Mona"
```

```yml ./action-a/action.yml
name: "Hello Actions"
description: "Greet someone"
author: "octocat@github.com"
inputs:
  MY_NAME:
    description: "Who to greet"
    required: true
    default: "World"
runs:
  using: "docker"
  image: "Dockerfile"
```

## GitHub Script

```yml in worflow without building separate action
on: push
jobs:
  echo-input:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/github-script@v2
        with:
          script: | # has acces to `github` (authenticated Octokit object)
            const path = require('path')
            const scriptPath = path.resolve('./path/to/script.js')
            console.log(require(scriptPath)(github.context))
```

## Node CI Example

```yml
name: Node.js CI

on:
  push:
    branches: [master]
  pull_request:
    branches: [master]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [10.x, 12.x]

    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}
      - run: npm ci
      - run: npm run build --if-present
      - run: npm test
```
