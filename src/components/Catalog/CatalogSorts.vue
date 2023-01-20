<template>
  <div class="sorts d-flex justify-content-between">
    <div>
      <select>
        <option>Сортировать</option>
        <option>по названию</option>
        <option>по бренду</option>
      </select>
    </div>
    <div class="sorts-checkbox">
      <div class="sorts-item">
        <label>
          <input type="checkbox"> Есть наличии
        </label>
      </div>
      <div class="sorts-item">
        <label>
          <input type="checkbox"> Есть скидка
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogSorts"
}
</script>

<style>
  .sorts {
    padding-bottom: 20px;
  }

  .sorts .sorts-checkbox {
    display: flex;
    margin: 0 0 10px 0;
    cursor: pointer;
    user-select: none;
    position: relative;
  }

  .sorts .sorts-checkbox .sorts-item {
    margin-left: 15px;
  }

  .sorts select {
    padding: 0 15px;
  }
</style>