<template>
  <div class="app-card container">
    <slot></slot>
  </div>
</template>

<style>
.app-card {
    font-family: var(--font-main);
    color: var(--color-light);
    font-size: larger;
    font-weight: 700;
    background-color: var(--color-dark);
    padding: 16px;
    padding-left: 16px;
    border-radius: 4px;
}
</style>