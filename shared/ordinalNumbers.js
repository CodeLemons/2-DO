export default function ordinalNumbers() {
    const ordinalSuffixes = ["st", "nd", "rd", "th", "th", "th", "th", "th",
                             "th", "th", "th", "th", "th", "th", "th", "th",
                             "th", "th", "th", "th", "st", "nd", "rd", "th",
                             "th", "th", "th", "th", "th", "th", "st"];
    const date = new Date();
    return date.getDate() + ordinalSuffixes[date.getDate() - 1]
}