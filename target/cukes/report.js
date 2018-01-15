$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test.feature");
formatter.feature({
  "line": 1,
  "name": "Flipkart automation",
  "description": "Description: This feature will test a LogIn and search functionality",
  "id": "flipkart-automation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Login Functionality",
  "description": "",
  "id": "flipkart-automation;login-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user navigates to https://www.flipkart.com/",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters \"username\" and \"password\" to LogIn",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user logins into the site",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters the product name to be search and add it to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_navigates_to_https_www_flipkart_com()"
});
formatter.result({
  "duration": 26806409991,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 13
    },
    {
      "val": "password",
      "offset": 28
    }
  ],
  "location": "Steps.user_enters_and_to_LogIn(String,String)"
});
formatter.result({
  "duration": 3027148374,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clicks_on_login_button()"
});
formatter.result({
  "duration": 9468474068,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enters_the_product_name_to_be_search()"
});
formatter.result({
  "duration": 16688101589,
  "status": "passed"
});
});