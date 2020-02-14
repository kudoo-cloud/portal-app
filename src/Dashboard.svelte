<script>
  import Tailwindcss from './Tailwindcss.svelte';
  import { navigate } from 'svelte-routing';
  import { db, userEmail } from './stores.js';
  import Drawer from './components/Drawer.svelte';
  import CreateApp from './components/CreateApp.svelte';

  let appCreated = false;
  let domainTasksComplete = 0;
  let configureAppTasksComplete = 0;
  let licensingTasksComplete = 0;
  let stripeTasksComplete = 0;

  function onSubmit() {
    navigate('/domain', { replace: false });
  }

  if ($userEmail !== undefined) {
    //lookup the user email document
    var docRef = $db.collection('users').doc($userEmail);

    docRef
      .get()
      .then(function(doc) {
        if (doc.exists) {
          console.log('Document data:', doc.data());
          if (doc.data().app.name !== undefined) {
            appCreated = true;
          }
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!');
        }
      })
      .catch(function(error) {
        console.log('Error getting document:', error);
      });
    console.log('This is working');
  }
</script>

<style>
  #portal {
    @apply bg-k-white flex flex-col order-2;
  }

  .step {
    @apply bg-k-green;
  }
</style>

{#if appCreated === false}
  <CreateApp />
{:else}
  <Drawer />
  <div id="portal">
    <h1>Welcome to your Portal</h1>
    <p>
      Here you will have access to your app’s metrics. To help you get started
      we have created a simple checklist for you to complete in order to ensure
      your experience runs smoothly.
    </p>
    <h2>Tasks</h2>
    <div class="step">
      <button on:click={onSubmit}>
        <h3>Setup your Domain</h3>
        <h4>{domainTasksComplete} of 3 steps completed</h4>
      </button>
    </div>
    <div class="step">
      <a href="">
        <h3>Configure your app</h3>
        <h4>{configureAppTasksComplete} of 3 steps completed</h4>
      </a>
    </div>
    <div class="step">
      <a href="">
        <h3>Setup licensing</h3>
        <h4>{licensingTasksComplete} of 3 steps completed</h4>
      </a>
    </div>
    <div class="step">
      <a href="">
        <h3>Setup Payments with Stripe</h3>
        <h4>{stripeTasksComplete} of 3 steps completed</h4>
      </a>
    </div>
  </div>
{/if}
