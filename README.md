<h1 align="center">TSNodeplate</h1>

> A minimal boilerplate to build Node.JS projects with Typescript.

- [Features](#features)
- [Requirements](#requirements)
- [Installing](#installing)

## Features

- `.nvmrc` for Node.js version management.
- ESLint plugins configured for code linting.
- Prettier integration for consistent formatting.
- Preconfigured npm scripts for development workflows.
- Enforced conventional commit standards using Husky + commitlint.
- Import sorting is configured and automatically applied in this order:

```js
import 'dotenv/config'; //  Side-effect imports

import fs from 'node:fs'; // Node.js built-ins if declared if "node:" prefix

import express from 'express'; // External packages

import { env } from '@/config/env'; // Internal aliases

import parent from '../parent/index.js'; // Parent
import sibling from './sibling/index.js'; // Sibling
```

You can customize the order by modifying the **groups** array in the ESLint configuration file, see [lines 27-34](./eslint.config.mjs#L27-34).

## Requirements

- [Node.js](https://nodejs.org/en) v.22 or higher

## Installing:

Yarn:

```bash
$ yarn install
```

NPM:

```bash
$ npm install
```
