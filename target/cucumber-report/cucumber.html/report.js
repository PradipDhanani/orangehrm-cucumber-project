$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/orangehrm/resources/featurefile/dashboard.feature");
formatter.feature({
  "line": 1,
  "name": "Navigate to Dashboard elements",
  "description": "As a user\r\nI want to visit Orange Hrm website",
  "id": "navigate-to-dashboard-elements",
  "keyword": "Feature"
});
formatter.before({
  "duration": 54290208200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user should navigate to Dashboard elements",
  "description": "",
  "id": "navigate-to-dashboard-elements;verify-user-should-navigate-to-dashboard-elements",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on Admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "click on Admin Button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on Add button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see Add User button",
  "keyword": "Then "
});
formatter.match({
  "location": "DashBoardTest.iAmOnAdminPage()"
});
formatter.result({
  "duration": 37286495100,
  "status": "passed"
});
formatter.match({
  "location": "DashBoardTest.clickOnAdminButton()"
});
formatter.result({
  "duration": 7534384900,
  "status": "passed"
});
formatter.match({
  "location": "DashBoardTest.clickOnAddButton()"
});
formatter.result({
  "duration": 11906048900,
  "status": "passed"
});
formatter.match({
  "location": "DashBoardTest.iShouldSeeAddUserButton()"
});
formatter.result({
  "duration": 154932200,
  "status": "passed"
});
formatter.after({
  "duration": 159200,
  "status": "passed"
});
formatter.before({
  "duration": 67037105500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify user should navigate to MarketPlace element",
  "description": "",
  "id": "navigate-to-dashboard-elements;verify-user-should-navigate-to-marketplace-element",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on Admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "click on MarketPlace Button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should see OrangeHRM Addons on page",
  "keyword": "Then "
});
formatter.match({
  "location": "DashBoardTest.iAmOnAdminPage()"
});
formatter.result({
  "duration": 16691491300,
  "status": "passed"
});
formatter.match({
  "location": "DashBoardTest.clickOnMarketPlaceButton()"
});
formatter.result({
  "duration": 7599474600,
  "status": "passed"
});
formatter.match({
  "location": "DashBoardTest.iShouldSeeOrangeHRMAddonsOnPage()"
});
formatter.result({
  "duration": 20218360300,
  "status": "passed"
});
formatter.after({
  "duration": 84600,
  "status": "passed"
});
});