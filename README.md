# JS Unit Testing Functions

This project is written in [Node](https://nodejs.org/en/), and tested with [Jest - the delightful JavaScript Testing Framework](https://jestjs.io/).

---

## The assignment

When npm runs jest, all the tests are failing as seen at the end of its output to the console.

Fixing the code will make the tests pass and show in green in the console.

<div style="padding-top: 3rem;"></div>

# Instructions

## Install your dependencies

`npm install`

---

## Run tests on a single file

`npm test -- functions-01.test.js`

NOTE: The -- tells npm to pass along whatever following arguments there are to the program it is running.

The above npm command is equivalent to:

`npx jest --coverage --verbose functions-01.test.js `

Since we have a number of files that need individual editing, we want to run individual testing sequentially on each one of them as well.

---

By default, jest looks for files that end in .test.js and will search folders to find those files. Your JavaScript files are in a folder call tests.

So the above example tests the first file `tests/functions-01.test.js` and outputs the results to the console.

If a test fails, jest will identify it as failing and print one or more error messages, depending on the test expectations.

---

## Edit and test each file sequentially

One-by-one, edit each JavaScript file and follow the instructions for each function listed. When one file completely passes its tests, you are ready for the next file.

Start with functions-01.test.js

---

## Git is configured not to allow a commit if it sees any errors

Eslint needs to be properly running in this repo as it is configured to not allow you to commit with coding errors.

Be careful of any squigglies and get them properly fixed (do not add any eslint disable comments)

---

## GitHub Actions are configured to run the tests when you push

The .github folder is configured to run GitHub actions when there is a push. You will see results of this in the Actions tab in your GitHub repo.

---

## Continue writing and fixing code until all tests pass

When you see the individual files are completed, and the tests are passing, the following command will run Jest on all the files in the repo that end in test.js

`npm test`

You should output that includes a table at the end looking like this:

<img width="683" alt="test-coverage-100%" src="https://user-images.githubusercontent.com/13385801/134093507-474fffdf-d6ea-4d13-aaa6-f4a8d5efa534.png">

---

## Coverage

The Live Server extension is configured (in .vscode/settings.json) to open the the coverage/lcov-report/index.html file in your default browser when you select "Go Live", which should be at the bottom of VS Code if the extension is installed.

Jest uses [Istanbul](https://istanbul.js.org/) to track how well the unit tests test the code. The output from Istanbul looks like this:

![127 0 0 1_5500_](https://user-images.githubusercontent.com/13385801/134093898-82d5d96b-5416-4225-be7c-7c0fca5c8f9d.png)

And a code file output looks like:

![127 0 0 1_5500_functions-01 js html](https://user-images.githubusercontent.com/13385801/134094889-628d1f0e-8229-4455-9ae6-315a12f2a85e.png)

If certain pieces of code are not touched by the unit tests, the Istanbul output will flag the code as not covered.

<img width="455" alt="2021-09-20_20-37-53" src="https://user-images.githubusercontent.com/13385801/134095415-2fea0797-6388-412c-94b6-fafdbc335135.png">

The question then becomes: Is the code logic wrong or is the suite of tests not inclusive enough?

In the above silly example, the code logic is wrong. There is probably no need for that if statement. If there is a need, then a test should be written for it.

---

## Commit and push after all tests pass

---

> "Unit testing ensures that all code meets quality standards before it's deployed."
> [The importance of unit testing](https://fortegrp.com/the-importance-of-unit-testing/)

[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)
