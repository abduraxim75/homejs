function fiveAndGreaterOnly(arr,kichik){
    let alpha = arr.filter((Elem)=> Elem>kichik)
    return alpha
}
console.log(fiveAndGreaterOnly([3, 6, 8, 2],5));
