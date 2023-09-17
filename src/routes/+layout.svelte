<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { goto } from '$app/navigation'


  interface languagesInterface {
    name: string;
  }

  let languagesData: string[] = [];
  let isToggled = false;
  let currentTableNumber: number = 0;

  const callWaiter = () => {
    alert("Waiter Called");
  };

  const clickLanguages = () => {
    console.log("clicked")
    isToggled = !isToggled;
  }

  const goToDifferentLangPage = (curLang: string) => {
    const { url } = $page;

    const targetLang = curLang === "한국어" ? "ko" : "en";
    const otherRoutes = url.pathname.split('/').slice(2);
    
    let destinationUrl = `/${targetLang}`;

    otherRoutes.forEach(el => destinationUrl += `/${el}`);

    if(url.pathname === destinationUrl) return;

    goto(destinationUrl);
  }

  onMount ( async () => {
    const responseA: Response = await fetch('/api/languages');
    const dataA: languagesInterface[] = await responseA.json();
    const newDataA = Object.values(dataA).map((el: languagesInterface) => el.name);  
    languagesData = newDataA;
    
    const responseB: Response = await fetch('/api/table_number');
    const dataB: string = await responseB.json();
    const newDataB = Number(dataB);
    currentTableNumber = newDataB;
  });

</script>

<header class="quiz-header">
  <button class="quiz-header-menu lang-change btn-style-remove" on:click={clickLanguages}>
    English
    <img class="change-lang-emoji" src="/chevron-down.png" alt="change language" />
    {#if languagesData.length > 0 && isToggled}
      <div class="languages-change-toggle-container">
        {#each languagesData as item,index (index)}
          <button class="change-toggle-button" on:click={() => goToDifferentLangPage(item)}>{item}</button>
        {/each}
      </div>
    {/if}
  </button>
  <button class="quiz-header-menu pr call-waiter btn-style-remove" on:click={callWaiter}>
    <img class="emoji" src="/notifications_active.png" alt="call waiter" />
    Call Waiter
  </button>
  <div class="quiz-header-menu disable-highlight pr view-bill">
    <img class="emoji" src="/receipt.png" alt="view bill" />
    View Bill
  </div>
  <div class="quiz-header-menu disable-highlight pr my-cart">
    <img class="emoji" src="/shopping_cart.png" alt="my cart" />
    My Cart
    <div class="count-products">0</div>
  </div>
  <div class="quiz-header-menu table">
    <img class="emoji table-emoji" src="/table.png" alt="table number" />
    <span class="table-number">{currentTableNumber}</span>
  </div>
</header>
<slot/>

<style>
  .quiz-header{
    display: flex;
    align-items: center;
    background-color: rgba(22, 19, 19);
    width: 100%;
  }

  .quiz-header-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
    border-right: 1px solid rgb(54, 54, 54);
  }

  .lang-change {
    width: 17%;
    position: relative;
  }

  .call-waiter {
    width: 23%;
  }

  .view-bill {
    width: 21%
  }

  .my-cart {
    width: 25%;
  }

  .table {
    width: 14%;
  }

  .change-lang-emoji {
    width: 24px;
    height: 24px;
    margin: 0px 8px 0px 24px
  }

  .pr {
    padding-right: 45px;
  }
  
  .emoji {
    width: 20px;
    height: 20px;
    margin: 0px 8px 0px 24px
  }

  .disable-highlight {
    color: rgb(121, 121, 121);
  }

  .count-products {
    width: 26px;
    height: 26px;
    margin-left: 10px;
    color: rgb(143, 143, 143);
    border-radius: 13px;
    background-color: rgb(82, 75, 75);
    text-align: center;
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
  }

  .table-emoji {
    margin-left: 0;
  }

  .table-number {
    font-size: 26px;
  }

  .btn-style-remove{
    border: none;
    border-right: 1px solid rgb(54, 54, 54);
    outline: none;
    background: none;
    cursor: pointer;
  }

  .languages-change-toggle-container {
    position: absolute;
    width: calc(100% - 2px);
    display: flex;
    flex-direction: column;
    top: 44px;
    z-index: 5;
    height: fit-content;
    border: 1px solid #a0a0a0;
  }

  .change-toggle-button {
    width: 100%;
    padding: 10px 0;
    outline: none;
    border: none;
    letter-spacing: 0.6px;
    font-family: 'Roboto', 'Sans-Serif';
    font-size: 16px;
    font-weight: 600;
  }

  .change-toggle-button:hover {
    cursor: pointer;
    background-color: rgb(168, 168, 168);
  }
</style>