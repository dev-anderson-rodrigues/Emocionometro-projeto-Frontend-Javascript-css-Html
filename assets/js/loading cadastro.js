const meuDialog = document.getElementById("meu-dialog");

        window.addEventListener("DOMContentLoaded", () => {
        meuDialog.showModal();
        setTimeout(function() {
                window.location.href = '/index.html'
              },30000);
});