const impre = function(nota) {

    switch (Math.floor(nota)){

        case 10:
            console.log('excelente')
            break
        case 9:
            console.log('mais ou menos')
            break
        case 8:
            console.log('ruim')
            break
        default :
        console.log('inválido') 
    }
}
impre(4)