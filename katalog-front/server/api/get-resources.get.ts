import {H3Event} from "h3";
import ky from "ky";

export default defineEventHandler(async (event: H3Event) => {
  const query = getQuery(event);
  const page = query.page || 1;
  const perPage = query.perPage || 30;
  const searchQuery = query.query || "";

  try {
    return await ky("http://localhost:3333/api/v1/resources", {
      searchParams: {
        page: Number(page), // Convert to number
        perPage: Number(perPage), // Convert to number
        query: String(searchQuery),
      },
    }).json();
  } catch (error: any) {
    throw createError({
      statusCode: error.response?.status || 500,
      statusMessage: error.message,
    });
  }
});