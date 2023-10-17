let corpoTabela = "";
async function buscarProfessores() {
  let urlAPI = await fetch("https://json-teste-eight.vercel.app/professores?_sort=nome&_order=desc");
  let professor = await urlAPI.json();
  let divUsuarios = document.getElementById("usuarios-prof");
  professor.forEach((usuario) => {
    corpoTabela =
      `
        <tr >
            <div id="user">
                <td >${usuario.nome}</td>
                <td>${usuario.disciplina}</td>
                <td>${usuario.perfil}</td>
                <td >${usuario.ativo ? "<img src='../../assets/images/buttonVerdeToogle.png' width='30px' height='20px'/>" : "<img src='../../assets/images/buttonToogleVermelho.png'width='30px' height='20px'/>"}</td>
                <td><div class="edit-delet" ><a href="#"><img src="../../assets/images/lapis.svg" alt="" width="20px" height="20px" onclick="editarProfessor(${usuario.id})"></a><a href="#"><img src="../../assets/images/delete.svg" alt="" width="20px" height="20px" onclick="excluirProfessor(${usuario.id})"></a></div></td>
            </div>
        </tr>
        ` + corpoTabela;
        
  });
  divUsuarios.innerHTML = corpoTabela;
}
buscarProfessores();

const mostrarProfessor = (usuariosEncontrados) => {
  const tabela = document.getElementById("usuarios-prof");
  tabela.innerHTML = "";

  usuariosEncontrados.forEach((usuariosEncontrados) => {
    const professorHTML = `
        <tr>
            <td>${usuariosEncontrados.nome}</td>
            <td>${usuariosEncontrados.disciplina}</td>
            <td>${usuariosEncontrados.perfil}</td>
            <td >${usuariosEncontrados.ativo ? "<img src='../../assets/images/buttonVerdeToogle.png' width='30px' height='20px'/>" : "<img src='../../assets/images/buttonToogleVermelho.png'width='30px' height='20px'/>"}</td>
            <td><div class="edit-delet"><a href="#"><img src="../../assets/images/lapis.svg" alt="" width="20px" height="20px" onclick="editarProfessor(${usuariosEncontrados.id})"></a><a href="#"><img src="../../assets/images/delete.svg" alt="" width="20px" height="20px" onclick="excluirProfessor(${usuariosEncontrados.id})"></a></div></td>
        </tr>
        `;
    tabela.innerHTML = tabela.innerHTML + professorHTML;
  });
};

const pesquisaProfessores = async () => {
  let searchProf = document.getElementById("pesquisa").value;
  let apiURL = await fetch(
    `https://json-teste-eight.vercel.app/professores?nome_like=${searchProf}`
  );
  let dados = await apiURL.json();

  const usuariosEncontrados = dados.filter((usuario) => {
    return usuario.nome.includes("");
  });

  mostrarProfessor(usuariosEncontrados);

};
const excluirProfessor = async(id)=>{
    if(confirm('Deseja realmente deletar o usuario?' + id))
    await fetch(`https://json-teste-eight.vercel.app/professores/${id}`,{method:'DELETE'})
    window.location="professor.html"
}
const editarProfessor = (id)=>{
  window.location=`editarProfessor.html?id=${id}`
}
