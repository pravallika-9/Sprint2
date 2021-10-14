package StepDefination;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hooks.hookclass;
import junit.framework.Assert;


public class signupdefination {
	WebDriver driver = hookclass.driver;
	
	@Given("User is able to enter into the uniform application")
	public void user_is_able_to_enter_into_the_uniform_application() {
		try
		{
			Thread.sleep(3000);
	    	String expected="Administration";
	    	String actual = driver.getTitle();
	    	Assert.assertEquals(expected,actual);
	    	System.out.println("User in Uniform login page");
		}
		catch(Exception e)
		{
			System.out.println("User is not in Login page");
			Assert.fail();
		}
	}
	
	@When("User enter Usename with {string} and password with {string}")
	  public void user_enter_Usename_with_and_password_with(String string, String string2) {
		try
	    {
			Thread.sleep(3000);
	    	driver.findElement(By.name("username")).sendKeys(string);
	    	Thread.sleep(3000);
	    	driver.findElement(By.name("password")).sendKeys(string2);
	    	System.out.println("User sucessfully entered username and password");
	    }
		catch(Exception e)
		{
			System.out.println("User not able to enter the username and password"+e);
			Assert.fail();
		}
	  }

	@When("Click on Login button")
	public void click_on_Login_button() {
		try
	    {
	    	Thread.sleep(3000);
	    	driver.findElement(By.xpath("//button[@type='submit']")).click();
	    }
	    catch(Exception e)
	    {
	    	System.out.println("User not able to click on the login button"+e);
	    	Assert.fail();
	    }
	    
	}

	@When("User navigates to Dashboard")
	public void user_navigates_to_Dashboard() {
		try
	    {
	    	Thread.sleep(3000);
	    	String expected="Dashboard";
	    	String actual = driver.getTitle();
	    	Assert.assertEquals(expected,actual);
	    	System.out.println("User successfully navigated to Dashboard");
	    	
	    }
	    catch(Exception e)
	    {
	    	System.out.println("User not in Dashboard"+e);
	    	Assert.fail();
	    }
	    
	}
	
	@When("User click on marketing menu")
	public void user_click_on_marketing_menu() {
		try
		{
			Thread.sleep(3000);
			driver.findElement(By.id("button-menu")).click();
            System.out.println("Menu Bar");
            Thread.sleep(3000);
			driver.findElement(By.xpath("//span[text()='Marketing']")).click();
			System.out.println("Marketing");
		}
		catch(Exception e)
		{
			System.out.println("User is unable to click on marketing"+e);
			Assert.fail();
		}
	    
	}

	@When("User click on marketing under marketing menu")
	public void user_click_on_marketing_under_marketing_menu() {
	    try
	    {
	    	Thread.sleep(3000);
            driver.findElement(By.xpath("//a[text()='Marketing']/..")).click();
            System.out.println("Marketing Tracking");
            }
	    catch(Exception e)
	    {
	    	System.out.println("User not able to click on Marketing"+e);
	    	Assert.fail();
	    }
	}

	@Then("User on marketing tracking page")
	public void user_on_marketing_tracking_page() {
		try
	    {
	    	Thread.sleep(3000);
	    	String expected1="Marketing Tracking";
	    	String actual1 = driver.getTitle();
	    	Assert.assertEquals(expected1,actual1);
	    	System.out.println("User in marketing tracking page");	    	
	    }
	    catch(Exception e)
	    {
	    	System.out.println("User not in Marketing Tracking"+e);
	    	Assert.fail();
	    }	    
	}

	@Given("Admin is on marketing tracking page")
	public void admin_is_on_marketing_tracking_page() {
		try
	    {
	    	Thread.sleep(3000);
	    	String expected1="Marketing Tracking";
	    	String actual1 = driver.getTitle();
	    	Assert.assertEquals(expected1,actual1);
	    	System.out.println("Admin is in Marketing page");	    	
	    }
	    catch(Exception e)
	    {
	    	System.out.println("User not in Marketing Tracking"+e);
	    	Assert.fail();
	    }	    
	}

	@When("User enter {string} field")
	public void user_enter_field(String name) {
		try
		{
			Thread.sleep(3000);
			driver.findElement(By.xpath("//input[@placeholder='Campaign Name']")).sendKeys(name);
			System.out.println("Enter values in the Campaign name to filter");
		}
		catch(Exception e)
		{
			System.out.println("User cannot enter Capgemini Name"+e);
			Assert.fail();
		}
	}
	
