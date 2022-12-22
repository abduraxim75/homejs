let oyinchilar = [
    {name: 'Wes', position: 'WR'},
    {name: 'Coty', position: 'QB'},
    {name: 'Joe', position: 'WR'}
];
function gamer() {
    return oyinchilar.filter(turi => turi.position =='WR')
}
console.log(gamer(oyinchilar))