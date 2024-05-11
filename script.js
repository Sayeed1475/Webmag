function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);
       /// ON ECRIT LE CODE ICI ! 

       ///DEBUT DE LA FONCTION NAVTHEMES
      ///COMMENT AFFICHER LES THEMES DANS LA NAV , FONCTION NAV THEMES avec cette je vais chercher les données (thèmes) dans la data J.SON Journal => themes. J'ai auparavant rajouter un id="navThemes" dans le ul de la nav sur la page HTML. Il y a un tableau [themes] dans le fichier data.json dans le tableau [themes] il y a des {objets} qui contiennent 2 éléments , l'élément "nom" et l'élément "description". Mais ici je vais uniquement afficher l'élément "nom" de chaque {objets} dans le [tableau] themes. Je vais donc crée une fonction navthemes()qui va chercher des données dans le fichier data j.son et les afficher dans la NAV en  remplacant theme1 , theme2, theme3, theme4 et theme5 par les themes approprier figurant dans le tableau themes de la data J.SON. 
      function navthemes() {
        let themes = data.journal.themes;
        themes.forEach((element)=> {
          ///Les themes (theme1, theme2, theme3, theme4, theme5) ont été remplacer par les nomqui figurait dans le fichier data j.son dans le tableau themes. 
          let themeElement = `<li><a href="#">${element.nom}</a></li>`;
          let navTheme = document.getElementById("navTheme");
          navTheme.insertAdjacentHTML("beforeend", themeElement);
        
        });
      }
      navthemes();
      ///FIN DE LA FONCTION NAV THEMES------------------------




      //JE VEUT CHERCHER LE NOM DE MON JOURNAL DANS LA DATA ET L'AFFICHER DANS LA CONSOLE étape 1: Je crée une varable let titreJournal= data.journal.nomJournal veut dire que la donné se trouve dans la data, dans cette data on se dirige vers la rubrique journal qui contient l'élément nomJournal qui est le nom de mon journal WIRE WORLD NEWS

      function afficherTitreJournal (){
       let titreJournal = data.journal.nomJournal;
       //Enfin ici le titre de mon journal va s'afficher dans la console grace au console.log.
       //console.log(titreJournal);


       //SI JE SOUHAITE AFFICHER LE NOM DU JOURNAL SUR LA PAGE WEB avec le let TitreJournalId j'affiche le titre sur la page web, mais avant sur le code HTML j'ai rajouter un id sous la fin du HEADER dans le h1 avant la section comprenant le <div id = "articlePrincipal"> étape 2:

       let titreJournalId = document.getElementById("titreJournal");
       console.log(titreJournalId);
       //Le documentById permet d'accéder à l'élément HTML de l'id "titreJournal" et de l'afficher dans la console. 
       titreJournalId.insertAdjacentHTML("beforeend", titreJournal);
       //Et j'affiche sur la page web avec le .insertAdjacentHTML ("beforeend", titreJournal) la page web.

      }
      afficherTitreJournal(); 

      ///FIN DE LA FONCTION AFFICHER LE NOM DE MON JOURNAL------------------------








      //JE SOUHAITE AFFICHER LA PHRASE D'ACCROCHE DE MON JOURNAL DANS LA CONSOLE 
      //étape 1 : j'établi une fonction afficherPhraseAccroche() qui va chercher les données dans le fichier data J.SON 
      function afficherPhraseAccroche() {
      let phraseAccroche = data.journal.phraseAccroche;
      //étape 2 LE CONSOLE.LOG : Le console.log permet d'afficher les données dans la console.
      console.log(phraseAccroche); 

      //JE SOUHAITE ENSUITE AFFICHER LA PHRASE D'ACCROCHE DE MON JOURNAL SUR LA PAGE WEB
      //Avec le phraseAccrocheId j'affiche la phrase d'accroche sur la page Web, mais avant je rajoute sur le code HTML un id dans le h2 qui comprend la phrase d'accrohe (que je supprimerai par la suite car la fonction Javascript affichera la phrase en utilisant l'id) étape 2:

      let phraseAccrocheId = document.getElementById("phraseAccroche");
      console.log(phraseAccrocheId);

      phraseAccrocheId.innerHTML = phraseAccroche;


      }
      afficherPhraseAccroche(); 

      ///FIN DE LA FONCTION AFFICHER LA PHRASE D'ACCROCHE------------------------






      ///LA FONCTION AFFICHER APPEL A L'ACTION
      ///JE SOUHAITE AFFICHER LA PHRASE D'APPEL A L'ACTION DE MON JOURNAL DANS LA CONSOLE ( dans un premier temps) étape 1:
      function afficherTexteAppelAction() {
        let TexteAppelAction = data.journal.texteAppelAction;
        //La varaible let TexteAppelAction permet de récuperer la donnée dans le fichier data J.SON très exactement on rentre dans la data , dans la rubrique journal et on récupère l'élément "texteAppelAction".

      //étape 2 LE CONSOLE.LOG : Le console.log permet d'afficher la donnée dans la console.
      console.log(TexteAppelAction);
      
      
      
      //ENSUITE SI JE SOUHAITE AFFICHER LA PHRASE D'APPEL A L'ACTION DE MON JOURNAL SUR LA PAGE WEB
      //Avec le TexteAppelActionId j'affiche la phrase d'appel a l'action sur la page Web , mais avant sur la code HTML j'ai rajouter un id dans le <p> qui comprend la phrase d'appel à l'action. 


      let TexteAppelActionId = document.getElementById("texteAppelAction");
      console.log(TexteAppelActionId);

      TexteAppelActionId.innerHTML = TexteAppelAction;

      //Apres avoir ajouter un id sur le code HTML j'utilise la méthode innerHTML comme pour la phrase d'accroche précédemment. La fonction récupère la propriété texteAppelAction de l'objet {journal} dans la data puis l'affiche dans la console avec le console.log. Elle récupère l'élément HTML avec l'identifiant "texteAppelAction" qu'on a mis dans le <p> , elle récupère l'élément avec le document.getElementById() et insère la valeur de texteAppelAction dans cet élément grace à l'innerHTML. 


      }
      afficherTexteAppelAction();
      ///FIN DE LA FONCTION AFFICHER APPEL A L'ACTION------------------------





      ///FONCTION D'AFFICHAGE DE L'ARTICLE PRINCIPAL
    ///JE SOUHAITE AFFICHER L'ARTICEL PRINCIPAL DE MON JOURNAL SUR LA PAGE WEB MAIS AVANT J'AFFICHE LES ELEMENTS DANS LA CONSOLE étape 1: 
    ///Fonction d'affichage de l'article principal
    function afficherArticlePrincipal() {
    let afficherImage = data.journal.articlePrincipal.image;
    //La variable let afficherImage = data.journal.articlePrincipal.image; veut dire que la donnée se trouve dans le fichier data , avec cette variable on entre dans le journal et on se dirige vers la rubrique articlePrincipal qui est un objet {} qui contient différents éléments : image, titre, theme, date et description. 
    console.log(afficherImage);
    //Le console.log permet d'afficher la donnée ( ici l'élément image) dans la console. On établit le même procéder pour les autre élément : titre , thème , date et description. 
    
    let afficherTitre = data.journal.articlePrincipal.titre;
    console.log(afficherTitre); 

    let afficherTheme = data.journal.articlePrincipal.theme;
    console.log(afficherTheme); 

    let afficherDate = data.journal.articlePrincipal.date;
    console.log(afficherDate);

    let afficherDescription = data.journal.articlePrincipal.description;
    console.log(afficherDescription); 


    ///POUR PASSER LES DONNNEES DE LA CONSOLE A LA PAGE WEB AFIN QUE L'ARTICLE PRINCIPAL S'AFFICHE SUR LA PAGE WEB étape 2:
    let afficherArticlePrincipalId = document.getElementById("articlePrincipal");
    ///Avec document.getElementById("articlePrincipal") je sélectionne l'élément HTML avec l'identifiant "articlePrincipal". Ensuite la variable afficherArticlePrincipalId est déclarée avec le mot clé let et est assigné à l'élement HTML qui a l'identifiant "articlePrincipal" c'est une div dans une section HTML. 

    ///Et donc afficherArticlePrincipalId contient maintenant une référence à l'élément HTML dans le document avec l'id "articlePrincipal".

    let HTMLafficherArticlePrincipal = `<div class="container">
    <div class="article">
      <img src="${afficherImage}" alt="">
       <h4> ${afficherTitre} </h4>
       <h2>${afficherTheme} - ${afficherDate}<h2> 
        <p>
          ${afficherDescription}
        </p>
        <!--<div  class="button">
          <a href="#">Lire l'article</a></div>-->
        </div> 
        <div  class="button2">
          <a href="#">Lire l'article</a></div>
        </div>`; 

        ///Dans cette variable HTML j'ai récupéer une partie du code HTML qui contiendra les éléments de la page principale dont les variables ont été crée précédemment ( image , titre , theme , date et description ).

      afficherArticlePrincipalId.insertAdjacentHTML("beforeend", HTMLafficherArticlePrincipal)
      ///Ensuite la méthode insertAdjacentHTML me permet d'inseré le code HTML qui est stocké dans la variable HTMLafficherArticlePrincipal dans l'élément HTML (avec l'id "articlePrincipal" que l'on a insérer dans une div au sein d'une section sur la page HTML). Le "beforeend" signifie que le code HTML doit etre insérer juste avant la fermeture de l'élément. 

    } 
  
    afficherArticlePrincipal(); 

    ///Et là la fonction afficherArticlePrincipal() permet d'exécuter le code et afficher l'article principal sur la page Web. 
