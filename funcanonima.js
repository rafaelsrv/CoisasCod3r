const fabricante = ["Mercedes","Ferrari","Ford"]

function imprimir(nome,indice){
    console.log(`${indice+1}.${nome}`)
}

fabricante.forEach(imprimir)

