
function abriDivDados() {
    const divDados=document.getElementById('divDados')
    const divAlterar=document.getElementById('divAlterar')

    if(divDados.style.display='none'){

        divDados.style.display='block'
        divAlterar.style.display='none'

    } else {
        divDados.style.display='none'
        divAlterar.style.display='block'
    }
   
}

function abriAlterarSenha() {
    const divAlterar=document.getElementById('divAlterar')
    const divDados=document.getElementById('divDados')
    

    if(divAlterar.style.display='none'){

        divDados.style.display='none'
        divAlterar.style.display='block'
    } else {

        divDados.style.display='block'
        divAlterar.style.display='none'
    }
    
}
