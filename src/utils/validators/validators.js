
export const required = (value) => {
	if (value) return undefined
	return 'error'
}
export const maxLengthCreator = (maxLength) => (value) => {
	if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`
	return undefined
}
// export const minLength2 = (value) => {
// 	if (value && value.length < 2) return 'Min length is 2 symbols'
// 	return undefined
// }

