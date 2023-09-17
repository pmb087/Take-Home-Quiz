<script lang="ts">  
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  interface product {
    description: string;
    id: string;
    name: string;
    picture?: string;
    price: number;
  } 

  interface categoryData {
    id: string;
    name: string;
    picture: string;
    productOrder: string;
    description?: string;
  }

  let productsData: product[];
  let categoryData: categoryData;

  onMount ( async () => {
    const responseA: Response = await fetch(`/api/products/${$page.params.categoryName}`);
    const dataA: product[] = await responseA.json();
    productsData = dataA;
    
    const responseB: Response = await fetch(`/api/categories/${$page.params.categoryName}`);
    const dataB: categoryData = await responseB.json();
    categoryData = dataB;
  });

  const goBackCategories = () => {
    const { lang } = $page.params;
    goto(`/${lang}/categories`);
  }
</script>

{#if categoryData}
  <header class="products-header">
    <button class="products-header-btn" on:click={goBackCategories}>      
      <img class="arrow-image" src="/arrow.png" alt="arrow" />
    </button>
    <span class="products-header-title">{categoryData.name}</span>
    {#if categoryData.description}
      <div class="split"></div>
      <span class="products-header-desc">{categoryData.description}</span>
    {/if}
  </header>
{/if}
{#if productsData}
  <div class="products-container">    
    {#each productsData as item (item.id)}
      <div class="product-single">
        {#if item.picture}
          <img class="product-image" src={item.picture + `?cache=${Math.floor(Math.random() * 100)}`} alt="product"/>
        {:else}
          <div class="skelleton-image">
            <p class="inner-skelleton">{item.name}</p>
          </div>
        {/if}
        <span class="product-name">{item.name}</span>
        <span class="product-price">{`$${(item.price/100).toFixed(2)}`}</span>
      </div>
    {/each}
  </div>
{/if}

<style>
  .products-header{
    display: flex;
    align-items: center;
    padding: 15px;
  }

  .products-header-btn {
    outline: none;
    border: none;
    width: 70px;
    height: 44px;
    border-radius: 5px;
    box-shadow: 1px 1px 5px #a0a0a0;
    background-color: #ffffff;
  }

  .arrow-image {
    width: 20px;
    height: 20px;
  }

  .products-header-title {
    margin-left: 20px;
    font-size: 30px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
  }

  .products-header-desc {
    margin-left: 20px;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    color: #808080
  }

  .split {
    width: 0px;
    height: 0px;
    border: 2px solid #808080;
    margin-left: 20px;
    border-radius: 2px;
  }

  .products-container {
    display: flex;
    flex-wrap: wrap;
  }

  .product-single {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px;
  }

  .product-image {
    width: 300px;
    height: 220px;
    border-radius: 15px;
    margin-bottom: 10px;
  }

  .skelleton-image {
    width: 300px;
    height: 220px;
    border-radius: 15px;
    margin-bottom: 10px;
    background-color: #DFDFDF;
  }

  .inner-skelleton {
    font-size: 30px;
    color: #ffffff;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
    margin: 10px 20px;
  }

  .product-name {
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 10px;
  }

  .product-price {
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    color: #505050;
  }
</style>