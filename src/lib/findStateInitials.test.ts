import { expect, test } from "vitest";
import { findStateInitials } from "./tools";

test("Return the initials of the state", () => {
	expect(findStateInitials("Alabama")).toBe("AL");
});

test("Return an empty string is the state is not found", () => {
	expect(findStateInitials("random")).toBe("");
});
