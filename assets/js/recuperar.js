async function buscarUsuario(email) {
    const response=await fetch(`https://json-teste-eight.vercel.app/usuarios?email=${email}`)
    const dados=await response.json()
    
    return dados.filter((usuario) => {
      editarUsuario(`${usuario.id}`)
    })


}
const editarUsuario = (id)=>{
    window.location=`/pages/login/novaSenha/novaSenha.html?id=${id}`
  }
const btn=document.getElementById('Entrar')

btn.addEventListener('click',(e)=>{
    e.preventDefault()

    const valorInput = document.querySelector('#login')
    const email = valorInput.value

    buscarUsuario(email)

})