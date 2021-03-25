# romulus

A desktop application for scheduling python scripts.

## Install From Source

Clone the repository, `cd romulus`, and run `yarn`.

## Development

Run `yarn start`. The app is configured for hot-reloads for most of any changes that are made.

## Packaging

Run `yarn package` to package it up into `release/`.

## Development Update

_As of 3/25/21_

Fleshing out core UI components and basic functionality.

<a href="https://gyazo.com/c58cfcc0d88ca44aef816d25a942ae88"><img src="https://i.gyazo.com/c58cfcc0d88ca44aef816d25a942ae88.gif" alt="Image from Gyazo" width="1018"/></a>

Run (simple `exec` implementation until scheduler is built; see console output for python-to-console actions), remove, _File Profile_.

<a href="https://gyazo.com/de42a2c249f1fdf300f7e9315544f279"><img src="https://i.gyazo.com/de42a2c249f1fdf300f7e9315544f279.gif" alt="Image from Gyazo" width="1006"/></a>

Next milestone implements additional `electron-store` data for schedule and python executable, updated _File Profile_ rendering, notifications for upload errors, notifications for file runs, and general UI improvements.

`v0.0.1` will be completed with a scheduler service implementation and more robust `electron-store` utilization.
