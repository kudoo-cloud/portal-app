<script>
  import Tailwindcss from '../Tailwindcss.svelte';
  import { fb } from '../stores.js';

  let email;
  function resetPassword() {
    $fb.firebase_
      .auth()
      .sendPasswordResetEmail(email)
      .then(function() {
        // Email sent.
      })
      .catch(function(error) {
        // An error happened.
      });
  }
</script>

<style>
  .forgot-password-page {
    background-color: #f7f7fc;
    padding: 45px;
    font-family: 'montserrat', sans-serif;
  }

  .title {
    color: #2598d2;
    margin: 10px 0px;
    font-family: Roboto, sans-serif;
    font-size: 32px;
    font-weight: 500;
    text-align: center;
  }

  .green-text-color {
    color: #2bc88f;
  }

  .middle-container {
    margin: 0px auto;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .form {
    width: 100%;
  }

  .form-error-text {
    color: red;
    margin: 10px 0px 20px 0px;
    text-align: center;
    font-size: 15px;
    font-family: 'montserrat', sans-serif;
  }

  .email-input {
    margin-bottom: 20px;
  }

  .mail-sent-icon {
    width: 100px;
    height: 100px;
    margin: 30px 0px 25px 0px;
  }

  .message-wrapper {
    line-height: 24px;
    text-align: center;
    color: #ef9121;
    font-weight: 500;
    margin-bottom: 10px;
    font-size: 16px;
  }

  .message-desc {
    text-align: center;
    color: #a8a8a8;
    margin-bottom: 20px;
    font-size: 15px;
  }

  .signin-btn-text {
    color: #222;
  }
</style>

<div class="container mx-auto">
  Reset your password Can’t remember your password? Tell us your email address
  and we will send you a reset link.
  <input bind:value={email} />
  <button on:click={resetPassword}>Reset password</button>
</div>
