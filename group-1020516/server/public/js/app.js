document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.sizeChoice');
    
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Ajoute ou supprime la classe 'enfonce' au bouton cliqué
            button.classList.toggle('enfonce');
            
            // Désélectionne les autres boutons
            buttons.forEach(function (otherButton) {
                if (otherButton !== button) {
                    otherButton.classList.remove('enfonce');
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.baseChoice');
    
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Ajoute ou supprime la classe 'enfonce' au bouton cliqué
            button.classList.toggle('enfonce');
            
            // Désélectionne les autres boutons
            buttons.forEach(function (otherButton) {
                if (otherButton !== button) {
                    otherButton.classList.remove('enfonce');
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.sugarChoice');
    
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Ajoute ou supprime la classe 'enfonce' au bouton cliqué
            button.classList.toggle('enfonce');
            
            // Désélectionne les autres boutons
            buttons.forEach(function (otherButton) {
                if (otherButton !== button) {
                    otherButton.classList.remove('enfonce');
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.poppingsChoice');
    
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Ajoute ou supprime la classe 'enfonce' au bouton cliqué
            button.classList.toggle('enfonce');
            
            // Désélectionne les autres boutons
            buttons.forEach(function (otherButton) {
                if (otherButton !== button) {
                    otherButton.classList.remove('enfonce');
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.supplementsChoice');
    
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Ajoute ou supprime la classe 'enfonce' au bouton cliqué
            button.classList.toggle('enfonce');
            
            // Désélectionne les autres boutons
            buttons.forEach(function (otherButton) {
                if (otherButton !== button) {
                    otherButton.classList.remove('enfonce');
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const historiqueSection = document.getElementById('historique');

    // Exemple de commandes (vous pouvez récupérer ces données depuis une source de données)
    const commandes = [
        { nom: 'Bubble Tea saveur mangue', poppings: ['Perles de tapioca', 'Jelly de fruit'], prix: 4.50, date: '2023-11-15T10:30:00' },
        { nom: 'Bubble Tea saveur fraise', poppings: ['Perles de coco'], prix: 5.00, date: '2023-11-14T15:45:00' },
        // Ajoutez autant de commandes que nécessaire
    ];

    // Affiche les commandes dans l'historique
    commandes.forEach(function (commande) {
        const commandeDiv = document.createElement('div');
        commandeDiv.classList.add('commande');

        const nomCommande = document.createElement('p');
        nomCommande.textContent = `Commande : ${commande.nom}`;

        const poppingsCommande = document.createElement('p');
        poppingsCommande.textContent = `Poppings : ${commande.poppings.join(', ')}`;

        const prixCommande = document.createElement('p');
        prixCommande.textContent = `Prix : ${commande.prix.toFixed(2)} €`;

        const dateCommande = document.createElement('p');
        dateCommande.classList.add('date');
        dateCommande.textContent = `Date : ${formatDate(commande.date)}`;

        commandeDiv.appendChild(nomCommande);
        commandeDiv.appendChild(poppingsCommande);
        commandeDiv.appendChild(prixCommande);
        commandeDiv.appendChild(dateCommande);

        historiqueSection.appendChild(commandeDiv);
    });

    // Fonction pour formater la date
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', options);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const panierSection = document.getElementById('panier');
    const totalAmountElement = document.getElementById('totalAmount');
    const commanderButton = document.getElementById('commander');

    // Exemple d'articles dans le panier (vous pouvez récupérer ces données depuis une source de données)
    const panierArticles = [
        { nom: 'Bubble Tea saveur mangue', prix: 4.50 },
        { nom: 'Bubble Tea saveur fraise', prix: 5.00 },
        // Ajoutez autant d'articles que nécessaire
    ];

    // Affiche les articles dans le panier
    panierArticles.forEach(function (article) {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article');  // Ajout de la classe "article"

        const nomArticle = document.createElement('p');
        nomArticle.textContent = `Article : ${article.nom}`;

        const prixArticle = document.createElement('p');
        prixArticle.textContent = `Prix : ${article.prix.toFixed(2)} €`;

        articleDiv.appendChild(nomArticle);
        articleDiv.appendChild(prixArticle);

        panierSection.appendChild(articleDiv);
    });

    // Calcule et affiche le total du panier
    const totalAmount = panierArticles.reduce((total, article) => total + article.prix, 0);
    totalAmountElement.textContent = totalAmount.toFixed(2);

    // Écouteur d'événements pour le bouton "Commander"
    commanderButton.addEventListener('click', function () {
        alert('Commande passée avec succès !');
        // Ajoutez ici la logique pour passer la commande
    });
});

