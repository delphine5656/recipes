//page recettes

document.addEventListener("DOMContentLoaded", function() {
    const recipes = [
        { title: "Tarte aux pommes", category: "Dessert",  description: "Une tarte classique et savoureuse pour régaler toute la famille.", link: "tarte-pomme.html", image: "images/image.png", preparation: "20 minutes", cuisson: "20 minutes"},
        { title: "Lasagnes", category: "Plat principal", description: "Fondez pour cette recette de lasagne maison, dont les feuilles de pâte laissent entrevoir une irrésistible farce tomatée au bœuf haché", link: "lasagne.html", image: "images/lasagne.webp",  preparation: "20 minutes", cuisson: "60 minutes" },
        { title: "Soupe de légumes", category: "Entrée",  description: "Une tarte classique et savoureuse pour régaler toute la famille.", link: "crepes.html", image: "images/chair-saucisse.jpg" , preparation: "20 minutes", cuisson: "20 minutes" },
        { title: "Gratin de pomme de terre et chair à saucisse", category: "Plat",  description: "Un plat généreux qui sort de l'ordinaire", link: "gratin_Chair_sauciise.html", image: "images/chair-saucisse.jpg" , preparation: "30 minutes", cuisson: "40 minutes" },
       
    ];

    const recipeContainer = document.getElementById("recipe-container");
    const filterSelect = document.getElementById("category-filter");
    const searchInput = document.getElementById("search-recipe");

    function displayRecipes(filteredRecipes) {
        recipeContainer.innerHTML = "";
        filteredRecipes.forEach(recipe => {
            const recipeDiv = document.createElement("div");
            recipeDiv.classList.add("recipe");
           // recipeDiv.innerHTML = `<div class="card"><h2>${recipe.title}</h2><p>Catégorie : ${recipe.category}</p>${recipe.image ? `<img src="${recipe.image}" alt="Image de ${recipe.title}">` : ""}${recipe.link ? `<a href="${recipe.link}" target="_blank">Voir la recette</a>` : ""}</div>`;
            recipeDiv.innerHTML = `<div class="recipe-card">
                                    ${recipe.image ? `<img src="${recipe.image}" alt="Image de ${recipe.title}">` : ""}
                                    <h2>${recipe.title}</h2>
                                    <div class="details">
                                    <span>${recipe.preparation}</span>
                                    <span>${recipe.cuisson}</span>
                                    </div>
                                    <p>${recipe.description}<p/>
                                    <p>Catégorie : ${recipe.category}</p>
                                    ${recipe.link ? `<a href="${recipe.link}" target="_blank">Voir la recette</a>` : ""}
                                    </div>`;
            recipeContainer.appendChild(recipeDiv);
        });
    }

    function filterRecipes() {
        const selectedCategory = filterSelect.value;
        const searchTerm = searchInput.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe => {
            const matchesCategory = selectedCategory === "Toutes" || recipe.category === selectedCategory;
            const matchesSearch = recipe.title.toLowerCase().includes(searchTerm);
            return matchesCategory && matchesSearch;
        });
        displayRecipes(filteredRecipes);
    }

    filterSelect.addEventListener("change", filterRecipes);
    searchInput.addEventListener("input", filterRecipes);

    // Initial display
    displayRecipes(recipes);
});


//menu hebdomadaire

const recipesMenu = {
    lundi: {
        title: 'Tarte aux Pommes',
        description: 'Une tarte classique et savoureuse pour régaler toute la famille.'
    },
    mardi: {
        title: 'Gâteau au Chocolat',
        description: 'Un gâteau moelleux au chocolat, parfait pour toutes les occasions.'
    },
    mercredi: {
        title: 'Gâteau au Chocolat',
        description: 'Un gâteau moelleux au chocolat, parfait pour toutes les occasions.'
    },
    jeudi: {
        title: 'Gâteau au Chocolat',
        description: 'Un gâteau moelleux au chocolat, parfait pour toutes les occasions.'
    },
    vendredi: {
        title: 'Gâteau au Chocolat',
        description: 'Un gâteau moelleux au chocolat, parfait pour toutes les occasions.'
    },
    samedi: {
        title: 'Gâteau au Chocolat',
        description: 'Un gâteau moelleux au chocolat, parfait pour toutes les occasions.'
    },
    dimanche: {
        title: 'Gâteau au Chocolat',
        description: 'Un gâteau moelleux au chocolat, parfait pour toutes les occasions.'
    }

    // Ajoutez d'autres recettes ici
};

function showRecipeMenu(day) {
    const recipeMenu = recipesMenu[day];
    if (recipeMenu) {
        document.getElementById('recipe-titleMenu').innerText = recipe.titleMenu;
        document.getElementById('recipe-descriptionMenu').innerText = recipe.descriptionMenu;
        document.getElementById('recipe-detailsMenu').style.display = 'block';
    }
}

function hideRecipeMenu() {
    document.getElementById('recipe-detailsMenu').style.display = 'none';
}


//caroussel home page

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}