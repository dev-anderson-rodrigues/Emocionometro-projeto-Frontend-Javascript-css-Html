const meuDialog = document.getElementById("meu-dialog");

        window.addEventListener("DOMContentLoaded", () => {
        meuDialog.showModal();
        setTimeout(function() {
                window.location.href = '/pages/home/home.html'
              },5000);
});