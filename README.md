<h1 align="center">Nodeplate</h1>

> A minimal boilerplate for building Node.JS applications.

- [Features](#features)
- [Usage](#usage)
  - [Requirements](#requirements)
  - [Installing](#installing)

## Features

- nvm configuration file to help manage required Node.js version.
- ESLint plugins configured for code linting.
- Prettier plugins configured for code formatting.
- A couple of preconfigured scripts to start app, lint and format code.
- eslint-plugin-import-helpers to better organize imports. Order will be the following sequence:

```js
// Node native modules will be at the top of imports list if declared with "node:" prefix
import fs from 'node:fs';

// External modules
import express from 'express';

// Parent
import parent from '../parent/index.js';

// Sibling
import sibling from './sibling/index.js';
```

## Usage

### Requirements

- [Node.js](https://nodejs.org/en) >= v18.0.0

### Installing:

Yarn:

```bash
$ yarn install
```

NPM:

```bash
$ npm install
```

