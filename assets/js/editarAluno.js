const formulario=document.getElementById('formulario')
let alunoId = null

const getIdUrl=()=>{
    const paramString=window.location.search
    const params=new URLSearchParams(paramString)
    alunoId=params.get("id")
    console.log(alunoId)
}

const buscarAluno= async ()=>{
    const response=await fetch(`https://json-teste-3jsg48grw-andersonrodrigues1.vercel.app/alunos/${alunoId}`)
    const aluno=await response.json()
    return aluno
    console.log(aluno)
}

const carregarDadosFormulario= async (alunos)=>{
    document.getElementById('nome').value=alunos.nome
    document.getElementById('turma').value=alunos.turma
    document.getElementById('switch').checked=alunos.ativo
}
const carregarDados= async ()=>{
    getIdUrl()
    const alunos=await buscarAluno()
    carregarDadosFormulario(alunos)
}


const editarAluno = async(aluno)=>{
    await fetch(`https://json-teste-3jsg48grw-andersonrodrigues1.vercel.app/alunos/${alunoId}`,{
        method:'PUT',  
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
        body:JSON.stringify(aluno)
      })

      console.log("Editado com sucesso!")
  
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

    editarAluno(aluno)
 
})

carregarDados()
