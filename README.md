# Glade

Grove is a Content Management System commissioned by NPR for use by NPR Member Stations.

The Glade library adds utilities for development of custom front-end JavaScript solutions within the Grove CMS.



## Glade Core

Glade's features center around different challenges in Grove. Glade dispatches a custom event `grove-navigate` whenever it detects that the page has changed.

Glade base functions can be separated into a few categories:


### Dynamic Style/Script insertion

* `insertCSS` allows for CSS contained within a string to be dynamically loaded on a page.
* `insertStylesheet` allows for a stylesheet to be dynamically loaded on a page.
* `insertScript` allows for an external JavaScript file to be dynamically loaded on a page.

Each of these scripts has an option whether or not it should persist when the user navigates to another page in Grove and returns a reference to the new element.


### Making unsafe JavaScript safe

* `addIsolatedEventListener` is a wrapper so that Event Listeners placed on the window, body, or header in Grove can be destroyed on navigation.
* `setIsolatedInterval` is a wrapper so that Intervals created with setInterval can be destroyed on navigation.


### Other helper functions

* `getDataLayer` formats the page/story information contained within the `brightspot-dataLayer` meta tag in a way that is easy to use.
* `pageMatches` is a tool that allows for pattern matching in page URLs. This can be useful for loading dynamic scripts based on the page URL.
* `components` creates Grove lists populated with custom data.



## Glade Plugins

Glade has a plugin system for running custom code. These can run any function of Glade as well as any function in `lib`.



## Using Glade in Grove

In the Grove admin, go to `Sites & Settings`->`Front-End`->`Advanced`->`Custom Scripts And Styles`.  
Select `Add Custom Head Elements`  
Set `Internal Name` to `Glade JS`  
Set `HTTP Methods` to `GET`  
Leave `URL Pattern` and `Content Types` blank.  
Under `Elements`, add a `Script Element`  
Set `Internal Name` to `Glade JS` (again)  
Set `Type` to `Link`  
Paste the url to `glade.js` into the `Script URL` input.  
Click `Save` and wait about five minutes for Grove's caching to realize you did something.  


### Repository Structure
```
glade/
├── dist/glade.js                · minified library (placed here by the build process, not included in repo)
├── dist/index.html              · placed here by the build process, not included in repo, can ignore
│
├── lib/                         · helper functions for project (private)
├── plugins/                     · plugin system
├── source/
├── index.html                   . makes Vite (the build process) happy, can ignore
├── index.js                     · entry point for library
│
├── .browserslistrc              · browser support settings for plugins
├── .editorconfig                · editor-agnostic settings
├── .env.production              . environment variables 
├── .gitignore                   · file patterns to exclude from repository
├── .gitlab-ci.yml               · Gitlab deploy file. Probably useless to you
├── eslint.config.mjs            · JavaScript Linting (ESLint)
├── package-lock.json
├── package.json
├── README.md                    · project description - YOU ARE HERE
└── vite.config.mjs              . config for build process
```
