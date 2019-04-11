export const callReducer = (actionType, object) => {
	// console.log('[Act/User][asyncTrigger] Action Dispatched: ', type, ' with data: ', object);
	return {
		type: actionType,
		obj: object
	};
};

export const timeLogger = () => {
	const timer = new Date()
	return console.log('At: ', timer.getHours(), ':', timer.getMinutes(), ':', timer.getSeconds(), ':', timer.getMilliseconds())
}
export default callReducer