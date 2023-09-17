<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  interface categoryData {
      id: string;
      name: string;
      picture: string;
      productOrder: string;
      description?: string;
    }

  interface categoriesData {
    [key: string]: categoryData
  }

  let fetchedData: categoryData[] = [];

  onMount ( async () => {
    const response: Response = await fetch('/api/categories');
    const data: categoriesData = await response.json();
    const newData = Object.values(data).map((el: categoryData) => el);  
    fetchedData = newData;
  });

  const goToProducts = (name: string) => {
    const { lang } = $page.params;
    const destinationUrl = `/${lang}/products/${name}`;

    goto(destinationUrl);
  }

</script>

<div class="category-wrap">
  {#each fetchedData as item (item.id)}
    <button class="category-single" on:click={() => goToProducts(item.name)}>
        <img class="category-image" src={item.picture + `?cache=${Math.floor(Math.random() * 100)}`} alt="category"/>
        <span class="category-name">{item.name}</span>
    </button>
  {/each}
</div>

<style>
  .category-wrap {
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
  }

  .category-single {
    position: relative;
    width: 180px;
    height: 180px;
    border-radius: 5px;
    background-color: rgb(238, 238, 238);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px;
    outline: none;
    border: none;
  }

  .category-single:hover {
    cursor: pointer;
    background-color: rgb(214, 214, 214);
  }

  .category-image {
    position: absolute;
    top: -5px;
    width: 120px;
    height: 120px;
    border-radius: 60px;
    box-shadow: 2px 2px 6px #a8a8a8;
  }

  .category-name {
    font-family: 'Roboto', 'Sans-Serif';
    position: absolute;
    bottom: 20px;
    letter-spacing: 0.6px;
    font-weight: 600;
    color: rgb(27, 27, 27);
    font-size: 18px;
  }
</style>