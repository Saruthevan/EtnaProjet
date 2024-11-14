document.addEventListener("DOMContentLoaded", function () {
    // Sélection de tous les éléments avec la classe pressToChange
    const pressToChangeList = document.querySelectorAll(".pressToChange");

    // Pour chaque élément pressToChange
    pressToChangeList.forEach(function (pressToChange) {
        // Trouver l'élément sibling avec la classe displayNone
        const displayNone = pressToChange.nextElementSibling;

        // Ajout d'un écouteur d'événements sur le clic de pressToChange
        pressToChange.addEventListener("click", function () {
            // Toggle de la classe 'none' sur la div displayNone
            displayNone.classList.toggle("none");
        });
    });
});
