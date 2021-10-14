package hooks;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class hookclass {
	public static WebDriver driver;
	@Before
	public void initialization()
	{
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Personal\\Documents\\CapgeminiJSWorkspace\\Capgemini_day1\\driver\\chromedriver.exe");
		driver = new ChromeDriver();
	    driver.get("http://uniformm1.upskills.in/admin");
	    driver.manage().window().maximize();
	}
	@After
	public void closedriver()
	{
		System.out.println("Browser is closing now");
		driver.quit();
	}

}
