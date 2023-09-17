import { json } from '@sveltejs/kit';
import { languages } from '$lib/languages';

export function GET() {
  return json(languages);
}