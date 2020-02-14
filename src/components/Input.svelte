<script>
  let value = '';
  let slots = $$props.$$slots;

  // Class Props
  export let rootClass = '';
  export let labelClass = '';
  export let inputWrapperClass = '';
  export let leftIconClass = '';
  export let inputClass = '';
  export let rightIconClass = '';
  export let errorClass = '';

  export let label = '';

  // TextInput props
  export let placeholder = '';
  export let required = false;
  export let id = '';
  export let name = '';
  export let type = 'text';

  // Error Props
  export let error = undefined;
  export let showError = false;
</script>

<style>

</style>

<div class={rootClass}>
  
  <!-- Label -->
  {#if label}
    <label class={labelClass}>{label}</label>
  {/if}
  
  <div class="flex flex-row border rounded-md h-16 {inputWrapperClass}">

    <!-- Left Slot Icon -->
    {#if slots.leftIcon}
      <div
        class="ml-3 h-16 w-10 flex justify-center items-center {leftIconClass}">
        <slot name="leftIcon" />
      </div>
    {/if}

    <!-- Input Field -->
    <input
      {id}
      {name}
      {required}
      {type}
      {placeholder}
      class="block w-full bg-transparent text-k-light-grey px-3 border-0
      outline-none {inputClass}" />

    <!-- Right Slot Icon -->
    {#if slots.rightIcon}
      <div
        class="mr-3 h-16 w-10 flex justify-center items-center {rightIconClass}">
        <slot name="rightIcon" />
      </div>
    {/if}

  </div>

  <!-- Error -->
  {#if error && showError}
    <div class={errorClass}>{error}</div>
  {/if}
  
</div>
