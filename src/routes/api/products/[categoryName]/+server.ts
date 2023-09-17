import { json } from '@sveltejs/kit';
import { products } from "$lib/products";
import { categories } from "$lib/categories";

interface product {
  description: string;
  id: string;
  name: string;
  picture?: string;
  price: number;
}

export function GET(requestEvent) {
  const { params } = requestEvent;
  const { categoryName } = params;

  const searchedCategory = Object.values(categories).find(data => data.name === categoryName)?.productOrder;

  if(!searchedCategory || searchedCategory.length < 1) return json([]);

  const currentCategoryProducts: product[] = [];

  searchedCategory.forEach(el => {
    const currentMenu: product | undefined = Object.values(products).find(product => product.id === el);
    if(currentMenu) currentCategoryProducts.push(currentMenu);
  })

  return json(currentCategoryProducts);
}
