const today = new Date();
const dDay = new Date(2022, 11, 17);
const gap = dDay.getTime() - today.getTime();
const dDayResult = Math.ceil(gap / (1000 * 60 * 60 * 24));

export default dDayResult;
