let titulo = document.querySelector('#titulo')
let dificuldade = document.querySelector('#select')
let ingredientes = document.querySelector('#ingredientes')
let preparo = document.querySelector('#preparo')
let link = document.querySelector('#link')
const enviar = document.querySelector('#btnEnviar')
const buscar = document.querySelector('#buscar')
let tb = document.querySelector('#titulo_buscar')
let card = document.querySelector('.painel-receitas')

const listaDeReceitas = [];


enviar.onclick = (e)=>{
  e.preventDefault()
  let vegano = document.querySelector('input[name=vegano]:checked')
  const novaReceita = {
    id: listaDeReceitas.length+1,
    titulo: titulo.value,
    dificuldade: dificuldade.options[select.selectedIndex].value,
    ingredientes: ingredientes.value,
    preparo: preparo.value,
    link: link.value,
    vegano: vegano.value
  }

  listaDeReceitas.push(novaReceita)
  console.log(listaDeReceitas);
  alert('Receita enviada')  
}

buscar.onclick = (e) =>{
  e.preventDefault()
  let resultado = listaDeReceitas.filter(item=>item.titulo == tb.value)
  console.log(resultado.length);
  if(resultado.length==0){
    return card.innerHTML = 
      `<article class="card">
        <h2>RECEITA NÃO ENCONTRADA</h2>
      </article>`
  }
  card.innerHTML = 
  `<article class="card">
    <h2>`+resultado[0].titulo+`</h2>
    <small>Dificuldade: `+resultado[0].dificuldade+`</small>
    <p>`+resultado[0].preparo+`</p>
  </article>`

}




