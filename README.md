# Website of Annika Fischer

[![Build Status](https://github.com/jinhoffen/website-fischer-osteopathie/actions/workflows/build_deploy.yml/badge.svg)](https://github.com/jinhoffen/website-fischer-osteopathie/actions)

This repo contains the source code for the static website of Annika Fischer.
It is generated using [Jekyll](https://jekyllrb.com).
The website is based on the Spectral template by [HTML5 UP](https://html5up.net) licensed under the [CCA 3.0](https://html5up.net/license).

![website_desktop](https://user-images.githubusercontent.com/9803046/235812242-ea4813c0-d40a-4199-ba0b-bae2849a7686.png)

Table of Contents:

- [Website of Annika Fischer](#website-of-annika-fischer)
  - [Build](#build)
    - [Ruby (on Mac/Linux)](#ruby-on-maclinux)
    - [Bundler and Jekyll](#bundler-and-jekyll)
    - [Develop](#develop)
    - [Build Site](#build-site)
  - [Continuous Deployment](#continuous-deployment)
  - [Frameworks](#frameworks)

## Build

[Jekyll](https://jekyllrb.com) is a Ruby CLI (also used as the engine for Github Pages).

### Ruby (on Mac/Linux)

> The following steps largely mimic the [Jekyll docs](https://jekyllrb.com/docs/installation/macos/).

Jekyll requires Ruby 2.5.0 or higher so you might be required to install it.

Install [homebrew](https://brew.sh), the package management system for macOS and Linux.

    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

Install [chruby](https://github.com/postmodern/chruby), a version manager tool for Ruby, for easier switching of ruby versions during development

    brew install chruby ruby-install xz

Install the latest stable version of Ruby supported by Jekyll (3.1.3 at the time of writing):

    ruby-install ruby 3.2.2

Configure your shell to automatically use chruby.
If you use the default shell, add this to `~/.zshrc`

```bash
echo "source $(brew --prefix)/opt/chruby/share/chruby/chruby.sh" >> ~/.zshrc
echo "source $(brew --prefix)/opt/chruby/share/chruby/auto.sh" >> ~/.zshrc
echo "chruby ruby-3.1.3" >> ~/.zshrc # run 'chruby' to see actual version
```

Install any desired ruby version in chruby, e.g., version 3.0.0

```bash
ruby-install ruby 3.0.0
```

and switch to it using 

```
chruby 2.4.5
```

Update the gems, the Ruby package manager

    gem update

### Bundler and Jekyll

Install the `bundler`, an environment manager for Ruby projects:

    gem install bundler

You may want to set the default gem path, so you don't need `sudo`

    bundle config path vendor/bundle
    
In the project root folder, install all the dependencies with

    bundle install

You should be able to run Jekyll now with

    bundle exec jekyll -v

### Develop

With this command a development web-server will be started on [http://localhost:4000](http://localhost:4000)

    bundle exec jekyll serve -t --livereload --config "_config.yml,_config.dev.yml"

For more info, see the [quick-start section](https://jekyllrb.com/docs/quickstart/) in the Jekyll docs.

### Build Site

With the following command the website will be built and exported to `_site`

    bundle exec jekyll build -t --config "_config.yml,_config.dev.yml"

## Continuous Deployment

Every Pull-Request automatically deploys to a temporary Firebase Staging environment (link posted as comment in the PR by Github Actions).

Every main commit triggers deployment to the live channel of [Firbase Hosting](https://website-justus-inhoffen.web.app) through [Github Actions](https://github.com/jinhoffen/website-justus-inhoffen/actions).
Only this build is executed with the production flag.

Note that the main branch is protected in GitHub and only allows merges through pull requests.

## Frameworks

* Spectral Theme (packaged on 2022-03-06) by [HTML5 UP](https://html5up.net/spectral)
* [Jekyll v4.2.2](https://jekyllrb.com/) with plugins:
  * [Last-Modified](https://github.com/gjtorikian/jekyll-last-modified-at)
  * [Sitemap](https://github.com/jekyll/jekyll-sitemap)
  * [Version](https://github.com/rob-murray/jekyll-version-plugin)
  * [Minifier](https://github.com/digitalsparky/jekyll-minifier)
  * [Webp](https://github.com/sverrirs/jekyll-webp)
  * [HTML Proofer](https://github.com/gjtorikian/html-proofer)
  * [Smartify](https://github.com/pathawks/jekyll-smartify)
* JavaScript libraries:
  * [jQuery v3.6.0](https://jquery.com/)
  * [jQuery Scrolly v1.0.0-dev](https://github.com/Victa/scrolly)
  * [jQuery Scrollex v0.2.1](https://github.com/ajlkn/jquery.scrollex)
  * [Cookie Consent v2.9.0](https://github.com/orestbida/cookieconsent)
* [Font Awesome 5](https://fontawesome.com/) packaged via [Iconmoon](https://icomoon.io)
* [Firebase Hosting](https://firebase.google.com/docs/hosting/)
* [GitHub and GitHub Actions](https://www.github.com)