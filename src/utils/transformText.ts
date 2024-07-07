export function truncateText(text?: string, maxLength: number = 40): string | undefined {
	if (text) {
		if (text.length <= maxLength) {
			return text;
		}
		return text.substring(0, maxLength) + '...';
	}
}