///FIN DE LA FONCTION AFFICHER ARTICLE PRINCIPAL ------------------------


    ///FONCTION D'AFFICHAGE DES AUTRES ARTICLES 
    function afficherLesArticles (){
    let afficherArticles = data.journal.articles;
    ///Je crée une variable afficherArticles qui contient les données de l'objet{} articles du fichier data.journal.articles.
    console.log(afficherArticles);
    ///Le console.log permet d'afficher la donnée (ici l'élément article )dans la console.

    afficherArticles.forEach(element => { 
      ///L'articles est un tableau dans la data J.SON la fonction forEach sert a parcourir le tableau et sélectionner les éléments contenu dans les {} objets du tableau.
    let afficherTitreArticle = element.titre;
    console.log(afficherTitreArticle);

    let afficherDateArticle = element.date;
    console.log(afficherDateArticle);

    let afficherThemeArticle = element.theme;
    console.log(afficherThemeArticle); 

    let afficherImageArticle = element.image;
    console.log(afficherImageArticle); 


    let HTML =`
    <div id="articles">

          <div class="image">
          <img src="${afficherImageArticle}" alt="image">
          </div> 


          <div class="text">
         
            <h2>"${afficherTitreArticle}"</h2>
            <h2> ${afficherThemeArticle} - ${afficherDateArticle} </h2>
         
             <div  class="button3">
             <a href="#">Lire l'article</a>
             </div>
          </div>  


      </div>
    
    
    `;
     

    let articleId = document.getElementById('articles');
    console.log(articleId);

    articleId.insertAdjacentHTML("beforeend", HTML);

    });


    }; 
    afficherLesArticles ();

///FIN DE LA FONCTION AFFICHER LES ARTICLES --------------------------------



///PARTIE AUTEURS
let auteurs = document.getElementById("auteurs");
data.journal.auteurs.forEach ((element) => {
  let auteurElment =`<section class="auteur">
  <h2>${element.prenom} - ${element.typeExperience}</h2>
  <img class="avatar2" src="${element.image}" alt="${element.prenom}">
  <p>${element.presentation}</p>
</section>` 

console.log(element.prenom);

auteurs.insertAdjacentHTML("beforeend", auteurElment)

});
//Console log le tableau J.SON

console.log(data);
///FIN DE LA PARTIE AUTEURS----------------------------------------------------------------






///PARTIE FOOTER
function footerthemes() {
let themes = data.journal.themes;
themes.forEach ((element) => {
  let themeElment = `<li><a href="">${element.nom}</a>
  <p>${element.description}</p>
</li>`; 

let footerTheme = document.getElementById("footerTheme");
footerTheme.insertAdjacentHTML("beforeend", themeElment);

});


}

footerthemes();





      

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici