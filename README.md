

# testingtools

This is a project where different testing frameworks are demonstrated 

## playwright

[Read more about playwright](./playwright/PLAYWRIGHT.md)


## nightwatch.js

do the next commands in the nightwatch subfolder

original install: npm install nightwatch --save-dev

separate webdriver install is needed: npm install chromedriver --save-dev

run an example test built in nightwatch in chrome: npx nightwatch nightwatch/node_modules/nightwatch/examples/tests/ecosia.js --env chrome

node_modules/nightwatch/examples/tests/ecosia.js is copied as google.js into nightwatch/ to have multiple TCs running in google search.
<br/>

## webdriver.io

do the next commands in the webdriver.io subfolder

original install: npm init wdio .

accept everything and select logically(like select)

run an example test built in webdriver.io in chrome:

npx wdio run .\wdio.conf.js
<br/>

## cypress

do the next commands in the cypress subfolder

original install: npm install cypress --save-dev

open cypress in chrome: npx cypress open

select the options to have a basic E2E test config in cypress

generate examples and navigate to the runner page
<br/>