JS Unit Testing (90 mins)
Objectives
Have a very basic understanding of node and why we need it
Understand how to craft suitable assertions for unit tests
Use Jest to write and run unit tests in Node
Understand how to implement a TDD approach to development
Setting up for testing (25 mins)
Node (5 mins)

 🗣️ Tell students that we are going to be using Node for the first time today
 🗣️ Tell students that we will be running JavaScript outside of our browsers today so we'll need an alternative 'engine'
 🗣️ Tell students that we will use Node as our JavaScript 'engine'
 ❗ Advise students that we will be learning much more about JavaScript engines and how JS works next week so not to worry too much about this for now
 💻 Show students how to check their Node version node --version or node -v
 ❔ Ask students if anyone has not yet got Node installed locally
 If anyone has not, make sure they are paired with someone who has in the exercises
Using external libraries in Node (10 mins)

 🗣️ Tell students that whilst Node can do quite a bit by itself, we will need to use an additional library today
 🗣️ Tell students that we can install additional libs as packages using the Node Package Manager, npm
 🗣️ Tell students that there are over 1 million packages in the npm registry!
 ❗ Advise students that anyone can make an npm package and publish it!
 💻 Show students how to check their npm version npm --version or npm -v
 🗣️ Tell students that we will start a package today and our package will depend on another package, jest, for testing
 💻 Create a project folder, git init and show students how to initialise a new npm package with npm init / npm init -y
 💻 Point out the new package.json and explain that JSON does look and behave a lot like a JS object
 ❗ Advise students that in JSON, keys are always defined as strings
 💻 Show students how to install a dependency with npm install <package>
 💻 Show students the -D / --save-dev flag and explain that this will install it as a dev dependency ie. we only need it during development
 ❔ Ask students if they think that our test runner package will be a regular or a dev dependency (dev)
 💻 Show students the npm registry Jest page and the official Jest docs
 ❗ Point out the yarn option given in the Jest guide and explain that it is an alternative package manager
 💻 Install jest with npm install --save-dev jest
 💻 Show students the new node_modules folder and explain that this contains all the code required by our installed dependencies
 💻 Tell students we really don't want to push all that to GitHub
 💻 Run git status and see that the entire node_modules folder is there
 ❔ Ask students if they remember the name of the file we use to tell git to ignore certain files and folders (.gitignore)
 💻 Create a .gitignore and add node_modules to it. Run git status and see how it is no longer noticed by git.
Using scripts in Node (5 mins)

 🗣️ Tell students that we will use a script to run jest
 💻 Show students the scripts key in package.json and show them the existing test script
 💻 Show students that they can execute this script by running npm test - compare the output to the script
 💻 Update the script to "echo \"Hey there!\"" And show students the result
 🗣️ Tell students that we are going to use this script to run jest and the command is simply... jest!
Jest setup (5 mins)

 💻 Update the test script to "jest" and run it
 💻 Look at the error, pointing No tests found and explain what it is looking for
 ❗ Advise students that different test runners will look for slightly different things when searching for test suites so check the documentation
 💻 Tell students that we will work on some calculator functions today so create a calculatorHelpers.test.js file and re-run npm test
 ❔ Look at the error and ask students what this error is telling us
 🗣️ Tell students that we are ready to start writing some tests!
 ❗ Advise students that we can get a lot more complex in our setup but we have done enough to get started
Writing Tests (60 mins)
Anatomy of a Jest test suite (10 mins)

 🗣️ Tell students that a test suite needs to know two things: what it is testing and how to test it
 💻 Show students Jest's describe method and explain that we can use describe to group together related tests eg. about a set of related functions
 🗣️ Explain briefly that we are using the word method here because it is a function that is called on an object - in this case the Jest object
 ❗ Advise students that we will go deeper into functions, methods and objects next week so don't panic about it for now!
 🗣️ Tell students that the describe method takes two arguments
 ❔ Ask students where you can pass your arguments
 💻 Show students that the first argument is a string describing what we are testing - add 'calculator functions' as the first argument
 🗣️ Tell students that the second argument will give instructions on how we will test
 💻 Add an empty arrow function as the second argument and ask students what data type it is
 🗣️ Explain that we are passing an anonymous (unnamed) function to describe which Jest will invoke when it is ready
 🗣️ Tell students that this is called a callback function and we will go more into these next week
 💻 Add a test to the suite and explain that test also takes two arguments, also a string and a calllback function
 🗣️ Explain that while describe groups together related tests, test should define just one test
 🗣️ Tell students that we can nest describe blocks if we want to compartmentalise even further and/or we can make multiple test suites to organise our tests
