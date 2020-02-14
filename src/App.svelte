<script>
  import Tailwindcss from './Tailwindcss.svelte';
  import { userLoggedIn } from './stores.js';
  import CreateApp from './components/CreateApp.svelte';
  import Login from './Login.svelte';
  import ConfirmEmail from './components/ConfirmEmail.svelte';
  import ForgotPassword from './components/ForgotPassword.svelte';
  import Configure from './components/Configure.svelte';
  import Domain from './components/Domain.svelte';
  import Licensing from './components/Licensing.svelte';
  import Stripe from './components/Stripe.svelte';
  import Dashboard from './Dashboard.svelte';
  import { Router, Link, Route } from 'svelte-routing';

  export let url = '';
</script>

<Router {url}>
  <div>
    <Route path="confirm-email" component={ConfirmEmail} />
    <Route path="forgot-password" component={ForgotPassword} />
    <Route path="dashboard" component={Dashboard} />
    <Route path="login" component={Login} />
    <Route path="configure" component={Configure} />
    <Route path="licensing" component={Licensing} />
    <Route path="stripe" component={Stripe} />
  </div>
</Router>

{#if !$userLoggedIn}
  <Login />
{:else}
  <Dashboard />
{/if}