	@Then("User click on filter button to see the result of Campaign Name")
	public void user_click_on_filter_button_to_see_the_result_of_Campaign_Name() {
		try
	    {
			Thread.sleep(3000);
	    	driver.findElement(By.xpath("//button[@id='button-filter']")).click();
	    	System.out.println("Filterd results are displayed");
	    }
	    catch(Exception e)
	    {
	    	System.out.println("User not able to click on filter button"+e);
	    	Assert.fail();
	    }
	}

	@When("User enter date in {string} field")
	public void user_enter_date_in_field(String date) {
		try
		{
			Thread.sleep(3000);
			driver.findElement(By.xpath("//input[@placeholder='Date Added']")).sendKeys(date);
			System.out.println("Enter date to filter");
		}
		catch(Exception e)
		{
			System.out.println("User cannot enter date in Date Added field"+e);
			Assert.fail();			
		}
	}

	@Then("User click on Filter button to see the result of Date Added")
	public void user_click_on_Filter_button_to_see_the_result_of_Date_Added() {
		try
	    {
			Thread.sleep(3000);
	    	driver.findElement(By.xpath("//button[@id='button-filter']")).click();
	    	System.out.println("Based on the Date Added results are filtered and displayed");
	    }
	    catch(Exception e)
	    {
	    	System.out.println("User not able to click on filter button"+e);
	    	Assert.fail();
	    }
	}
	
	@When("User enter code in {string} field")
	public void user_enter_code_in_field(String code) {
		try
		{
			Thread.sleep(3000);
			driver.findElement(By.xpath("//input[@placeholder='Tracking Code']")).sendKeys(code);
			System.out.println("Enter code to filter");
		}
		catch(Exception e)
		{
			System.out.println("User cannot enter code in Tracking Code field"+e);
			Assert.fail();
		}
	    
	}

	@Then("User click on Filter button to see the result of Tracking code")
	public void user_click_on_Filter_button_to_see_the_result_of_Tracking_code() {
		try
	    {
			Thread.sleep(3000);
	    	driver.findElement(By.xpath("//button[@id='button-filter']")).click();
	    	System.out.println("Based on the Tracking code results are filtered and displayed");
	    }
	    catch(Exception e)
	    {
	    	System.out.println("User not able to click on filter button"+e);
	    	Assert.fail();
	    }	    
	}
	@When("User enter {string} {string} and {string} field")
	public void user_enter_and_field(String Name, String Date, String Code) {
		try
		{
			Thread.sleep(3000);
			driver.findElement(By.xpath("//input[@placeholder='Campaign Name']")).sendKeys(Name);
			driver.findElement(By.xpath("//input[@placeholder='Date Added']")).sendKeys(Date);
			driver.findElement(By.xpath("//input[@placeholder='Tracking Code']")).sendKeys(Code);
			System.out.println("Enter all the fields to filter");
		}
		catch(Exception e)
		{
			System.out.println("User cannot enter code in Tracking Code field"+e);
			Assert.fail();
		}	    
	}

