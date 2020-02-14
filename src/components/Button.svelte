<script>
  import Spinner from './Spinner.svelte';

  let slots = $$props.$$slots;

  // Class Props
  export let rootClass = '';
  export let leftIconClass = '';
  export let contentClass = '';
  export let rightIconClass = '';

  // Button props
  export let variant = 'raised'; // raised, text, outline
  export let type = 'button'; // type of the button
  export let rounded = true; // rounded button
  export let fullWidth = true; // full width
  export let isLoading = false; // show loading indicator
</script>

<style>
  button:active {
    opacity: 0.5;
  }

  button:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  .variant--raised {
    @apply bg-k-sky text-white border-k-sky;
  }

  .variant--text {
    @apply border-0 text-k-sky bg-transparent;
  }

  .variant--outline {
    @apply border text-k-sky border-k-sky;
  }
</style>

<button
  {type}
  disabled={isLoading}
  class="flex flex-row border h-16 outline-none {rounded ? 'rounded-full' : ''}
  font-bold focus:outline-none variant--{variant}
  {fullWidth ? 'w-full' : ''}
  {rootClass}">

  <!-- Left Slot Icon -->
  {#if slots.leftIcon && !isLoading}
    <div
      class="ml-3 h-16 w-10 flex justify-center items-center {leftIconClass}">
      <slot name="leftIcon" />
    </div>
  {/if}

  <!-- Input Field -->
  <div class="h-16 flex-1 flex items-center justify-center {contentClass}">
    {#if isLoading}
      <Spinner />
    {:else}
      <slot name="content" />
    {/if}

  </div>

  <!-- Right Slot Icon -->
  {#if slots.rightIcon && !isLoading}
    <div
      class="mr-3 h-16 w-10 flex justify-center items-center {rightIconClass}">
      <slot name="rightIcon" />
    </div>
  {/if}

</button>
