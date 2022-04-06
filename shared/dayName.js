export default function dayName(){
    const dayNames = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
    const date = new Date();
    return (dayNames[date.getDay() - 1]).toString();
}