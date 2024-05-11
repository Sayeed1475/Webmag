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
      ///FIN DE LA FONCTION NAV THEMES




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

      //Apres avoir ajouter un id sur le code HTML j'utilise la méthode innerHTML comme pour la phrase d'accroche précédemment. 


      }
      afficherTexteAppelAction();



      

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici