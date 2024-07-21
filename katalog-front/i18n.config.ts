export default defineI18nConfig(() => ({
  legacy: false,
  locale: "fr",
  messages: {
    en: {
      resources: "Resources",
      help: "Help",
      researchPage: {
        author: "Author",
        moreInfos: "More informations",
        search: "Search",
        use: "Use",
        lastUpdated: "Last updated",
        goToResource: "Go to resource",
      },
      scholar: {
        level: "Level",
        subject: "Subject",
        title: "Title",
      },
      utils: {
        simpleSearch: "Search",
        select: "Select a {field}",
        search: "Search by {field}",
        enter: "Enter your {field}",
        required: "Required",
        results_count: "{count} result | {count} results",
        query_time: "in {time}s",
      },
      helpPage: {
        intro: "Welcome to Katalog's help page. This project aims to facilitate the search for educational resources present on multiple sources.",
        credits: "Katalog retrieves content shared by users from different platforms. Resources are the property of their respective authors. Katalog itself is an open-source product and the goal behind it is also to promote open-source and knowledge sharing.",
        contact: "Questions, suggestions, bugs to report? Do not hesitate to access our organization at the link below to contact us.",
        github: "Katalog organization on GitHub",
        title: {
          intro: "Intro",
          credits: "Credits",
          contact: "Contact",
        }
      }
    },
    fr: {
      resources: "Ressources",
      help: "Aide",
      researchPage: {
        author: "Auteur",
        moreInfos: "Plus d'informations",
        search: "Rechercher",
        use: "Utiliser",
        lastUpdated: "Dernière mise à jour",
        goToResource: "Aller à la ressource",
      },
      scholar: {
        level: "Niveau",
        subject: "Matière",
        title: "Titre",
      },
      utils: {
        simpleSearch: "Rechercher",
        select: "Sélectionner un {field}",
        search: "Rechercher par {field}",
        enter: "Entrez votre {field}",
        required: "Obligatoire",
        results_count: "{count} résultat | {count} résultats",
        query_time: "{time}s",

      },
      helpPage: {
        intro: "Bienvenue sur la page d'aide de Katalog. Ce projet a pour objectif de faciliter la recherche de ressources pédagogiques présentes sur plusieurs sources.",
        credits: "Katalog récupère des contenus partagés par des utilisateurs de différentes plateformes. Les ressources sont la propriété de leurs auteurs respectifs. Katalog est lui même un produit open-source et l'objectif derrière celui-ci est aussi de promouvoir l'open-source et le partage de connaissances.",
        contact: "Des questions, des suggestions, des bugs à signaler ? N'hésitez pas à accéder à notre organisation sur le lien ci-dessous pour nous contacter.",
        github: "Organisation Katalog sur GitHub",
        title: {
          intro: "Intro",
          credits: "Crédits",
          contact: "Contact",
        }
      }
    },
  },
}));
