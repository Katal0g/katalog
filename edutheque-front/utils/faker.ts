import type { Ressource } from "~/models";
import { faker } from "@faker-js/faker/locale/fr";
import { subjects } from "~/models";

export const generateResources = (length: number): Ressource[] => {
  const resources: Ressource[] = [];

  for (let i = 0; i < length; i++) {
    // Just to have uppercase first letter
    let fakeTitle = faker.company.buzzNoun();
    const title = fakeTitle.charAt(0).toUpperCase() + fakeTitle.slice(1);
    const image = faker.image.url({ width: 150, height: 150 });
    const description = faker.lorem.sentences(3);
    const link = faker.internet.url();
    const nbTags = Math.floor(Math.random() * 4) + 1;
    const tags = Array.from(
      { length: nbTags },
      () => subjects[Math.floor(Math.random() * subjects.length)],
    );

    resources.push({ title, image, description, link, tags });
  }

  return resources;
};
