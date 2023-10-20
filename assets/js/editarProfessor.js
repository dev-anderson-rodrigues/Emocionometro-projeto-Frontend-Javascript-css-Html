const formulario=document.getElementById('formulario')
let professorId = null

const getIdUrl=()=>{
    const paramString=window.location.search
    const params=new URLSearchParams(paramString)
    professorId=params.get("id")
    console.log(professorId)
}

const buscarProfessor= async ()=>{
    const response=await fetch(`https://api-emocionometro.onrender.com/professores/${professorId}`)
    const professor=await response.json()
    return professor
    console.log(professor)
}

const carregarDadosFormulario= async (professores)=>{
    document.getElementById('nome').value=professores.nome
    document.getElementById('perfil').value=professores.perfil
    document.getElementById('disciplina').value=professores.disciplina
    document.getElementById('switch').checked=professores.ativo
}
const carregarDados= async ()=>{
    getIdUrl()
    const professores=await buscarProfessor()
    carregarDadosFormulario(professores)
}


const editarProfessor = async(professor)=>{
    await fetch(`https://api-emocionometro.onrender.com/professores/${professorId}`,{
        method:'PUT',  
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
        body:JSON.stringify(professor)
      })

      console.log("Editado com sucesso!")
  
      window.location="professor.html"
}
formulario.addEventListener('submit',(e)=>{
    e.preventDefault()

    const nome=formulario.elements['nome'].value
    const disciplina=formulario.elements['disciplina'].value
    const perfil=formulario.elements['perfil'].value
    const ativo=formulario.elements['switch'].checked
    
    console.log(nome)
    console.log(disciplina)
    console.log(perfil)

    const professor={
        nome,
        disciplina,
        perfil,
        ativo,
    }

    editarProfessor(professor)
 
})

carregarDados()
