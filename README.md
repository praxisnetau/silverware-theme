# SilverWare Theme

[![Latest Stable Version](https://poser.pugx.org/silverware/theme/v/stable)](https://packagist.org/packages/silverware/theme)
[![Latest Unstable Version](https://poser.pugx.org/silverware/theme/v/unstable)](https://packagist.org/packages/silverware/theme)
[![License](https://poser.pugx.org/silverware/theme/license)](https://packagist.org/packages/silverware/theme)

The default theme for a SilverWare application, based upon:

- [Webpack v3][webpack] (includes [dev server][webpack-dev-server])
- [Bootstrap v4][bootstrap] (now supports v4.0.0-beta.2)
- [SilverStripe v4][silverstripe]
- [Font Awesome][font-awesome]
- [Modernizr][modernizr]

## Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Issues](#issues)
- [To-Do](#to-do)
- [Contribution](#contribution)
- [Attribution](#attribution)
- [Maintainers](#maintainers)
- [License](#license)

## Requirements

- [SilverWare][silverware]

## Installation

Installation is via [Composer][composer]:

```
$ composer require silverware/theme
```

You will also need to use Yarn (or NPM) to install the theme dependencies:

```
$ cd themes/silverware-theme
$ yarn install
```

Once your theme dependencies are installed, execute the following to start the webpack development server:

```
$ yarn start
```

The theme should now compile with hot module reloading enabled, allowing the browser to automatically reload
and update your styles as you make changes to the theme SASS.

To prepare your theme for production, execute the following:

```
$ yarn build
```

## Usage

To use this theme with your SilverWare application, you will need to configure `SSViewer` via YAML:

```yaml
SilverStripe\View\SSViewer:
  themes:
    - silverware-theme
    - '$default'
```

## Issues

Please use the [GitHub issue tracker][issues] for bug reports and feature requests.

## To-Do

- Improve bundled SASS

## Contribution

Your contributions are gladly welcomed to help make this project better.
Please see [contributing](CONTRIBUTING.md) for more information.

## Attribution

- Makes use of [Font Awesome][font-awesome] by [Dave Gandy](https://github.com/davegandy).
- Makes use of [Bootstrap][bootstrap] by the
  [Bootstrap Authors](https://github.com/twbs/bootstrap/graphs/contributors)
  and [Twitter, Inc](https://twitter.com).
- Makes use of [webpack][webpack] and [webpack dev server][webpack-dev-server]
  by [Tobias Koppers](https://github.com/sokra), [Kees Kluskens](https://github.com/SpaceK33z),
  and [many more](https://github.com/webpack/webpack/graphs/contributors).

## Maintainers

[![Colin Tucker](https://avatars3.githubusercontent.com/u/1853705?s=144)](https://github.com/colintucker) | [![Praxis Interactive](https://avatars2.githubusercontent.com/u/1782612?s=144)](https://www.praxis.net.au)
---|---
[Colin Tucker](https://github.com/colintucker) | [Praxis Interactive](https://www.praxis.net.au)

## License

[BSD-3-Clause](LICENSE.md) &copy; Praxis Interactive

[silverware]: https://github.com/praxisnetau/silverware
[composer]: https://getcomposer.org
[issues]: https://github.com/praxisnetau/silverware-theme/issues
[webpack]: https://github.com/webpack/webpack
[webpack-dev-server]: https://github.com/webpack/webpack-dev-server
[font-awesome]: http://fontawesome.io
[bootstrap]: http://getbootstrap.com/
[silverstripe]: https://github.com/silverstripe/silverstripe-framework
[modernizr]: https://modernizr.com
