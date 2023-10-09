const formulario=document.getElementById('formulario')

const cadastrarAluno = async (aluno)=>{
    await fetch('https://json-teste-3jsg48grw-andersonrodrigues1.vercel.app/alunos',{
        method:'POST',  
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
        body:JSON.stringify(aluno)
      })

      console.log("Cadastrado com sucesso!")
  
      window.location="aluno.html"
}

formulario.addEventListener('submit',(e)=>{
    e.preventDefault()

    const nome=formulario.elements['nome'].value
    const turma=formulario.elements['turma'].value
    const ativo=formulario.elements['switch'].checked
    
    console.log(nome)
    console.log(turma)

    const aluno={
        nome,
        turma,
        ativo,
    }

    cadastrarAluno(aluno)
 
})
const excluirAluno = async(id)=>{
    await fetch(`https://json-teste-3jsg48grw-andersonrodrigues1.vercel.app/alunos/${id}`,{method:'DELETE'})
    window.location="aluno.html"
}

