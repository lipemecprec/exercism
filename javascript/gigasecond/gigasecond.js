//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (now) => {
	console.log(now);
	const giga = new Date(1_000_000_000_000); // 1 Gs = 10^12 Gms
	return new Date(now.getTime() + giga.getTime());
};
