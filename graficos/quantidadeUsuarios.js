import { getCSS, tickConfig } from "./common.js"

async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-u'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
const quantidadeDeUsuarios = Object.values(dados)

const data = [
    {