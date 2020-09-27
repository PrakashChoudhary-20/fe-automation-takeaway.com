
# Frontend automation for takeaway.com website

**Framework**: WebdriverIO + Cucumber / 
**Reporter**: Allure / 
**Style**: Page object pattern

# Steps to run the project:

## Prerequisites:
  Node version - 10.22.0 / 
  Npm version - 6.14.6 / 
  Download chromedriver/gecko driver and put them in your classpath (These are needed to interact with browser from your scripts) 

## Steps:
1. Clone the repository - https://github.com/PrakashChoudhary-20/fe-automation-takeaway.com.git
2. Navigate to the project base directory
3. Run command - npm install
4. To run your tests on Chrome browser, run this command - *npm run chrome-tests*
5. To run your tests on Firefox browser, run this command - *npm run ff-tests*
6. To run your tests on headless chrome, run this command - *npm run headless*

## Accessing Reports:
Once the code is executed successfully, reports will be generated under base directory
Locate folder named "allure-report"
Open file - index.html on a browser to see the test execution report

**Below screenshot for the sample report-** 
![Report](https://user-images.githubusercontent.com/12295323/93723428-6e27f500-fb96-11ea-94d4-83e548a94ffb.png)
