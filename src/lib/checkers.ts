import { EmployeeType } from "@/components/providers";

export function checkFormValidity(employeeToCreate: EmployeeType | null) {
	if (employeeToCreate === null) return false;
	const { firstName, lastName, street, city, state, zip, jobDepartment } =
		employeeToCreate;
	if (
		firstName.length === 0 ||
		lastName === "" ||
		street === "" ||
		city === "" ||
		state === "" ||
		zip === 0 ||
		jobDepartment === ""
	)
		return false;
	return true;
}
