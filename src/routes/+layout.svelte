<script lang="ts">
  import "../app.scss";
  import "@picocss/pico/scss/pico.scss";
  import "iconify-icon";
  import Darkmode from "./darkmode.svelte";
  import { goto } from "$app/navigation";
</script>

<nav class="container-fluid">
  <ul on:click={() => goto('/')} on:keydown>
    <li><img class="profile" src="/profile.jpg" alt=""/></li>
    <li><strong>Khang Tran</strong></li>
  </ul>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact" role="button">Contact</a></li>
    <li style="padding: 0 1rem 0 1rem;"><Darkmode /></li>
  </ul>
</nav>

<slot />

<style>
  .profile {
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
  }
  nav {
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  }
</style>
