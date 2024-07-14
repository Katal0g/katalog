export default defineI18nConfig(() => ({
  legacy: false,
  locale: "fr",
  messages: {
    en: {
      generator: "Generator",
      ressources: "Resources",
      help: "Help",
      generatorPage: {
        content: "Content",
        export: "Export",
        contentPlaceholder: "Your content will be generated here...",
        generateContent: "Generate the content",
        nbQuestions: "Nb of questions",
        robotsWorking:
          "Our little robots are working hard to generate the content...",
      },
      researchPage: {
        author: "Author",
        moreInfos: "More informations",
        search: "Search",
        use: "Use",
        lastUpdated: "Last updated",
      },
      scholar: {
        level: "Level",
        subject: "Subject",
        title: "Title",
      },
      utils: {
        select: "Select a {field}",
        search: "Search by {field}",
        enter: "Enter your {field}",
        required: "Required",
      },
    },
    fr: {
      generator: "Générateur",
      ressources: "Ressources",
      help: "Aide",
      generatorPage: {
        content: "Contenu",
        export: "Exporter",
        contentPlaceholder: "Votre contenu sera généré ici...",
        generateContent: "Générer le contenu",
        nbQuestions: "Nb de questions",
        robotsWorking:
          "Nos petits robots travaillent dur pour générer le contenu...",
      },
      researchPage: {
        author: "Auteur",
        moreInfos: "Plus d'informations",
        search: "Rechercher",
        use: "Utiliser",
        lastUpdated: "Dernière mise à jour",
      },
      scholar: {
        level: "Niveau",
        subject: "Matière",
        title: "Titre",
      },
      utils: {
        select: "Sélectionner un {field}",
        search: "Rechercher par {field}",
        enter: "Entrez votre {field}",
        required: "Obligatoire",
      },
    },
  },
}));
