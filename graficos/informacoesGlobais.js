const ur1 = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(ur1)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const porcentagemConectada = ((pessoasConectadas/ pessoasNoMundo ) * 100).toFixed

    const parágrafo = document.createElement