export const formatNumber = (num: number): string => {
	// Round the number to two decimal places
	num = Math.round(num * 100) / 100;
	// Use toLocaleString() to format the number with commas for thousands
	return num.toLocaleString(undefined, {
	  minimumFractionDigits: 2,
	  maximumFractionDigits: 2,
	});
  }