/*******************************************************************************************************************************************
* Objetivo: Manipulação de dados utilizando Array e JSON
* Data: 18/03/2026
* Autor: Jean Costa
* Versão 1.0
********************************************************************************************************************************************/

//Importando banco de dados 
const { listaDeEstados } = require("./estados_cidades")
const bancoDeDados = listaDeEstados

console.log('\nLISTA DE ESTADOS - UF')
const getListaDeEstados = () =>{
    let listaSiglas = []

    bancoDeDados.estados.forEach((itemEstados) => {
        listaSiglas.push(itemEstados.sigla)
    })

    let listaEstadosJSON = {
        "uf": listaSiglas,           
        "quantidade": listaSiglas.length
    }

    return listaEstadosJSON
}
let resultado1 = getListaDeEstados()
console.log(resultado1)

console.log('\nLISTA DE DADOS DE ESTADO POR UF')
const getDadosEstado = (siglaBusca) =>{
    let estadoEncontrado = false

    bancoDeDados.estados.forEach((itemEstado) => {
        if (itemEstado.sigla.toUpperCase() == siglaBusca.toUpperCase()) {
            estadoEncontrado = {
                uf: itemEstado.sigla,
                descricao: itemEstado.nome,
                capital: itemEstado.capital,
                regiao: itemEstado.regiao
            }
        }
       
    })
    return estadoEncontrado
}
let resultado2 = getDadosEstado('rj')
console.log(resultado2)

console.log('\nLISTA DE CAPITAL DE ESTADOS POR UF')
const getCapitalEstado = (siglaBusca) =>{
    let estadoEncontrado = false

    bancoDeDados.estados.forEach((itemEstado) => {
        if (itemEstado.sigla.toUpperCase() == siglaBusca.toUpperCase()) {
            estadoEncontrado = {
                uf: itemEstado.sigla,
                descricao: itemEstado.nome,
                capital: itemEstado.capital
            }
        }
       
    })
    return estadoEncontrado
}
let resultado3 = getCapitalEstado('AL')
console.log(resultado3)

console.log('\nLISTA DE ESTADOS POR REGIÃO')
const getEstadosRegiao = (regiaoBusca) =>{
    let estadosEncontrados = []
    let nomeRegiao = ""

    bancoDeDados.estados.forEach((itemRegiao) => {
        // Verifica se o estado pertence à região buscada
        if (itemRegiao.regiao.toLowerCase() == regiaoBusca.toLowerCase()) {
            nomeRegiao = itemRegiao.regiao
            
            //  Adiciona o objeto formatado ao nosso array acumulador
            estadosEncontrados.push({
                uf: itemRegiao.sigla,
                descricao: itemRegiao.nome
            })
        }
    })

    return {
        regiao: nomeRegiao,
        estados: estadosEncontrados
    }
}
let resultado4 = getEstadosRegiao('sul')
console.log(resultado4)

console.log('\nLISTA DE CAPITAIS DO BRASIL')
const getCapitalPais = () =>{
    capitaisEncontradas = []

    bancoDeDados.estados.forEach((itemCapitais) =>{

        if (itemCapitais.capital_pais) {
            capitaisEncontradas.push({
                capital_atual: itemCapitais.capital_pais.capital,
                uf: itemCapitais.sigla,
                descricao: itemCapitais.nome,
                capital: itemCapitais.capital,
                regiao: itemCapitais.regiao,
                capital_pais_inicio: itemCapitais.capital_pais.ano_inicio,
                capital_pais_termino: itemCapitais.capital_pais.ano_fim
            })
        }
    })
    return capitaisEncontradas 
}
let resultado5 = getCapitalPais()
console.log(resultado5)

console.log('\nLISTA DE CIDADES FILTRADA PELA SIGLA')
const getCidades = (siglaBusca) =>{
    let cidadesEncontradas = []
    let sigla = ""
    let descricao = ""
    let quantidade 

    bancoDeDados.estados.forEach((itemSigla) => {
        if(itemSigla.sigla.toUpperCase() == siglaBusca.toUpperCase()){
            sigla = itemSigla.sigla
            descricao = itemSigla.nome
                
            itemSigla.cidades.forEach((cidadeEncontrada) => {
                cidadesEncontradas.push(cidadeEncontrada.nome)
            })


            quantidade = cidadesEncontradas.length

        }
    })

    return{
        uf: sigla,
        descricao: descricao,
        quantidade_cidades: quantidade,
        cidades: cidadesEncontradas
    }

}
let resultado6 = getCidades('AC')
console.log(resultado6)