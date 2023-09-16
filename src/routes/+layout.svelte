<header class="quiz-header">
  <div class="quiz-header-menu lang-change">
    English
    <img class="change-lang-emoji" src="/chevron-down.png" alt="change language" />
  </div>
  <div class="quiz-header-menu pr call-waiter">
    <img class="emoji" src="/notifications_active.png" alt="call waiter" />
    Call Waiter
  </div>
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
    <span class="table-number">12</span>
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
</style>