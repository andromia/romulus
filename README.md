This project is under development.

# romulus

A desktop application for scheduling python scripts.

## Install From Source

Clone the repository, `cd romulus`, and run `yarn`.

## Development

Run `yarn start`. The app is configured for hot-reloads for most of any changes that are made.

## Packaging

Run `yarn package` to package it up into `release/`.

## Development Update

_As of 3/26/21_

Fleshing out core UI components and basic functionality.

<a href="https://gyazo.com/c58cfcc0d88ca44aef816d25a942ae88"><img src="https://i.gyazo.com/c58cfcc0d88ca44aef816d25a942ae88.gif" alt="Image from Gyazo" width="1018"/></a>

Run (simple `exec` implementation until scheduler is built; see console output for python-to-console actions), remove, _File Profile_.

<a href="https://gyazo.com/de42a2c249f1fdf300f7e9315544f279"><img src="https://i.gyazo.com/de42a2c249f1fdf300f7e9315544f279.gif" alt="Image from Gyazo" width="1006"/></a>

Select a Python interpreter to use per script.

<a href="https://gyazo.com/f98db3ccc8632b233b1409b1c0aea999"><img src="https://i.gyazo.com/f98db3ccc8632b233b1409b1c0aea999.gif" alt="Image from Gyazo" width="996"/></a>

Next milestone implements save schedule times to `electron-store`, updated _File Profile_ rendering, notifications for upload errors, notifications for file runs, and general UI and code improvements.

`v0.0.1` will be completed with a same-process scheduler and more robust `electron-store` utilization.

`v0.0.2` focuses on dev enironment and abstracting the scheduler to a separate service built with go-lang.

And less concrete, `v0.0.3` improves code structure to leverage React properly. `v0.0.4` adds basic electron improvements (`right-click` for _Help_, _Submit a Bug_, _Discord_, and _GitHub_).
