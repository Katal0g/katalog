import {Gitlab} from '@gitbeaker/rest';

const api = new Gitlab({
    host: 'https://forge.apps.education.fr/',
});

export default defineEventHandler(async () => {
    return await api.Projects.all();
});