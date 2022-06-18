# testingtools

## nightwatch.js

### original install: npm install nightwatch --save-dev

### separate webdriver install is needed: npm install chromedriver --save-dev

### run an example test built in nightwatch in chrome: npx nightwatch nightwatch/node_modules/nightwatch/examples/tests/ecosia.js --env chrome

### node_modules/nightwatch/examples/tests/ecosia.js is copied as google.js into nightwatch/ to have multiple TCs running in google search.
<br/>

## webdriver.io

### original install: npm init wdio .

### accept everything and select logically(like select)

### run an example test built in webdriver.io in chrome:

### cd webdriver.io

### npx wdio run .\wdio.conf.js
<br/>

## cypress

### original install: npm install cypress --save-dev

### open cypress in chrome: npx cypress open

### select the options to have a basic E2E test config in cypress

### generate examples and navigate to the runner page
<br/>

## playwright

### install playwright core: npm i -D @playwright/test
### install supported browsers: npx playwright install
#### previous command downloads browser exe files on windos so antivirus can detect them as IDP.Generic. In this case add them as exceptions.
### run tests dwells in playwright/tests/ folder: npx playwright test --headed


<br/>