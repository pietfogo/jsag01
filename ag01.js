var array01 = [] // Array cujos valores serão inseridos e somados
var length = 5 // Tamanho do loop e posteriormente do array
function sortearValores(tamanho) {
for (let i = 0; i < tamanho; i++) {
    var random = Math.floor(Math.random() * 11)
    array01.push(random)
}
return array01
}
var func = sortearValores(5)
var array02 = []
for (let i = -1; i < func.length; i=i+2) {
    var x = parseInt(func[i] + func[i+1])
    func[i], func[i+1] = x
    array02.push(x)
}
console.log(array01, x, func, array02)
