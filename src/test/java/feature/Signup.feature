Feature: Uniform feature

  Background: Verify Login Functionality
    Given User is able to enter into the uniform application
    When User enter Usename with "admin" and password with "admin@123"
    And Click on Login button
    And User navigates to Dashboard
    When User click on marketing menu
    And User click on marketing under marketing menu
    Then User on marketing tracking page

  @Filter
  Scenario Outline: Verify Filter button by entering all the field on marketing tracking
    Given Admin is on marketing tracking page
    When User enter "<Campaign Name>" "<Date Added>" and "<Tracking Code>" field
    Then User click on filter button to see the result

    Examples: 
      | Campaign Name |  | Date Added |  | Tracking Code                                                    |
      | PRAVALLIKA    |  | 2021-09-08 |  | 613835a2c33e9                                                    |
      |               |  | 2021-09-02 |  |                                                                  |
      | asdfgmnb      |  |            |  |                                                                  |
      |               |  |            |  | 6131f8d0a6b8esdfghujio9876543wsdfvbmnbvcxzsrtyuiop9876543333erfg |

  @AddButton
  Scenario Outline: Admin Verify Add button
    Given User click on add button
    And User need to enter "<Campaign Name>"  and "<Campaign Description>"
    And User click on save button
    And User User navigates to Marketing Tracking page
    Then verify sucess msg

    Examples: 
      | Campaign Name |  | Campaign Description |
      | mngfdfg       |  |                      |

  @CancelButton
  Scenario: Admin Verify return button
    Given User is in add page
    When User click on return button
    Then User navigates to Marketing Tracking page

  @DeleteButton
  Scenario: Verify Delete button
    Given User click on check box to delete the row
    When User click on delete button
    When User can see the alert msg for delete
    And User click on ok in alert msg to delete the row
    Then Selected row deleted Successfully

  @EditButton
  Scenario Outline: Verify Edit option
    Given User click on Edit
    When User navigates to edit page
    When User modify the "<Campaign Name>"
    And USer click on save option
    Then User naviagates to Tracking page

    Examples: 
      | Campaign Name |
      | mnhfgfg       |

  @Sorting
  Scenario: Verify sorting
    Given Admin is on marketing tracking page
    When User click on Campaign Name in result section
    And User can see the result in desc order based on Campaign Name
    When User click on Code in result section
    And User can see the Code in sorted order
    When User click on Date Added in result section
    Then User can see the Date Added in sorted order

  @pagination
  Scenario: Verify Pagination
    Given User find the pagination
    When user click on symbol
    And user click on Symbol
    Then user navigated to previous page

  @Bug1
  Scenario Outline: Verify the Add button with invalid data
    Given User click on add button
    When User need to enter "<Campaign Name>" with null value and "<Campaign Description>" with more than two fifty seven characters
    And User click on save button
    And verify Error msg
    Then verify sucess msg

    Examples: 
      | Campaign Name |  | Campaign Description                                                                                                                                                                                                                                                                             |
      |               |  | mnbvcxdsdfghjkl/mnbvcsdfgolkjhgfdsqwertyuiop!@#$%^&kjfghnjm,hgfdCVBNM,liuytREWDFBnm*&^%$dvbnm,liuytresxcvbnmnnbsgxvbsmxmnhsgxbmxmxskjgxyhbxns,.,xljchsagvcxm,lzoayisshaml,a;xiljsyfsbjkmxljhufxjb,cx;xkziufxzmx.,,xbyxgjkmxz,xnyxgsk,mzxhayfskalkslanxanvgdnksmjghdl,mcvdhjndlklmdsbhdwjkmds,xng |


  @Bug2
  Scenario Outline: Verify the Add button with invalid data
    Given User click on add button
    When User need to enter "<Campaign Name>" and "<Tracking Code>" with more than two fifty seven characters
    And User click on save button

    Examples: 
      | Campaign Name |  | Tracking Code                                                                                                                                                                                                                         |
      | njfvbhpr      |  | 23456789000000987654323456yhnbvcxzaqwertyuiol.,mnbvcxzzzaqwertyuioo0987654321qazxcvbnm,.,poiuy65432qwsxcvbnmkiuyt5432345678jxbystd7wudnsjshvyeiwjdnsvsgdujncjdbchdvchbcushdinvyhkxmxhagduwd244856315mnbf234567asdfghjklzxcvbnmm987654 |
