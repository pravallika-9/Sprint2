$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature/Signup.feature");
formatter.feature({
  "name": "Uniform feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify Filter button by entering all the field on marketing tracking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Filter"
    }
  ]
});
formatter.step({
  "name": "Admin is on marketing tracking page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enter \"\u003cCampaign Name\u003e\" \"\u003cDate Added\u003e\" and \"\u003cTracking Code\u003e\" field",
  "keyword": "When "
});
formatter.step({
  "name": "User click on filter button to see the result",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Campaign Name",
        "",
        "Date Added",
        "",
        "Tracking Code"
      ]
    },
    {
      "cells": [
        "PRAVALLIKA",
        "",
        "2021-09-08",
        "",
        "613835a2c33e9"
      ]
    },
    {
      "cells": [
        "",
        "",
        "2021-09-02",
        "",
        ""
      ]
    },
    {
      "cells": [
        "asdfgmnb",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "",
        "6131f8d0a6b8esdfghujio9876543wsdfvbmnbvcxzsrtyuiop9876543333erfg"
      ]
    }
  ]
});
formatter.background({
  "name": "Verify Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is able to enter into the uniform application",
  "keyword": "Given "
});
formatter.match({
  "location": "signupdefination.user_is_able_to_enter_into_the_uniform_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter Usename with \"admin\" and password with \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_enter_Usename_with_and_password_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.user_navigates_to_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on marketing menu",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_click_on_marketing_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on marketing under marketing menu",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.user_click_on_marketing_under_marketing_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User on marketing tracking page",
  "keyword": "Then "
});
formatter.match({
  "location": "signupdefination.user_on_marketing_tracking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Filter button by entering all the field on marketing tracking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Filter"
    }
  ]
});
formatter.step({
  "name": "Admin is on marketing tracking page",
  "keyword": "Given "
});
formatter.match({
  "location": "signupdefination.admin_is_on_marketing_tracking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"PRAVALLIKA\" \"2021-09-08\" and \"613835a2c33e9\" field",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_enter_and_field(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on filter button to see the result",
  "keyword": "Then "
});
formatter.match({
  "location": "signupdefination.user_click_on_filter_button_to_see_the_result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Verify Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is able to enter into the uniform application",
  "keyword": "Given "
});
formatter.match({
  "location": "signupdefination.user_is_able_to_enter_into_the_uniform_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter Usename with \"admin\" and password with \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_enter_Usename_with_and_password_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.user_navigates_to_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on marketing menu",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_click_on_marketing_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on marketing under marketing menu",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.user_click_on_marketing_under_marketing_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User on marketing tracking page",
  "keyword": "Then "
});
formatter.match({
  "location": "signupdefination.user_on_marketing_tracking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Filter button by entering all the field on marketing tracking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Filter"
    }
  ]
});
formatter.step({
  "name": "Admin is on marketing tracking page",
  "keyword": "Given "
});
formatter.match({
  "location": "signupdefination.admin_is_on_marketing_tracking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"\" \"2021-09-02\" and \"\" field",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_enter_and_field(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on filter button to see the result",
  "keyword": "Then "
});
formatter.match({
  "location": "signupdefination.user_click_on_filter_button_to_see_the_result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Verify Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is able to enter into the uniform application",
  "keyword": "Given "
});
formatter.match({
  "location": "signupdefination.user_is_able_to_enter_into_the_uniform_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter Usename with \"admin\" and password with \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_enter_Usename_with_and_password_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.user_navigates_to_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on marketing menu",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_click_on_marketing_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on marketing under marketing menu",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.user_click_on_marketing_under_marketing_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User on marketing tracking page",
  "keyword": "Then "
});
formatter.match({
  "location": "signupdefination.user_on_marketing_tracking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Filter button by entering all the field on marketing tracking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Filter"
    }
  ]
});
formatter.step({
  "name": "Admin is on marketing tracking page",
  "keyword": "Given "
});
formatter.match({
  "location": "signupdefination.admin_is_on_marketing_tracking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"asdfgmnb\" \"\" and \"\" field",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_enter_and_field(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on filter button to see the result",
  "keyword": "Then "
});
formatter.match({
  "location": "signupdefination.user_click_on_filter_button_to_see_the_result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Verify Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is able to enter into the uniform application",
  "keyword": "Given "
});
formatter.match({
  "location": "signupdefination.user_is_able_to_enter_into_the_uniform_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter Usename with \"admin\" and password with \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_enter_Usename_with_and_password_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.user_navigates_to_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on marketing menu",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_click_on_marketing_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on marketing under marketing menu",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.user_click_on_marketing_under_marketing_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User on marketing tracking page",
  "keyword": "Then "
});
formatter.match({
  "location": "signupdefination.user_on_marketing_tracking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Filter button by entering all the field on marketing tracking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Filter"
    }
  ]
});
formatter.step({
  "name": "Admin is on marketing tracking page",
  "keyword": "Given "
});
formatter.match({
  "location": "signupdefination.admin_is_on_marketing_tracking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"\" \"\" and \"6131f8d0a6b8esdfghujio9876543wsdfvbmnbvcxzsrtyuiop9876543333erfg\" field",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_enter_and_field(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on filter button to see the result",
  "keyword": "Then "
});
formatter.match({
  "location": "signupdefination.user_click_on_filter_button_to_see_the_result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Admin Verify Add button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddButton"
    }
  ]
});
formatter.step({
  "name": "User click on add button",
  "keyword": "Given "
});
formatter.step({
  "name": "User need to enter \"\u003cCampaign Name\u003e\"  and \"\u003cCampaign Description\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User click on save button",
  "keyword": "And "
});
formatter.step({
  "name": "User User navigates to Marketing Tracking page",
  "keyword": "And "
});
formatter.step({
  "name": "verify sucess msg",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Campaign Name",
        "",
        "Campaign Description"
      ]
    },
    {
      "cells": [
        "mngfdfg",
        "",
        ""
      ]
    }
  ]
});
formatter.background({
  "name": "Verify Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is able to enter into the uniform application",
  "keyword": "Given "
});
formatter.match({
  "location": "signupdefination.user_is_able_to_enter_into_the_uniform_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter Usename with \"admin\" and password with \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_enter_Usename_with_and_password_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.user_navigates_to_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on marketing menu",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_click_on_marketing_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on marketing under marketing menu",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.user_click_on_marketing_under_marketing_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User on marketing tracking page",
  "keyword": "Then "
});
formatter.match({
  "location": "signupdefination.user_on_marketing_tracking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Admin Verify Add button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddButton"
    }
  ]
});
formatter.step({
  "name": "User click on add button",
  "keyword": "Given "
});
formatter.match({
  "location": "signupdefination.user_click_on_add_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User need to enter \"mngfdfg\"  and \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.user_need_to_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.user_click_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User User navigates to Marketing Tracking page",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.user_User_navigates_to_Marketing_Tracking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify sucess msg",
  "keyword": "Then "
});
formatter.match({
  "location": "signupdefination.verify_sucess_msg()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Verify Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is able to enter into the uniform application",
  "keyword": "Given "
});
formatter.match({
  "location": "signupdefination.user_is_able_to_enter_into_the_uniform_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter Usename with \"admin\" and password with \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_enter_Usename_with_and_password_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.user_navigates_to_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on marketing menu",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_click_on_marketing_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on marketing under marketing menu",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.user_click_on_marketing_under_marketing_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User on marketing tracking page",
  "keyword": "Then "
});
formatter.match({
  "location": "signupdefination.user_on_marketing_tracking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Admin Verify return button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CancelButton"
    }
  ]
});
formatter.step({
  "name": "User is in add page",
  "keyword": "Given "
});
formatter.match({
  "location": "signupdefination.user_is_in_add_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on return button",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_click_on_return_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Marketing Tracking page",
  "keyword": "Then "
});
formatter.match({
  "location": "signupdefination.user_navigates_to_Marketing_Tracking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Verify Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is able to enter into the uniform application",
  "keyword": "Given "
});
formatter.match({
  "location": "signupdefination.user_is_able_to_enter_into_the_uniform_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter Usename with \"admin\" and password with \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_enter_Usename_with_and_password_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.user_navigates_to_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on marketing menu",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_click_on_marketing_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on marketing under marketing menu",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.user_click_on_marketing_under_marketing_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User on marketing tracking page",
  "keyword": "Then "
});
formatter.match({
  "location": "signupdefination.user_on_marketing_tracking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Delete button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DeleteButton"
    }
  ]
});
formatter.step({
  "name": "User click on check box to delete the row",
  "keyword": "Given "
});
formatter.match({
  "location": "signupdefination.user_click_on_check_box_to_delete_the_row()"
});
formatter.result({
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat StepDefination.signupdefination.user_click_on_check_box_to_delete_the_row(signupdefination.java:415)\r\n\tat ✽.User click on check box to delete the row(file:src/test/java/feature/Signup.feature:45)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click on delete button",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_click_on_delete_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User can see the alert msg for delete",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_can_see_the_alert_msg_for_delete()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click on ok in alert msg to delete the row",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.user_click_on_ok_in_alert_msg_to_delete_the_row()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Selected row deleted Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "signupdefination.selected_row_deleted_Successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Edit option",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@EditButton"
    }
  ]
});
formatter.step({
  "name": "User click on Edit",
  "keyword": "Given "
});
formatter.step({
  "name": "User navigates to edit page",
  "keyword": "When "
});
formatter.step({
  "name": "User modify the \"\u003cCampaign Name\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "USer click on save option",
  "keyword": "And "
});
formatter.step({
  "name": "User naviagates to Tracking page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Campaign Name"
      ]
    },
    {
      "cells": [
        "mnhfgfg"
      ]
    }
  ]
});
formatter.background({
  "name": "Verify Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is able to enter into the uniform application",
  "keyword": "Given "
});
formatter.match({
  "location": "signupdefination.user_is_able_to_enter_into_the_uniform_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter Usename with \"admin\" and password with \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_enter_Usename_with_and_password_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.user_navigates_to_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on marketing menu",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_click_on_marketing_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on marketing under marketing menu",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.user_click_on_marketing_under_marketing_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User on marketing tracking page",
  "keyword": "Then "
});
formatter.match({
  "location": "signupdefination.user_on_marketing_tracking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Edit option",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@EditButton"
    }
  ]
});
formatter.step({
  "name": "User click on Edit",
  "keyword": "Given "
});
formatter.match({
  "location": "signupdefination.user_click_on_Edit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to edit page",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_navigates_to_edit_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User modify the \"mnhfgfg\"",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_modify_the_and(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "USer click on save option",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.user_click_on_save_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User naviagates to Tracking page",
  "keyword": "Then "
});
formatter.match({
  "location": "signupdefination.user_naviagates_to_Tracking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Verify Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is able to enter into the uniform application",
  "keyword": "Given "
});
formatter.match({
  "location": "signupdefination.user_is_able_to_enter_into_the_uniform_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter Usename with \"admin\" and password with \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_enter_Usename_with_and_password_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.user_navigates_to_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on marketing menu",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_click_on_marketing_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on marketing under marketing menu",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.user_click_on_marketing_under_marketing_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User on marketing tracking page",
  "keyword": "Then "
});
formatter.match({
  "location": "signupdefination.user_on_marketing_tracking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify sorting",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sorting"
    }
  ]
});
formatter.step({
  "name": "Admin is on marketing tracking page",
  "keyword": "Given "
});
formatter.match({
  "location": "signupdefination.admin_is_on_marketing_tracking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Campaign Name in result section",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_click_on_Campaign_Name_in_result_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see the result in desc order based on Campaign Name",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.user_can_see_the_result_in_desc_order_based_on_Campaign_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Code in result section",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_click_on_Code_in_result_secetion()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see the Code in sorted order",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.user_can_see_the_Code_in_sorted_order()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Date Added in result section",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_click_on_Date_Added_in_result_secetion()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see the Date Added in sorted order",
  "keyword": "Then "
});
formatter.match({
  "location": "signupdefination.user_can_see_the_Date_Added_in_sorted_order()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Verify Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is able to enter into the uniform application",
  "keyword": "Given "
});
formatter.match({
  "location": "signupdefination.user_is_able_to_enter_into_the_uniform_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter Usename with \"admin\" and password with \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_enter_Usename_with_and_password_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.user_navigates_to_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on marketing menu",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_click_on_marketing_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on marketing under marketing menu",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.user_click_on_marketing_under_marketing_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User on marketing tracking page",
  "keyword": "Then "
});
formatter.match({
  "location": "signupdefination.user_on_marketing_tracking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Pagination",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@pagination"
    }
  ]
});
formatter.step({
  "name": "User find the pagination",
  "keyword": "Given "
});
formatter.match({
  "location": "signupdefination.user_find_the_pagination()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on symbol",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_click_on_symbol()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Symbol",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.user_click_on_Symbol()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigated to previous page",
  "keyword": "Then "
});
formatter.match({
  "location": "signupdefination.user_navigated_to_previous_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify the Add button with invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Bug1"
    }
  ]
});
formatter.step({
  "name": "User click on add button",
  "keyword": "Given "
});
formatter.step({
  "name": "User need to enter \"\u003cCampaign Name\u003e\" with null value and \"\u003cCampaign Description\u003e\" with more than two fifty seven characters",
  "keyword": "When "
});
formatter.step({
  "name": "User click on save button",
  "keyword": "And "
});
formatter.step({
  "name": "verify Error msg",
  "keyword": "And "
});
formatter.step({
  "name": "verify sucess msg",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Campaign Name",
        "",
        "Campaign Description"
      ]
    },
    {
      "cells": [
        "",
        "",
        "mnbvcxdsdfghjkl/mnbvcsdfgolkjhgfdsqwertyuiop!@#$%^\u0026kjfghnjm,hgfdCVBNM,liuytREWDFBnm*\u0026^%$dvbnm,liuytresxcvbnmnnbsgxvbsmxmnhsgxbmxmxskjgxyhbxns,.,xljchsagvcxm,lzoayisshaml,a;xiljsyfsbjkmxljhufxjb,cx;xkziufxzmx.,,xbyxgjkmxz,xnyxgsk,mzxhayfskalkslanxanvgdnksmjghdl,mcvdhjndlklmdsbhdwjkmds,xng"
      ]
    }
  ]
});
formatter.background({
  "name": "Verify Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is able to enter into the uniform application",
  "keyword": "Given "
});
formatter.match({
  "location": "signupdefination.user_is_able_to_enter_into_the_uniform_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter Usename with \"admin\" and password with \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_enter_Usename_with_and_password_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.user_navigates_to_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on marketing menu",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_click_on_marketing_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on marketing under marketing menu",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.user_click_on_marketing_under_marketing_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User on marketing tracking page",
  "keyword": "Then "
});
formatter.match({
  "location": "signupdefination.user_on_marketing_tracking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the Add button with invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Bug1"
    }
  ]
});
formatter.step({
  "name": "User click on add button",
  "keyword": "Given "
});
formatter.match({
  "location": "signupdefination.user_click_on_add_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User need to enter \"\" with null value and \"mnbvcxdsdfghjkl/mnbvcsdfgolkjhgfdsqwertyuiop!@#$%^\u0026kjfghnjm,hgfdCVBNM,liuytREWDFBnm*\u0026^%$dvbnm,liuytresxcvbnmnnbsgxvbsmxmnhsgxbmxmxskjgxyhbxns,.,xljchsagvcxm,lzoayisshaml,a;xiljsyfsbjkmxljhufxjb,cx;xkziufxzmx.,,xbyxgjkmxz,xnyxgsk,mzxhayfskalkslanxanvgdnksmjghdl,mcvdhjndlklmdsbhdwjkmds,xng\" with more than two fifty seven characters",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_need_to_enter_with_null_value_and_with_more_than_two_fifty_seven_characters(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.user_click_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify Error msg",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.verify_Error_msg()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify sucess msg",
  "keyword": "Then "
});
formatter.match({
  "location": "signupdefination.verify_sucess_msg()"
});
formatter.result({
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat StepDefination.signupdefination.verify_sucess_msg(signupdefination.java:354)\r\n\tat ✽.verify sucess msg(file:src/test/java/feature/Signup.feature:86)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify the Add button with invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Bug2"
    }
  ]
});
formatter.step({
  "name": "User click on add button",
  "keyword": "Given "
});
formatter.step({
  "name": "User need to enter \"\u003cCampaign Name\u003e\" and \"\u003cTracking Code\u003e\" with more than two fifty seven characters",
  "keyword": "When "
});
formatter.step({
  "name": "User click on save button",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Campaign Name",
        "",
        "Tracking Code"
      ]
    },
    {
      "cells": [
        "njfvbhpr",
        "",
        "23456789000000987654323456yhnbvcxzaqwertyuiol.,mnbvcxzzzaqwertyuioo0987654321qazxcvbnm,.,poiuy65432qwsxcvbnmkiuyt5432345678jxbystd7wudnsjshvyeiwjdnsvsgdujncjdbchdvchbcushdinvyhkxmxhagduwd244856315mnbf234567asdfghjklzxcvbnmm987654"
      ]
    }
  ]
});
formatter.background({
  "name": "Verify Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is able to enter into the uniform application",
  "keyword": "Given "
});
formatter.match({
  "location": "signupdefination.user_is_able_to_enter_into_the_uniform_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter Usename with \"admin\" and password with \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_enter_Usename_with_and_password_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.user_navigates_to_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on marketing menu",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_click_on_marketing_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on marketing under marketing menu",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.user_click_on_marketing_under_marketing_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User on marketing tracking page",
  "keyword": "Then "
});
formatter.match({
  "location": "signupdefination.user_on_marketing_tracking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the Add button with invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Bug2"
    }
  ]
});
formatter.step({
  "name": "User click on add button",
  "keyword": "Given "
});
formatter.match({
  "location": "signupdefination.user_click_on_add_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User need to enter \"njfvbhpr\" and \"23456789000000987654323456yhnbvcxzaqwertyuiol.,mnbvcxzzzaqwertyuioo0987654321qazxcvbnm,.,poiuy65432qwsxcvbnmkiuyt5432345678jxbystd7wudnsjshvyeiwjdnsvsgdujncjdbchdvchbcushdinvyhkxmxhagduwd244856315mnbf234567asdfghjklzxcvbnmm987654\" with more than two fifty seven characters",
  "keyword": "When "
});
formatter.match({
  "location": "signupdefination.user_need_to_enter_and_with_more_than_two_fifty_seven_characters(String,String)"
});
formatter.result({
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat StepDefination.signupdefination.user_need_to_enter_and_with_more_than_two_fifty_seven_characters(signupdefination.java:754)\r\n\tat ✽.User need to enter \"njfvbhpr\" and \"23456789000000987654323456yhnbvcxzaqwertyuiol.,mnbvcxzzzaqwertyuioo0987654321qazxcvbnm,.,poiuy65432qwsxcvbnmkiuyt5432345678jxbystd7wudnsjshvyeiwjdnsvsgdujncjdbchdvchbcushdinvyhkxmxhagduwd244856315mnbf234567asdfghjklzxcvbnmm987654\" with more than two fifty seven characters(file:src/test/java/feature/Signup.feature:96)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "signupdefination.user_click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});