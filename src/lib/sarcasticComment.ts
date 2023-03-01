const SARCASTIC_COMMENTS = [
	'have you EATEN at their dining hall',
	'stop playing favorites',
	'you have to be trolling',
	'Really?',
	"I wouldn't do that if i were you",
	"damn, how isn't td last right now",
	'hot take',
	"I wouldn't do that if I were you",
	"This is why democracy doesn't work"
] as const;

export function getRandomSarcasticComment(): string {
	return SARCASTIC_COMMENTS[Math.floor(Math.random() * SARCASTIC_COMMENTS.length)];
}
