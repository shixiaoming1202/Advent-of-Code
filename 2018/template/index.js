// http://adventofcode.com/{{year}}/day/{{day}}
"use strict"

// Libraries.

const assert = require("assert");

// Dependencies.

const getInput = require("../helpers/getInput");
const logger = require("../helpers/logger");
const testCases = require("../helpers/testCases");

// Private.

const fileInput = getInput(__dirname);

// Solution #1
const solution1 = (input) => {
	// Enter code to solve for part #1 here.
};

// Solution #2
const solution2 = (input, answer1) => {
	// Enter code to solve for part #2 here.
};

// Public

// Define the tests that need to pass before running.
const tests = [
	() => { assert.equal(true, true) },
	testCases.create(solution1, "input", "output")
];

// Run the functions.
const run = (input = fileInput) => {
	const answer1 = solution1(input);
	const answer2 = solution2(input, answer1);

	// Display results.
	logger.displayResults(answer1, answer2);
};

module.exports = {
	tests,
	run
};