export const gigasecond = (dateOrigin) => {
	// must use getTime as getSeconds only works with 0-60 seconds
	// getTime works with miliseconds from 1970 to present day
	// convert gigaseconds to milliseconds and use getTime
	const milisec = 1000000000000;
	return new Date(dateOrigin.getTime() + milisec);
}