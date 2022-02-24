type DateString = string;

export const deadlines: {
	[year: string]: string;
} = {
	"2023": "January 1, 2023 00:00:00",
	"2024": "January 1, 2024 00:00:00",
	"2025": "January 1, 2025 00:00:00",
	"2026": "January 1, 2026 00:00:00"
};

export function isNextYear(year: string) {
	const today = new Date();
	const nextYear = (today.getFullYear() + 1).toString();
	return nextYear == year;
}
