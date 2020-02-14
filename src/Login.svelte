<script>
  import Tailwindcss from './Tailwindcss.svelte';
  import ToggleButton from './components/ToggleButton.svelte';
  import Input from './components/Input.svelte';
  import Button from './components/Button.svelte';
  import { userLoggedIn, userEmail, fb, db } from './stores.js';
  import { navigate, link, Router } from 'svelte-routing';
  let firstName = '';
  let lastName = '';
  let email = '';
  let password = '';
  let repeatPassword = '';
  let errorMessage = '';
  let selectedForm = 0;

  function forgotPassword() {
    navigate('/forgot-password', { replace: false });
  }

  function doPasswordsMatch() {
    if (password === repeatPassword) {
      console.log('Passwords match');
    } else console.log("Passwords don't match");
  }

  async function createUserInFirebase() {
    $db
      .collection('users')
      .doc(email)
      .set({
        firstName: firstName,
        lastName: lastName,
      })
      .then(function() {
        console.log('Document successfully written!');
      })
      .catch(function(error) {
        console.error('Error writing document: ', error);
      });
  }

  function register() {
    $fb.firebase_
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function(user) {
        if (user.user && user.user.emailVerified === false) {
          user.user.sendEmailVerification().then(function() {
            console.log('email verification sent to user');
            state = 'emailSent';
            console.log('State is: ' + state);
          });
        }
      })
      .then(() => {
        createUserInFirebase();
        navigate('/confirm-email', { replace: false });
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        console.log('Error code: ' + errorCode);
        errorMessage = error.message;
        console.log('Error message: ' + errorMessage);
        // ...
      });
  }

  async function login() {
    userEmail.update(n => email);
    console.log($userEmail);
    await $fb.firebase_
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        if (user.user.emailVerified) {
          userLoggedIn.set(true);
        } else errorMessage = 'Please confirm your email before logging in';
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        console.log('Error code: ' + errorCode);
        errorMessage = error.message;
        console.log('Error message: ' + errorMessage);
        return;
      });
  }

  function changeState(index) {
    selectedForm = index;
  }
</script>

<style>

</style>

<div class="container mx-auto max-w-md">
  <img
    class="h-20 w-20 mr-auto ml-auto"
    src="images/kudoo-icon.png"
    alt="Kudoos logo" />
  <h1 class="text-k-white font-display text-4xl text-center mt-4 mb-8">
    Welcome to Kudoo
  </h1>
  <div class="mb-6">
    <ToggleButton
      buttons={['Sign In', 'Create Account']}
      on:select={e => changeState(e.detail.index)} />
  </div>

  {#if selectedForm === 0}
    <div class="container mx-auto">
      <Input
        id="email"
        required
        type="email"
        placeholder="Email"
        inputWrapperClass="border-b-0 rounded-b-none"
        bind:value={email}>
        <div slot="leftIcon">
          <img src="images/icons/email.png" alt="Email Icon" />
        </div>
      </Input>
      <Input
        id="password"
        required={true}
        type="password"
        placeholder="Password"
        inputWrapperClass="rounded-t-none"
        bind:value={password}>
        <div slot="leftIcon">
          <img src="images/icons/lock_green.png" alt="Lock Icon" />
        </div>
      </Input>
      <Button rootClass="mt-6">
        <div slot="content">Login</div>
      </Button>
      <Button variant="text">
        <div slot="content">Forgot password</div>
      </Button>
    </div>
  {:else if selectedForm === 1}
    <div class="container mx-auto">
      <Input
        id="firstName"
        required
        placeholder="First Name"
        inputWrapperClass="border-b-0 rounded-b-none"
        bind:value={firstName}>
        <div slot="leftIcon">
          <img src="images/icons/user.png" alt="User Icon" />
        </div>
      </Input>
      <Input
        id="lastName"
        required
        placeholder="Last Name"
        inputWrapperClass="border-b-0 rounded-b-none rounded-t-none"
        bind:value={lastName}>
        <div slot="leftIcon">
          <img src="images/icons/user.png" alt="User Icon" />
        </div>
      </Input>
      <Input
        id="email"
        required
        type="email"
        placeholder="Email"
        inputWrapperClass="border-b-0 rounded-b-none rounded-t-none"
        bind:value={email}>
        <div slot="leftIcon">
          <img src="images/icons/email.png" alt="Email Icon" />
        </div>
      </Input>
      <Input
        id="password"
        required={true}
        type="password"
        placeholder="Password"
        inputWrapperClass="border-b-0 rounded-b-none rounded-t-none"
        bind:value={password}>
        <div slot="leftIcon">
          <img src="images/icons/lock_green.png" alt="Lock Icon" />
        </div>
        <div slot="rightIcon" class="cursor-pointer">
          <img src="images/icons/eye_gray.png" alt="Eye Icon" />
        </div>
      </Input>
      <Input
        id="repeatPassword"
        required={true}
        type="password"
        placeholder="Re type Password"
        inputWrapperClass="rounded-t-none"
        bind:value={repeatPassword}>
        <div slot="leftIcon">
          <img src="images/icons/lock_gray.png" alt="Lock Icon" />
        </div>
        <div slot="rightIcon" class="cursor-pointer">
          <img src="images/icons/eye_gray.png" alt="Eye Icon" />
        </div>
      </Input>
      <h4>{errorMessage}</h4>
      <Button rootClass="mt-6">
        <div slot="content">Create Account</div>
      </Button>
    </div>
  {/if}
</div>
