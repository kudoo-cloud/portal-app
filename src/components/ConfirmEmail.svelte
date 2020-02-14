<script>
 import { navigate } from "svelte-routing";
const src="images/message-sent-icon.png";

function onSubmit() {
 navigate("/login", { replace: true });
}

</script>

<style>
  .verify-email-page {
    background-color: #f7f7fc;
    padding: 45px;
    font-family: "montserrat", sans-serif;
    height: calc(100vh - 270px);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .title {
    color: #2598d2;
    margin: 10px 0px;
    font-family: Roboto, sans-serif;
    font-size: 32px;
    font-weight: 500;
  }

  .middle-container {
    margin: 0px auto;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .mail-sent-icon {
    width: 100px;
    height: 100px;
    margin: 30px 0px 25px 0px;
  }

  .message-wrapper {
    line-height: 24px;
    text-align: center;
    color: #2598d2;
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

  .resend-btn {
    margin-bottom: 15px;
  }

  .signin-btn {
    padding: 15px 0px;
  }
</style>

<main>
  <!-- Confirm Email-->
  <div>
  <!---->
    <div class="title">Thank you for signing up</div>
    <div class="middle-container">
      <img class="mail-sent-icon" src="images/message-sent-icon.png" alt="Mail sent" />
      <div class="message-wrapper">
        <div class="message-title">Verify your email</div>
        <div class="message-desc">
          Please check your email and verify your account by clicking the link
          provided.
        </div>
      </div>
      <button on:click={onSubmit} class="signin-btn">Back to sign in</button>
    </div>
  </div>
  <!-- Confirm Email Success-->
  <!--
  <div>
    <div class="title">Your email has been verified!</div>
    <div class="middle-container">
      <img
        class="mail-sent-icon"
        src="images/message-sent-icon.png"
        alt="Mail sent" />
      <div class="message-wrapper">
        <div class="message-desc">
          You are officially a part of the Kudoo team.
          <br />
          Let’s get started.
        </div>
      </div>
      <button href="/login" class="signin-btn" />
    </div>
  </div>
    -->
  <!-- Confirm Email Error-->
  <!--
  <div>
    <div class="title">Link is expired or invalid.</div>
    <div className="middle-container">
      <img
        className="mail-sent-icon"
        src="images/message-sent-icon.png"
        alt="Mail sent" />
      <button href="/login" class="signin-btn" />
    </div>
  </div>
  -->
</main>
