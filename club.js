function peopleWhoBelongToTheIlluminati(arr) {
    return arr.filter(element => element.member)
}
console.log(
peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true },
])
)