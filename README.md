# playwright_framework_tamplate
## About the project
Automation framework tamplate 
## Testing strategy
work in progress..
## Website description
Website automationpracice.pl is a clothing store.
`http://www.automationpractice.pl/index.php`
## Install
- Install NPM packages
    ```
    npm install
    ```
- Update     
    ```
    npm update
    ```
- or 
    ```
    npm install -D @playwright/test@latest
    ```
## Run
- run all tests 
    ```
    npx playwright test
    ```
- run single test headless
    ```
    npx playwright test example.spec.ts
    ```
- run single test in headed mode
    ```
    npx playwright test example.spec.ts --headed
    ```
- run chosen file test or files
    ```
    npx playwright test tests
    ```
### npm scripts
- run all tests
    ```
    npm run test
    ```