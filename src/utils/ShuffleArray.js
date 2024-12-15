
/**
 * Shuffle an array as randomly as possible.
 * Code comes from this StackOverflow answer:
 * https://stackoverflow.com/a/2450976
 * 
 * @author coolaj86
 *
 * @param array
 */
function shuffle(incomingArray) {
	let array = JSON.parse(JSON.stringify(incomingArray));
	let currentIndex = array.length;

	// While there remain elements to shuffle...
	while (currentIndex != 0) {

		// Pick a remaining element...
		let randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex]];
	}

	return array;
}

export default shuffle;