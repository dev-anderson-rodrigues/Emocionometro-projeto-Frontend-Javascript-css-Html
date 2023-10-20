formulario = document.getElementById('formulario')
let usuariosId = null

const getIdUrl=()=>{
    const paramString=window.location.search
    const params=new URLSearchParams(paramString)
    usuariosId=params.get("id")
    console.log(usuariosId)
}

const buscarUsuario= async ()=>{
    const response=await fetch(`https://api-emocionometro.onrender.com/usuarios/${usuariosId}`)
    const usuario=await response.json()
    return usuario
    console.log(usuario)
}

const carregarDadosFormulario= async (usuario)=>{
    document.getElementById('senha').value=usuario.senha

}
const carregarDados= async ()=>{
    getIdUrl()
    const usuario=await buscarUsuario()
    carregarDadosFormulario(usuario)
}


const editarUsuario = async(usuario)=>{
    let user = await fetch(`https://api-emocionometro.onrender.com/usuarios/${usuariosId}`,{
        method:'PUT',  
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
        body:JSON.stringify(usuario)
      })

      console.log("Editado com sucesso!")
     
      window.location="/index.html"
}
const btn=document.getElementById('Entrar')

formulario.addEventListener("submit", async(e)=>{
    e.preventDefault()
    console.log('teste')
    
    const senha = document.getElementById('senha').value

    console.log(senha)

    const usuario = await buscarUsuario()

    usuario.senha = senha
    editarUsuario(usuario)
})


carregarDados()