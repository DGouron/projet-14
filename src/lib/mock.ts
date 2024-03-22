import {
	DEFAULT_EMPLOYEE,
	DEPARTMENTS_OPTIONS,
	STATE_OPTIONS,
} from "./contants";

function randomDateOfBirth() {
	const today = new Date();
	const minAge = 18;
	const maxAge = 65;
	const randomAge = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
	const birthDate = new Date(
		today.getFullYear() - randomAge,
		today.getMonth(),
		today.getDate(),
	);
	return birthDate.toISOString();
}

function randomStartDate() {
	const today = new Date();
	const minYearsAgo = 1;
	const maxYearsAgo = 5;
	const randomYearsAgo =
		Math.floor(Math.random() * (maxYearsAgo - minYearsAgo + 1)) + minYearsAgo;
	const startDate = new Date(
		today.getFullYear() - randomYearsAgo,
		today.getMonth(),
		today.getDate(),
	);
	return startDate.toISOString();
}

function generateRandomFirstName() {
	const firstNames = [
		"John",
		"Jane",
		"David",
		"Emily",
		"Michael",
		"Emma",
		"Christopher",
		"Olivia",
		"James",
		"Sophia",
		"Daniel",
		"Isabella",
		"Harry",
		"Ava",
		"Tom",
		"Hermione",
		"Ron",
		"Damien",
		"George",
		"Fred",
	];
	return firstNames[Math.floor(Math.random() * firstNames.length)];
}

function generateRandomLastName() {
	const lastNames = [
		"Smith",
		"Johnson",
		"Williams",
		"Jones",
		"Brown",
		"Davis",
		"Miller",
		"Wilson",
		"Moore",
		"Taylor",
		"Anderson",
		"Thomas",
		"Jackson",
		"Gouron",
		"Dupont",
		"Potter",
		"Granger",
		"Weasley",
	];
	return lastNames[Math.floor(Math.random() * lastNames.length)];
}

function generateRandomStreet() {
	const streets = [
		"123 Main St",
		"456 Elm St",
		"789 Oak St",
		"321 Pine St",
		"654 Maple St",
		"20 rue des acacias",
		"12 rue des lilas",
		"8 rue des roses",
		"4 rue des tulipes",
	];
	return streets[Math.floor(Math.random() * streets.length)];
}

function generateRandomCity() {
	const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
	return cities[Math.floor(Math.random() * cities.length)];
}

function generateRandomZip() {
	return Math.floor(Math.random() * 90000) + 10000;
}

/**
 *
 * @returns an employee object with random values
 */
export function generateRandomEmployee() {
	const randomIndex = Math.floor(Math.random() * DEPARTMENTS_OPTIONS.length);
	const randomDepartment = DEPARTMENTS_OPTIONS[randomIndex].value;
	const randomStateIndex = Math.floor(Math.random() * STATE_OPTIONS.length);
	const randomState = STATE_OPTIONS[randomStateIndex].value;

	return {
		...DEFAULT_EMPLOYEE,
		firstName: generateRandomFirstName(),
		lastName: generateRandomLastName(),
		dateOfBirth: randomDateOfBirth(),
		startDate: randomStartDate(),
		street: generateRandomStreet(),
		city: generateRandomCity(),
		zip: generateRandomZip(),
		state: randomState,
		jobDepartment: randomDepartment,
	};
}
