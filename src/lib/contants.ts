import type { EmployeeType } from "@/components/providers";

export type DepartmentType = {
	value: string;
	label: string;
};

export const DEFAULT_EMPLOYEE: EmployeeType = {
	firstName: "",
	lastName: "",
	dateOfBirth: new Date().toISOString(),
	startDate: new Date().toISOString(),
	street: "",
	city: "",
	state: "Alabama",
	zip: 0,
	jobDepartment: "Sales",
};

export const DEPARTMENTS_OPTIONS: DepartmentType[] = [
	{
		value: "Sales",
		label: "Sales",
	},
	{
		value: "Marketing",
		label: "Marketing",
	},
	{
		value: "Engineering",
		label: "Engineering",
	},
	{
		value: "Human Resources",
		label: "Human Resources",
	},
	{
		value: "Legal",
		label: "Legal",
	},
];

export const STATE_OPTIONS = [
	{
		value: "Alabama",
		label: "AL",
	},
	{
		value: "Alaska",
		label: "AK",
	},
	{
		value: "American Samoa",
	},
	{
		value: "Arizona",
		label: "AZ",
	},
	{
		value: "Arkansas",
		label: "AR",
	},
	{
		value: "California",
		label: "CA",
	},
	{
		value: "Colorado",
		label: "CO",
	},
	{
		value: "Connecticut",
		label: "CT",
	},
	{
		value: "Delaware",
		label: "DE",
	},
	{
		value: "District Of Columbia",
		label: "DC",
	},
	{
		value: "Federated States Of Micronesia",
		label: "FM",
	},
	{
		value: "Florida",
		label: "FL",
	},
	{
		value: "Georgia",
		label: "GA",
	},
	{
		value: "Guam",
		label: "GU",
	},
	{
		value: "Hawaii",
		label: "HI",
	},
	{
		value: "Idaho",
		label: "ID",
	},
	{
		value: "Illinois",
		label: "IL",
	},
	{
		value: "Indiana",
		label: "IN",
	},
	{
		value: "Iowa",
		label: "IA",
	},
	{
		value: "Kansas",
		label: "KS",
	},
	{
		value: "Kentucky",
		label: "KY",
	},
	{
		value: "Louisiana",
		label: "LA",
	},
	{
		value: "Maine",
		label: "ME",
	},
	{
		value: "Marshall Islands",
		label: "MH",
	},
	{
		value: "Maryland",
		label: "MD",
	},
	{
		value: "Massachusetts",
		label: "MA",
	},
	{
		value: "Michigan",
		label: "MI",
	},
	{
		value: "Minnesota",
		label: "MN",
	},
	{
		value: "Mississippi",
		label: "MS",
	},
	{
		value: "Missouri",
		label: "MO",
	},
	{
		value: "Montana",
		label: "MT",
	},
	{
		value: "Nebraska",
		label: "NE",
	},
	{
		value: "Nevada",
		label: "NV",
	},
	{
		value: "New Hampshire",
		label: "NH",
	},
	{
		value: "New Jersey",
		label: "NJ",
	},
	{
		value: "New Mexico",
		label: "NM",
	},
	{
		value: "New York",
		label: "NY",
	},
	{
		value: "North Carolina",
		label: "NC",
	},
	{
		value: "North Dakota",
		label: "ND",
	},
	{
		value: "Northern Mariana Islands",
		label: "MP",
	},
	{
		value: "Ohio",
		label: "OH",
	},
	{
		value: "Oklahoma",
		label: "OK",
	},
	{
		value: "Oregon",
		label: "OR",
	},
	{
		value: "Palau",
		label: "PW",
	},
	{
		value: "Pennsylvania",
		label: "PA",
	},
	{
		value: "Puerto Rico",
		label: "PR",
	},
	{
		value: "Rhode Island",
		label: "RI",
	},
	{
		value: "South Carolina",
		label: "SC",
	},
	{
		value: "South Dakota",
		label: "SD",
	},
	{
		value: "Tennessee",
		label: "TN",
	},
	{
		value: "Texas",
		label: "TX",
	},
	{
		value: "Utah",
		label: "UT",
	},
	{
		value: "Vermont",
		label: "VT",
	},
	{
		value: "Virgin Islands",
		label: "VI",
	},
	{
		value: "Virginia",
		label: "VA",
	},
	{
		value: "Washington",
		label: "WA",
	},
	{
		value: "West Virginia",
		label: "WV",
	},
	{
		value: "Wisconsin",
		label: "WI",
	},
	{
		value: "Wyoming",
		label: "WY",
	},
];
