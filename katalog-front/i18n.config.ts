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
    },
  },
}));
