import { json } from '@sveltejs/kit';
import { categories } from '$lib/categories';

export function GET(requestEvent) {
  const { params } = requestEvent;
  const { categoryName } = params;

  const findedCategoryInfo = Object.values(categories).find(el => el.name === categoryName);

  if(!findedCategoryInfo) return json({});

  return json(findedCategoryInfo);
}