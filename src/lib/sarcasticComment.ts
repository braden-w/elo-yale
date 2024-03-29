import type { College } from './colleges';

const SARCASTIC_COMMENTS = [
	'Have you EATEN at their dining hall?',
	'Stop playing favorites',
	'You have to be trolling',
	'Really?',
	"I wouldn't do that if I were you",
	"damn, how isn't td last right now",
	'Wow, hot take.',
	"I wouldn't do that if I were you.",
	"This is why democracy doesn't work.",
	'Oh wow, you must really love that brick building aesthetic.',
	"Are you sure you're not just voting for the one with the cutest student population?",
	'Ah yes, because the quality of a residential college is clearly based on its location relative to the gym',
	"I mean, if you like being surrounded by pretentious people, I guess that's your prerogative",
	"Sure, let's just ignore all the problematic history associated with that college",
	'I hear the mold problem in their dorms really adds to the charm',
	"Well, I guess if you're into outdated traditions and elitism, that's your jam",
	"I'm sure the ghosts of past Ivy League superiority are thrilled with your vote",
	'Ah yes, because the quality of a residential college can be accurately judged based on a single visit during Bulldog Days',
	'Ah yes, because the architecture is really what matters in a residential college.',
	"You know what they say, the best residential college is the one you've never even been to.",
	"You're really going out on a limb with that vote, huh?",
	"I mean, if you're into mediocre dining hall food and a subpar social scene, go ahead and vote for them.",
	"Oh, I see, you're one of those people who likes to vote for the underdog just for the sake of it.",
	"I heard they have a great supply of bland, beige walls in their dorm rooms. That's gotta count for something, right?",
	"I'm sure that vote is going to make a huge difference in the grand scheme of things.",
	"Wow, I'm genuinely surprised that anyone even remembers that residential college exists.",
	'Ah, yes, because the quality of the bathrooms is the most important factor in choosing a residential college.',
	"Oh, I see you're voting for that college just because your crush lives there. How cute.",
	"Are you sure you're not just picking that college because it's the only one you've heard of?",
	'I mean, I guess if you really like Gothic architecture and pretentiousness, that college is the way to go.',
	"Oh, great, another vote for the college that thinks it's better than all the others. Just what we need.",
	'Are you voting for that college ironically? Because if not, I have some bad news for you...',
	"Oh, I see you're a fan of mediocre architecture and subpar room sizes. Interesting choice.",
	"Looks like someone's trying to be contrarian for the sake of being contrarian. How edgy.",
	"Oh, I didn't realize we were voting for the college with the most obnoxious squirrels.",
	"Hmm, I'm not sure if you're serious or just trying to make me laugh. Either way, nice try.",
	"I mean, I guess if you enjoy feeling like you're living in a prison cell, that's your prerogative.",
	"Ah yes, the classic 'I've never actually been to any of the other colleges but I'm going to vote for this one anyway' strategy.",
	"I'm sure the ghosts in that college are very friendly, but I prefer to live amongst the living.",
	'Interesting choice. Are you a fan of mediocre wifi and lukewarm showers?'
] as const;

export function getRandomSarcasticComment({
	winner,
	loser
}: {
	winner: College;
	loser: College;
}): string {
	return SARCASTIC_COMMENTS[Math.floor(Math.random() * SARCASTIC_COMMENTS.length)];
}
