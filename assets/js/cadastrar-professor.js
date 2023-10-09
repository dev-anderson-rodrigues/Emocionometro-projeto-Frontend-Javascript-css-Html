const formulario=document.getElementById('formulario')

const cadastrarProfessor = async (professor)=>{
    await fetch('https://json-teste-eight.vercel.app/professores',{
        method:'POST',  
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
        body:JSON.stringify(professor)
      })

      console.log("Cadastrado com sucesso!")
  
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

    cadastrarProfessor(professor)
 
})
const excluirProfessor = async(id)=>{
    await fetch(`https://json-teste-eight.vercel.app/professores/${id}`,{method:'DELETE'})
    window.location="professor.html"
}

