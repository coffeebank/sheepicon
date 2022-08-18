![Picture of a lamb](https://raw.githubusercontent.com/coffeebank/lambpost/master/lambpost.png)

# Sheepicon

Easily copy links to emotes and other image links with a click!

Works with saving and sending Discord emotes you don't have, even without Nitro :)

Comes with a read-only REST API for the image links!

![Usage preview](https://raw.githubusercontent.com/coffeebank/lambpost/master/sample.gif)


## Installation

1. Click `Fork` near the top right corner of the page
1. Click `Settings` on the tabbed bar
1. Scroll down to the "GitHub Pages" section
1. Set the Source to `Branch:master` and `Folder:/docs`, then click Save
1. Your copy is ready at the website shown!


## Usage

Edit `_config.yml` with your information
  - Sheepicon can be used with Discord emotes by setting these options:
    - size48: true  *(or set size64 instead for larger images)*
    - titleInUrl: true

Edit `index.md` for your Favorites
  - `animated.md` and `emotes.md` are extra pages for if you have a lot more emotes.
  - Creating new `.md` files will add them to the navbar automatically!
  - The API does not list `index.md` emotes.


## Updates

Merge updates when prompted by GitHub, from `coffeebank/sheepicon` into your repo.


## Attributions

- Brand image: [Deirdre Corcoran Foote, Unsplash, no affiliation](https://unsplash.com/photos/kGLbAP1XzAI)
- Sample image: [Anna Claire Schellenberg, Unsplash, no affiliation](https://unsplash.com/photos/cI0Z_qBexMw)
- Sample image: [Casey Horner, Unsplash, no affiliation](https://unsplash.com/photos/SLsXjFp4YGA)
- [zenorocha/clipboard.js](https://github.com/zenorocha/clipboard.js/)
- [krasimir/gifffer](https://github.com/krasimir/gifffer/)
- Powered by Jekyll, SCSS, and GitHub Pages