	@Then("User click on filter button to see the result")
	public void user_click_on_filter_button_to_see_the_result() {
		try
	    {
			Thread.sleep(3000);
	    	driver.findElement(By.xpath("//button[@id='button-filter']")).click();
	    	System.out.println("Based on the data entered results are filtered and displayed");
	    }
	    catch(Exception e)
	    {
	    	System.out.println("User not able to click on filter button"+e);
	    	Assert.fail();
	    }	
	    
	}


@Given("User click on add button")
public void user_click_on_add_button() {
	try
	{
		Thread.sleep(3000);
		driver.findElement(By.xpath("//a[@data-original-title='Add New']")).click();
		System.out.println("Add New data");
	}
	catch(Exception e)
	{
		System.out.println("User not able to click on add button"+e);
		Assert.fail();
	}
}



@When("User need to enter {string}  and {string}")
public void user_need_to_enter_and(String cname, String cdes) {
	try
	{
		Thread.sleep(3000);
		driver.findElement(By.xpath("//input[@id='input-name']")).sendKeys(cname);
		driver.findElement(By.xpath("//textarea[@id='input-description']")).sendKeys(cdes);
		System.out.println("User enter the campaign name and description");
	}
	catch(Exception e)
	{
		System.out.println("User not able to enter name and description"+e);
		Assert.fail();
	}
    
}
@When("User click on save button")
public void user_click_on_save_button() {
	try
	{
		Thread.sleep(3000);
		driver.findElement(By.xpath("//button[@type='submit']")).click();
		System.out.println("click on save button");
	}
	catch(Exception e)
	{
		System.out.println("user not able to click on save button"+e);
		Assert.fail();
	}
    
}

@When("User User navigates to Marketing Tracking page")
public void user_User_navigates_to_Marketing_Tracking_page() {
	try
	{
		String Excepted = "Marketing Tracking";
		String Actual = driver.getTitle();
		Assert.assertEquals(Excepted, Actual);
		System.out.println("User navigated to back");
	}
	catch(Exception e)
	{
		System.out.println("User not navigated to marketing tracking page"+e);
		Assert.fail();
	}
	}


@Then("verify sucess msg")
public void verify_sucess_msg() {
    try
    {
    	Assert.assertTrue(driver.findElement(By.xpath("//div[@class='alert alert-success']")).isDisplayed());
    	System.out.println("Success msg can be seen");
    }
    catch(Exception e)
    {
    	System.out.println("Unable to see alert msg"+e);
    	Assert.fail();
    }
}


@Given("User is in add page")
public void user_is_in_add_page() {
	try
	{
		Thread.sleep(4000);
		driver.findElement(By.xpath("//a[@data-original-title='Add New']")).click();
		System.out.println("user is in add page");
	}
	catch(Exception e)
	{
		System.out.println("User not in add page"+e);
		Assert.fail();
	}    
}

@When("User click on return button")
public void user_click_on_return_button() {
	try
	{
		Thread.sleep(4000);
		driver.findElement(By.xpath("//a[@data-original-title='Cancel']")).click();
		System.out.println("User not interest to add new data");
	}
    catch(Exception e)
	{
    	System.out.println("User not able to click on cancel button"+e);
    	Assert.fail();
	}
}

@Then("User navigates to Marketing Tracking page")
public void user_navigates_to_Marketing_Tracking_page() {
	try
	{
		Thread.sleep(5000);
		driver.findElement(By.xpath("//div[@class='panel-heading']")).isDisplayed();
		System.out.println("User navigated to tracking");
	}
	catch(Exception e)
	{
		System.out.println("User not returned to main page"+e);
		Assert.fail();
	}
}

@Given("User click on check box to delete the row")
public void user_click_on_check_box_to_delete_the_row() {
	try
	{
		Thread.sleep(5000);
		driver.findElement(By.xpath("//input[@value='5']")).click();
		System.out.println("User clicked on check box to delete");
	}
	catch(Exception e)
	{
		System.out.println("User not able to click on check box"+e);
		Assert.fail();
	}
}

@When("User click on delete button")
public void user_click_on_delete_button() {
	try
	{
		Thread.sleep(3000);
		driver.findElement(By.xpath("//button[@data-original-title='Delete']")).click();
		System.out.println("User click on delete button");
	}
	catch(Exception e)
	{
		System.out.println("User unable to click on delete button"+e);
		Assert.fail();
	}
	
}

@When("User can see the alert msg for delete")
public void user_can_see_the_alert_msg_for_delete() {
	try
	{
		Thread.sleep(3000);
		Alert alert = driver.switchTo().alert();
		String alertMessage = driver.switchTo().alert().getText();
		System.out.println(alertMessage);
	}
	catch(Exception e)
	{
		System.out.println("User cannot see alert message"+e);
		Assert.fail();
	}
	
}

@When("User click on ok in alert msg to delete the row")
public void user_click_on_ok_in_alert_msg_to_delete_the_row() {
	try
	{
		Thread.sleep(3000);
		driver.switchTo().alert().accept();
		System.out.println("User click on ok to delete");
	}
	catch(Exception e)
	{
		System.out.println("User unable to click on delete button"+e);
		Assert.fail();
	}
}

@Then("Selected row deleted Successfully")
public void selected_row_deleted_Successfully() {
	try
	{
		Thread.sleep(5000);
		driver.findElement(By.xpath("//div[@class='alert alert-success']")).isDisplayed();
		System.out.println("Selected rows deleted successfully");
	}
	catch(Exception e)
	{
		System.out.println("User not returned to main page"+e);
		Assert.fail();
	}
}

@Given("User click on Edit")
public void user_click_on_Edit() {
    try
    {
    	Thread.sleep(3000);
    	driver.findElement(By.xpath("//a[@data-original-title='Edit']")).click();
    	System.out.println("Edit");
    }
    catch(Exception e)
    {
    	System.out.println("User not able to click on edit option"+e);
    	Assert.fail();
    }
}

@When("User navigates to edit page")
public void user_navigates_to_edit_page() {
	try
	{
		Thread.sleep(5000);
		driver.findElement(By.xpath("//div[@class='panel-heading']")).isDisplayed();
		System.out.println("User is in Edit page");
	}
	catch(Exception e)
	{
		System.out.println("User is not in edit page"+e);
		Assert.fail();
	}
}

@When("User modify the {string}")
public void user_modify_the_and(String capname) {
	try
	{
		Thread.sleep(3000);
		driver.findElement(By.xpath("//input[@placeholder='Campaign Name']")).clear();
		driver.findElement(By.xpath("//input[@placeholder='Campaign Name']")).sendKeys(capname);
		System.out.println("Campaign name modified successfully");
	}
	catch(Exception e)
	{
		System.out.println("Unable to modify the data");
		Assert.fail();
	}    
}

@When("USer click on save option")
public void user_click_on_save_option() {
	try
	{
		Thread.sleep(3000);
		driver.findElement(By.xpath("//button[@type='submit']")).click();
		System.out.println("click on save button");
	}
	catch(Exception e)
	{
		System.out.println("user not able to click on save button"+e);
		Assert.fail();
	}    
}

@Then("User naviagates to Tracking page")
public void user_naviagates_to_Tracking_page() {
	try
	{
		Thread.sleep(3000);
		String Excepted = "Marketing Tracking";
		String Actual = driver.getTitle();
		Assert.assertEquals(Excepted, Actual);
		System.out.println("User navigated to back");
	}
	catch(Exception e)
	{
		System.out.println("User not navigated to marketing tracking page"+e);
		Assert.fail();
	}    
}


@When("User click on Campaign Name in result section")
public void user_click_on_Campaign_Name_in_result_section() {
    try
    {
    	Thread.sleep(3000);
    	driver.findElement(By.xpath("//a[contains(text(),'Campaign Name')]")).click();
    	System.out.println("Campaign Name in result");
    }
    catch(Exception e)
    {
    	System.out.println("unable to click on campaign name in result section"+e);
		Assert.fail();
    }
}

@When("User can see the result in desc order based on Campaign Name")
public void user_can_see_the_result_in_desc_order_based_on_Campaign_Name() {
    try
    {
    	String s1=driver.findElement(By.xpath("//table//following::tr[2]/td[2]")).getText();	
    	String s2=driver.findElement(By.xpath("//table//following::tr[3]/td[2]")).getText();
    	Assert.assertTrue(s1.compareTo(s2)>0 || s1.compareTo(s2)==0);
    }
    catch(Exception e)
    {
    	System.out.println("Not able to show result in sorting order"+e);
    	Assert.fail();
    }
}

@When("User click on Code in result section")
public void user_click_on_Code_in_result_secetion() {
	try
    {
    	Thread.sleep(3000);
    	driver.findElement(By.xpath("//a[contains(text(),'Code')]")).click();
    	System.out.println("Code in result");
    }
    catch(Exception e)
    {
    	System.out.println("unable to click on code in result section"+e);
		Assert.fail();
    }
}

@When("User can see the Code in sorted order")
public void user_can_see_the_Code_in_sorted_order() {
	try
    {
		String s1=driver.findElement(By.xpath("//table//following::tr[2]/td[3]")).getText();	
		String s2=driver.findElement(By.xpath("//table//following::tr[3]/td[3]")).getText();
		Assert.assertTrue(s1.compareTo(s2)<0 || s1.compareTo(s2)==0);
    }
	catch(Exception e)
    {
    	System.out.println("Sorted Code not able to show result"+e);
		Assert.fail();
    }
}

@When("User click on Date Added in result section")
public void user_click_on_Date_Added_in_result_secetion() {
	try
    {
    	Thread.sleep(3000);
    	driver.findElement(By.xpath("//a[contains(text(),'Date Added')]")).click();
    	System.out.println("Date Added is sorted");
    }
    catch(Exception e)
    {
    	System.out.println("Date Added is not clicked"+e);
		Assert.fail();
    }    
}

@Then("User can see the Date Added in sorted order")
public void user_can_see_the_Date_Added_in_sorted_order() {
	try
    {
		String s1=driver.findElement(By.xpath("//table//following::tr[2]/td[6]")).getText();	
		String s2=driver.findElement(By.xpath("//table//following::tr[3]/td[6]")).getText();
		Assert.assertTrue(s1.compareTo(s2)==0);
    }
	catch(Exception e)
    {
    	System.out.println("Date Added is not sorted"+e);
		Assert.fail();
    }
}

@Given("User find the pagination")
public void user_find_the_pagination() {
    try
    {
    	Thread.sleep(3000);
    	driver.findElement(By.xpath("//ul[@class = 'pagination']")).isDisplayed();
    	System.out.println("Pagination is found");
    }
    catch(Exception e)
    {
    	System.out.println("USer not found pagination"+e);
    	Assert.fail();
    }
}

@When("user click on symbol")
public void user_click_on_symbol() {
    try
    {
    	Thread.sleep(3000);
    	driver.findElement(By.xpath("//a[contains(text(),'>|')]")).click();
    	System.out.println("navigated to other result page");
    }
    catch(Exception e)
    {
    	System.out.println("Unable to click on symbol"+e);
    	Assert.fail();
    }
}

@Then("user click on Symbol")
public void user_click_on_Symbol() {
	try
    {
    	Thread.sleep(3000);
    	driver.findElement(By.xpath("//a[contains(text(),'|<')]")).click();
    	System.out.println("navigated to other result page");
    }
    catch(Exception e)
    {
    	System.out.println("Unable to click on symbol"+e);
    	Assert.fail();
    }
}


