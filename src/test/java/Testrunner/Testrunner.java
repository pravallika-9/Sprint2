package Testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/java/feature"
		,glue= {"StepDefination","hooks"},
		//tags= {"@DeleteButton"},
		
dryRun=false,
monochrome=true,
plugin = {"pretty","html:target/cucumber-pretty","junit:target/report.xml","json:target/jsonreport.json"}
		)
public class Testrunner {

}