Anatomy of a Jest test (5 mins)

 💻 Add a test that asserts expect(2 + 5).toEqual(6)
 ❔ Ask students what they think this code means and if they think the test will pass or fail
 💻 Run tests and walk through the failed test output, emphasising Expected vs Received
 ❔ Ask students how we can get this test to pass and update the code accordingly
 💻 Run tests and walk through the passing test output
 🗣️ Tell students that we are aiming to write two functions today and we will use a TDD approach
 🗣️ Tell students that TDD takes a bit of imagination and we may need to reference some things that don't yet exist!
Writing a useful test (5 mins)

 💻 Add a describe block for 'multiplyBy3' with a test for "it should exist" and assertion of expect(multiplyBy3).toBeDefined()
 ❔ Ask students what they think this will test for and what will happen when we run our test suite
 💻 Run tests and point out that multiplyBy3, unsurpisingly, is not defined
 🗣️ Tell students that we could go ahead and make this test pass right now but we will write one more for our as-yet imaginary multiplyBy3
 💻 Write a test for 'takes an argument and returns the value multiplied by 3 with assertion expect(multiplyBy3(5)).toEqual(15);
 ❔ Ask students what they think this will test for and what will happen when we run our test suite
 💻 Run tests and point out that multiplyBy3, unsurpisingly, is still not defined
Over to them (10 mins)

 🗣️ Tell students that we also want to test a addThese function
 ❔ Ask students what they think would be useful tests for a function that is supposed to take in two numbers and return the sum
 💻 Add comments with their suggestions, guiding towards things like: exists, is a function, takes 2 arguments and returns the sum, returns a number
 ❔ Have students navigate you through writing these tests, guiding them to Jest docs where appropriate
 💻 Run the suite and show all the failing tests
 ❗ Explain that failing tests are not bad! They give us useful information to help us get them passing!
Writing your code (15 mins)

 🗣️ Point out that we are not going to be writing our app code inside our test suites, we will need to gain access to it somehow
 💻 Add a require at the top of your test file of const calcHelpers = require('../calcHelpers')
 ❔ Ask students what they think this line will do (look for a file in the folder above called 'calcHelpers.js' and import anything it is exporting)
 💻 Run tests and note that this time the error is a bit different, it says that the test suite failed to run at all
 ❔ Ask students why they think this is and how we can resolve it
 💻 Create the file and re-run the tests noting that the suite now runs
 ❗ Advise students that we don't have to make the test pass immidiately, just changing the error is a great start
 ❔ Ask students what they think the minimum amount of code would be to change the first error
 🗣️ Tell students that manually re-running the test suite is getting a bit laborious!
 💻 Add the --watch flag to your test script and explain that this will make the tests re-run automatically when they detect a change in any of the related files
 💻 Add the function definition for a multiplyBy3 in calcHelpers and re-run tests
 🗣️ Note that the error has not changed and ask if anyone knows why
 🗣️ Explain that we are importing but have not exported anything!
 💻 Add module.exports = { multiplyBy3: multiplyBy3 } to calcHelpers and ask what data type we have exported (Object) (judge the room as to whether you mention/use destructuring here)
 💻 Save the file, point out the automatic new test run and that the error has still not changed!
 ❔ Explain that we have imported the object which does have a key of multiplyBy3 but have not told our test suite that yet
 💻 Update our first assertion to use calcHelpers.multiplyBy3 and note the passing test
 💻 Point out that it might get a bit repetitive to keep adding that so at the top of the describe block for multiplyBy3, add let multiplyBy3 = calcHelpers.multiplyBy3 and update the first assertion back to to just multiplyBy3
 ❔ Ask students what we have done there (stored it in a variable)
 ❔ Have students navigate you through getting the second multiplyBy3 test to pass by using the errors
Over to them (15 mins)

 Have students navigate you through writing code to make the addThese tests pass
Test Coverage (5 mins)
❓ What part of testing that we mentioned earlier have we not done yet?
A: Coverage

 🗣️ Remind students that Jest has a built in coverage reporter
 💻 Add a new script to the package.json of "coverage": "jest --coverage"
 🗣️ Tell students that coverage is not a standard npm script so we can't just use npm coverage but rather npm run coverage
 💻 Run the coverage script and note that your coverage is 100%!
 🗣️ Walk briefly through each column explaining what it is looking for
 💻 Note the new coverage folder that has been generated and let students know that we don't want to track that with git
 ❔ Ask students how we can make git ignore that folder (add to .gitignore)
 💻 Add a new function to calcHelpers.js and re-run the coverage script, noting the difference
 💻 Add an if statement to one of the function, re-run the coverage script, noting the difference
 ❗ Advise students that aiming for 100% coverage is usually overkill and can result in tests for the sake of tests
 🗣️ Tell students that aiming for around 80% is a fair goal for most situations!
