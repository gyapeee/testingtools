//
// Refer to the online docs for more details:
// https://nightwatchjs.org/gettingstarted/configuration/
//
//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/
//

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: [],

  // See https://nightwatchjs.org/guide/working-with-page-objects/using-page-objects.html
  page_objects_path: ["node_modules/nightwatch/examples/pages/"],

  // See https://nightwatchjs.org/guide/extending-nightwatch/custom-commands.html
  custom_commands_path: ["node_modules/nightwatch/examples/custom-commands/"],

  // See https://nightwatchjs.org/guide/extending-nightwatch/custom-assertions.html
  custom_assertions_path: "",

  // See https://nightwatchjs.org/guide/extending-nightwatch/plugin-api.html
  plugins: [],

  // See https://nightwatchjs.org/guide/#external-globals
  globals_path: "",

  webdriver: {},

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: "https://nightwatchjs.org",

      screenshots: {
        enabled: true,
        path: "screens",
        on_failure: true,
      },

      desiredCapabilities: {
        browserName: "chrome",
        // chrome_options.add_experimental_option("prefs", {"profile.default_content_settings.cookies": 2})
        chromeOptions: {
          prefs: {
            "intl.accept_languages": "en-EN,en",
            "profile.default_content_setting_values.cookies": "2",
          },
        },
      },

      webdriver: {
        start_process: true,
        server_path: "",
      },
    },

    firefox: {
      desiredCapabilities: {
        browserName: "firefox",
        alwaysMatch: {
          acceptInsecureCerts: true,
          "moz:firefoxOptions": {
            args: [
              // '-headless',
              // '-verbose'
            ],
          },
        },
      },
      webdriver: {
        start_process: true,
        server_path: "",
        cli_args: [
          // very verbose geckodriver logs
          // '-vv'
        ],
      },
    },

    chrome: {
      desiredCapabilities: {
        browserName: "chrome",
        "goog:chromeOptions": {
          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
          //
          // w3c:false tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
          w3c: true,
          args: [
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
            //'--headless'
            "start-maximized",
          ],
          prefs: {
            "intl.accept_languages": "en_GB,en",
            //            "profile.default_content_setting_values.cookies": "2",
            //            "profile.block_third_party_cookies": "true",
          },
        },
      },

      webdriver: {
        start_process: true,
        server_path: "",
        cli_args: [
          // --verbose
        ],
      },
    },

    edge: {
      desiredCapabilities: {
        browserName: "MicrosoftEdge",
        "ms:edgeOptions": {
          w3c: true,
          // More info on EdgeDriver: https://docs.microsoft.com/en-us/microsoft-edge/webdriver-chromium/capabilities-edge-options
          args: [
            //'--headless'
          ],
        },
      },

      webdriver: {
        start_process: true,
        // Download msedgedriver from https://docs.microsoft.com/en-us/microsoft-edge/webdriver-chromium/
        //  and set the location below:
        server_path: "",
        cli_args: [
          // --verbose
        ],
      },
    },

    //////////////////////////////////////////////////////////////////////////////////
    // Configuration for when using cucumber-js (https://cucumber.io)                |
    //                                                                               |
    // It uses the bundled examples inside the nightwatch examples folder; feel free |
    // to adapt this to your own project needs                                       |
    //////////////////////////////////////////////////////////////////////////////////
    "cucumber-js": {
      src_folders: ["examples/cucumber-js/features/step_definitions"],

      test_runner: {
        // set cucumber as the runner
        type: "cucumber",

        // define cucumber specific options
        options: {
          //set the feature path
          feature_path:
            "node_modules/nightwatch/examples/cucumber-js/*/*.feature",

          // start the webdriver session automatically (enabled by default)
          // auto_start_session: true

          // use parallel execution in Cucumber
          // parallel: 2 // set number of workers to use (can also be defined in the cli as --parallel 2
        },
      },
    },

    //////////////////////////////////////////////////////////////////////////////////
    // Configuration for when using the browserstack.com cloud service               |
    //                                                                               |
    // Please set the username and access key by setting the environment variables:  |
    // - BROWSERSTACK_USERNAME                                                       |
    // - BROWSERSTACK_ACCESS_KEY                                                     |
    // .env files are supported                                                      |
    //////////////////////////////////////////////////////////////////////////////////
    browserstack: {
      selenium: {
        host: "hub.browserstack.com",
        port: 443,
      },
      // More info on configuring capabilities can be found on:
      // https://www.browserstack.com/automate/capabilities?tag=selenium-4
      desiredCapabilities: {
        "bstack:options": {
          userName: "${BROWSERSTACK_USERNAME}",
          accessKey: "${BROWSERSTACK_ACCESS_KEY}",
        },
      },

      disable_error_log: true,
      webdriver: {
        timeout_options: {
          timeout: 15000,
          retry_attempts: 3,
        },
        keep_alive: true,
        start_process: false,
      },
    },

    "browserstack.local": {
      extends: "browserstack",
      desiredCapabilities: {
        "browserstack.local": true,
      },
    },

    "browserstack.chrome": {
      extends: "browserstack",
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          w3c: true,
        },
      },
    },

    "browserstack.firefox": {
      extends: "browserstack",
      desiredCapabilities: {
        browserName: "firefox",
      },
    },

    "browserstack.ie": {
      extends: "browserstack",
      desiredCapabilities: {
        browserName: "internet explorer",
        browserVersion: "11.0",
      },
    },

    "browserstack.safari": {
      extends: "browserstack",
      desiredCapabilities: {
        browserName: "safari",
      },
    },

    "browserstack.local_chrome": {
      extends: "browserstack.local",
      desiredCapabilities: {
        browserName: "chrome",
      },
    },

    "browserstack.local_firefox": {
      extends: "browserstack.local",
      desiredCapabilities: {
        browserName: "firefox",
      },
    },
    //////////////////////////////////////////////////////////////////////////////////
    // Configuration for when using the SauceLabs cloud service                      |
    //                                                                               |
    // Please set the username and access key by setting the environment variables:  |
    // - SAUCE_USERNAME                                                              |
    // - SAUCE_ACCESS_KEY                                                            |
    //////////////////////////////////////////////////////////////////////////////////
    saucelabs: {
      selenium: {
        host: "ondemand.saucelabs.com",
        port: 443,
      },
      // More info on configuring capabilities can be found on:
      // https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options
      desiredCapabilities: {
        "sauce:options": {
          username: "${SAUCE_USERNAME}",
          accessKey: "${SAUCE_ACCESS_KEY}",
          // https://docs.saucelabs.com/dev/cli/sauce-connect-proxy/#--region
          // region: 'us-west-1'
          // https://docs.saucelabs.com/dev/test-configuration-options/#tunnelidentifier
          // parentTunnel: '',
          // tunnelIdentifier: '',
        },
      },
      disable_error_log: false,
      webdriver: {
        start_process: false,
      },
    },
    "saucelabs.chrome": {
      extends: "saucelabs",
      desiredCapabilities: {
        browserName: "chrome",
        screenResolution: "1280x1024",
        browserVersion: "latest",
        javascriptEnabled: true,
        acceptSslCerts: true,
        timeZone: "London",
        chromeOptions: {
          w3c: true,
        },
      },
    },
    "saucelabs.firefox": {
      extends: "saucelabs",
      desiredCapabilities: {
        browserName: "firefox",
        screenResolution: "1280x1024",
        browserVersion: "latest",
        javascriptEnabled: true,
        acceptSslCerts: true,
        timeZone: "London",
      },
    },
    //////////////////////////////////////////////////////////////////////////////////
    // Configuration for when using the Selenium service, either locally or remote,  |
    //  like Selenium Grid                                                           |
    //////////////////////////////////////////////////////////////////////////////////
    selenium_server: {
      // Selenium Server is running locally and is managed by Nightwatch
      // Install the NPM package @nightwatch/selenium-server or download the selenium server jar file from https://github.com/SeleniumHQ/selenium/releases/, e.g.: selenium-server-4.1.1.jar
      selenium: {
        start_process: true,
        port: 4444,
        server_path: "", // Leave empty if @nightwatch/selenium-server is installed
        command: "standalone", // Selenium 4 only
        cli_args: {
          //'webdriver.gecko.driver': '',
          //'webdriver.chrome.driver': ''
        },
      },
      webdriver: {
        start_process: false,
        default_path_prefix: "/wd/hub",
      },
    },

    "selenium.chrome": {
      extends: "selenium_server",
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          w3c: true,
        },
      },
    },

    "selenium.firefox": {
      extends: "selenium_server",
      desiredCapabilities: {
        browserName: "firefox",
        "moz:firefoxOptions": {
          args: [
            // '-headless',
            // '-verbose'
          ],
        },
      },
    },
  },
};