  @Then("user navigated to previous page") 
  public void user_navigated_to_previous_page() { 
	  try
	    {
	    	Thread.sleep(3000);
	    	String expected1="Marketing Tracking";
	    	String actual1 = driver.getTitle();
	    	Assert.assertEquals(expected1,actual1);
	    	System.out.println("User navigated to previous page");	    	
	    }
	    catch(Exception e)
	    {
	    	System.out.println("User not navigated to previous page"+e);
	    	Assert.fail();
	    }	
  }
 
  @When("User need to enter {string} with null value and {string} with more than two fifty seven characters")
  public void user_need_to_enter_with_null_value_and_with_more_than_two_fifty_seven_characters(String string, String string2) {
      try
      {
    	  Thread.sleep(3000);
    	  driver.findElement(By.xpath("//input[@id='input-name']")).sendKeys(string);
  		  driver.findElement(By.xpath("//textarea[@id='input-description']")).sendKeys(string2);
  		  System.out.println("User enter the campaign name and description");
  		  
      }
      catch(Exception e)
      {
    	  System.out.println("unadble to enter name and description"+e);
      }
  }
  
  @When("verify Error msg")
  public void verify_Error_msg() {
	  try {
		  Thread.sleep(3000);
		  String actu=driver.findElement(By.xpath("//*[@class='text-danger']")).getText();
		  String exp="Campaign must be between 1 and 32 characters!";
		  Assert.assertEquals(actu, exp);
		  System.out.println("Error message displayed"); 
		  }
	  catch(Exception e) 
	  {
		  System.out.println("Error message not displayed" +e);
		  }
	  }


  @When("User need to enter {string} and {string} with more than two fifty seven characters")
  public void user_need_to_enter_and_with_more_than_two_fifty_seven_characters(String string, String string2) {
	  try
      {
    	  Thread.sleep(3000);
    	  driver.findElement(By.xpath("//input[@placeholder='Campaign Name']")).sendKeys(string);
  		  driver.findElement(By.xpath("//input[@placeholder='Tracking Code']")).sendKeys(string2);
  		  System.out.println("User enter the campaign name and Tracking code");
  		  Assert.fail();
  		  
      }
      catch(Exception e)
      {
    	  System.out.println("unadble to enter name and code"+e);
      }
  }
}
