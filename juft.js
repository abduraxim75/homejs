// 2. Berilgan massivning faqat juft sonlardan iborat elementlaridan tashkil topgan
//  yangi massiv qaytaradigan funksiya yozing



function juft_massivs(array) {
    let standart = array.filter((element) => {
        if (element % 2 === 0) {
            return element
        }
        return
    })
    return standart
}
console.log(juft_massivs([3, 6, 8, 2])); /// [6, 8, 2]