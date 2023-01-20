<template>
  <ul class="list-unstyled filters">
    <li>
      <div><h4>Бренд</h4></div>
      <ul class="list-unstyled">
        <li>
          <input type="checkbox"> Nike
        </li>
        <li>
          <input type="checkbox"> Adidas
        </li>
        <li>
          <input type="checkbox"> New Balance
        </li>
        <li>
          <input type="checkbox"> Jordan
        </li>
      </ul>
    </li>
    <li>
      <div><h4>Пол</h4></div>
      <ul class="list-unstyled">
        <li>
          <input type="checkbox"> Мужское
        </li>
        <li>
          <input type="checkbox"> Женское
        </li>
      </ul>
    </li>
    <li>
      <div><h4>Сезон</h4></div>
      <ul class="list-unstyled">
        <li>
          <input type="checkbox"> Зима
        </li>
        <li>
          <input type="checkbox"> Весна
        </li>
        <li>
          <input type="checkbox"> Лето
        </li>
        <li>
          <input type="checkbox"> Осень
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: "CatalogFilters"
}
</script>

<style>
  .filters li {
    display: block;
    margin: 0 0 10px 0;
    cursor: pointer;
    user-select: none;
    position: relative;
  }

  .filters li:first-child {
    border-top: none;
    padding-top: 0;
  }

  .filters li ul {
    margin-top: 5px;
  }

  .filters li ul li {
    font-weight: normal;
    border-top: none;
    padding: 2px 0;
  }
</style>