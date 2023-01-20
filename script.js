const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add) // primeiro é o acontecido, depois ele chama a função do lado
form.addEventListener("change", save) // se deu o change ele executa a função save


function add() {
    
    const today = new Date().toLocaleDateString("pt-br").slice(0,-5) //Cria uma data, coloca a data em 'pt-br', slice recorta o que vai retornar
    // const today = "10/01"
    const dayExists = nlwSetup.dayExists (today)
    
    if(dayExists){ //condição, se ela existir executa o que está dentro dessa função
    alert("Dia já registrado")
    return // Dentro de uma função essa palavra faz parar o código, ou seja, não passa pra linha de baixo
    }

    alert("Adicionado com sucesso👌")
    nlwSetup.addDay(today)
}

function save() {
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data)) //stringify transforma o dado em texto, ou seja, string
}


const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}  //parse transforma o texto em objeto
 nlwSetup.setData(data)
 nlwSetup.load() 