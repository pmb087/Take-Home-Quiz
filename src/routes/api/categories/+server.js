import { json } from '@sveltejs/kit';
import { categories } from '$lib/categories';

export function GET() {
  return json(categories);
}