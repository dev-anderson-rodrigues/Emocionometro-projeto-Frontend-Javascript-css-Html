let corpoTabela = "";
async function buscarAlunos() {
  let urlAPI = await fetch("https://json-teste-eight.vercel.app/alunos");
  let aluno = await urlAPI.json();
  let divUsuarios = document.getElementById("usuarios-aluno");
  aluno.forEach((usuario) => {
    corpoTabela =
      `
        <tr >
            <div id="user">
                <td >${usuario.nome}</td>
                <td>${usuario.turma}</td>
                <td >${usuario.ativo ? "<img src='../../assets/images/buttonVerdeToogle.png' width='30px' height='20px'/>" : "<img src='../../assets/images/buttonToogleVermelho.png'width='30px' height='20px'/>"}</td>
                <td><div class="edit-delet" ><a href="#"><img src="../../assets/images/lapis.svg" alt="" width="20px" height="20px" onclick="editarAluno(${usuario.id})"></a><a href="#"><img src="../../assets/images/delete.svg" alt="" width="20px" height="20px" onclick="excluirAluno(${usuario.id})"></a></div></td>
            </div>
        </tr>
        ` + corpoTabela;
        
  });
  divUsuarios.innerHTML = corpoTabela;
}
async function ordenarNome(){
  console.log('teste')
  let divUsuarios = document.getElementById("usuarios-aluno");
  let corpoTabela = ''
  const novaApiUrl = await fetch("https://json-teste-eight.vercel.app/alunos?_sort=nome&_order=desc")
  let aluno = await novaApiUrl.json();
  
  aluno.forEach((usuario) => {
    corpoTabela =
      `
      <tr >
      <div id="user">
          <td >${usuario.nome}</td>
          <td>${usuario.turma}</td>
          <td >${usuario.ativo ? "<img src='../../assets/images/buttonVerdeToogle.png' width='30px' height='20px'/>" : "<img src='../../assets/images/buttonToogleVermelho.png'width='30px' height='20px'/>"}</td>
          <td><div class="edit-delet" ><a href="#"><img src="../../assets/images/lapis.svg" alt="" width="20px" height="20px" onclick="editarAluno(${usuario.id})"></a><a href="#"><img src="../../assets/images/delete.svg" alt="" width="20px" height="20px" onclick="excluirAluno(${usuario.id})"></a></div></td>
      </div>
  </tr>
        ` + corpoTabela;
  });
  divUsuarios.innerHTML = corpoTabela;
}
buscarAlunos();

const mostrarAluno = (usuariosEncontrados) => {
  const tabela = document.getElementById("usuarios-aluno");
  tabela.innerHTML = "";

  usuariosEncontrados.forEach((usuariosEncontrados) => {
    const alunoHTML = `
        <tr>
            <td>${usuariosEncontrados.nome}</td>
            <td>${usuariosEncontrados.turma}</td>
            <td >${usuariosEncontrados.ativo ? "<img src='../../assets/images/buttonVerdeToogle.png' width='30px' height='20px'/>" : "<img src='../../assets/images/buttonToogleVermelho.png'width='30px' height='20px'/>"}</td>
            <td><div class="edit-delet"><a href="#"><img src="../../assets/images/lapis.svg" alt="" width="20px" height="20px" onclick="editarAluno(${usuariosEncontrados.id})"></a><a href="#"><img src="../../assets/images/delete.svg" alt="" width="20px" height="20px" onclick="excluirAluno(${usuariosEncontrados.id})"></a></div></td>
        </tr>
        `;
    tabela.innerHTML = tabela.innerHTML + alunoHTML;
  });
};

const pesquisaAlunos = async () => {
  let searchAluno = document.getElementById("pesquisa").value;
  let apiURL = await fetch(
    `https://json-teste-eight.vercel.app/alunos?nome_like=${searchAluno}`
  );
  let dados = await apiURL.json();

  const usuariosEncontrados = dados.filter((usuario) => {
    return usuario.nome.includes("");
  });

  mostrarAluno(usuariosEncontrados);

};
const excluirAluno = async(id)=>{
    if(confirm('Deseja realmente deletar o usuario?' + id))
    await fetch(`https://json-teste-eight.vercel.app/alunos/${id}`,{method:'DELETE'})
    window.location="aluno.html"
}
const editarAluno = (id)=>{
  window.location=`editarAluno.html?id=${id}`
}
