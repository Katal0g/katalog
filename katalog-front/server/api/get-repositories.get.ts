import { Gitlab } from '@gitbeaker/rest';

const api = new Gitlab({
    host: 'https://forge.apps.education.fr/',
});

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const page = Number(query.page) || 1;
    const perPage = Number(query.perPage) || 25;
    const searchQuery = query.query as string || '';

    const { data, paginationInfo } = await api.Projects.all({
        pagination: 'offset',
        page,
        perPage,
        showExpanded: true,
        search: searchQuery,
        searchNamespaces: true,
    });

    return {
        data,
        paginationInfo
    };
});