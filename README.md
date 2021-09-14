# School manager client

## Table of Contents

* [Installation](#installation)
* [Usage](#basic-usage)
* [What's included](#whats-included)
* [Contributing](#contributing)
* [Versioning](#versioning)

## Installation

``` bash
# clone the repo
$ git clone https://github.com/tatarpro/schoomanagerclient.git my-project

# go into app's directory
$ cd my-project

# install app's dependencies
$ npm install
```

## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

see also:
[User Guide](CRA.md)

### Basic usage

``` bash
# dev server  with hot reload at http://localhost:3000
$ npm start
```

Navigate to [http://localhost:3000](http://localhost:3000). The app will automatically reload if you change any of the source files.

### Build

Run `build` to build the project. The build artifacts will be stored in the `build/` directory.

```bash
# build for production with minification
$ npm run build
```

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
SchoolManagerClient#v1.0.0
├── public/          #static files
│   ├── assets/      #assets
│   └── index.html   #html template
│
├── src/             #project root
│   ├── containers/  #container source
│   ├── scss/        #user scss/css source
│   ├── views/       #views source
│   ├── App.js
│   ├── App.test.js
│   ├── index.js
│   ├── _nav.js      #sidebar config
│   └── routes.js    #routes config
│
└── package.json
```

## Contributing

Please read through our [contributing guidelines](https://github.com/tatarpro/schoomanagerclient/blob/master/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Editor preferences are available in the [editor config](https://github.com/tatarpro/schoomanagerclient/blob/master/.editorconfig) for easy use in common text editors. Read more and download plugins at <http://editorconfig.org>.

## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, the Template is maintained under [the Semantic Versioning guidelines](http://semver.org/).

## Copyright and license

copyright 2021 Ako Tavershima. Code released under [the MIT license](LICENSE).
There is only one limitation you can't can’t re-distribute the CoreUI as stock. You can’t do this if you modify the CoreUI. In past we faced some problems with persons who tried to sell CoreUI based templates.
