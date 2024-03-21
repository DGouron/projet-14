import { expect, test } from "vitest";
import { formatDate } from "./tools";

test("format an ISO date into a formated date like 05/11/2024", () => {
	const date = "2024-05-11T00:00:00.000Z";
	expect(formatDate(date)).toBe("11/05/2024");
});

test("if the date is not a string, return an empty string", () => {
	const date = 0;
	expect(formatDate(date as unknown as string)).toBe("");
});
