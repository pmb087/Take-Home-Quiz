import { json } from '@sveltejs/kit';
import { tableNumber } from '$lib/tableNumber';

export function GET() {
  return json(tableNumber);
}