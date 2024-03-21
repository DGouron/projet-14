import { STATE_OPTIONS } from "./contants";

/**
 *
 * @param date
 * @returns a string with the date in the format dd/mm/yyyy
 */
export const formatDate = (date: string): string => {
	if (typeof date !== "string" || !date) return "";

	const day = new Date(date).getDate();
	const month = new Date(date).getMonth() + 1;
	const year = new Date(date).getFullYear();

	return `${day.toString().length === 1 ? `0${day}` : day}/${
		month.toString().length === 1 ? `0${month}` : month
	}/${year}`;
};

/**
 *
 * @param state
 * @returns a string with the state initials like AL for Alabama
 */
export const findStateInitials = (state: string): string => {
	const stateOption = STATE_OPTIONS.find((option) => option.value === state);
	return stateOption?.label || "";
};
