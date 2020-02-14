<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let buttons = [];

  let selected = 0;

  const onSelect = i => e => {
    selected = i;
    dispatch('select', {
      index: i,
    });
  };
</script>

<style>
  .item {
    height: 60px;
  }

  .selected {
    @apply bg-k-green text-k-white font-semibold;
  }
</style>

<div class="flex flex-row">
  {#each buttons as button, i}
    <div
      class="py-3 px-5 border border-k-green text-k-green flex-1 text-center
      cursor-pointer bg-transparent justify-center items-center flex font-body
      last:border-r first:rounded-l last:rounded-r border-r-0 item"
      class:selected={selected === i}
      on:click={onSelect(i)}>
      {button}
    </div>
  {/each}
</div>
