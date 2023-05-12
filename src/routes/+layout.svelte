<script lang="ts">
  import "../app.scss";
  import "@picocss/pico/scss/pico.scss";
  import "iconify-icon";
  import Darkmode from "./darkmode.svelte";
  import { goto } from "$app/navigation";
  import { slide } from 'svelte/transition';
  import { sineInOut } from 'svelte/easing';

  let hamburger = false;

</script>

<main>
  <nav class="container-fluid">
    <ul on:click={() => goto('/')} on:keydown>
      <li><img src="/profile.jpg" alt=""/></li>
      <li><strong>Khang Tran</strong></li>
    </ul>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact" role="button">Contact</a></li>
      <li><Darkmode /></li>
      <li><a href={""} on:click={() => hamburger = !hamburger}><iconify-icon icon="lucide:menu"/></a></li>
    </ul>
  </nav>
  
  {#if hamburger}
  <aside transition:slide={{duration: 500, easing: sineInOut}} >
      <li><a href="/" role="button">Home</a></li>
      <li><a href="/about" role="button">About</a></li>
      <li><a href="/contact" role="button">Contact</a></li>
  </aside>
  {/if}
</main>

<slot />

<style lang="scss">
  img {
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
  }
  main {
    background-color: $gray;
  }
  aside {
    padding: .3rem;
    padding-bottom: .5rem;
    li {
      margin: .1rem 0 .1rem 0;
      padding: 0;
    }
    a {
      width: 100%;
      padding: .2rem;
    }
  }
  main > nav {    
    > :last-child {
      li {

        &:nth-child(-n+3) {
          display: none;

          @include media(xl) {
            display: inline-block;
          }
        }
        
        &:nth-last-child(2) {
          @include media(xl){
            padding: 0 1rem 0 1rem;
          }
        }

        &:last-child {
          padding: 0 1rem 0 1rem;

          @include media(xl) {
            display: none;
          }

          a {
            display: flex;
            justify-content: center;
            align-items: center;
            color: unset;
            border: solid;
            border-radius: 15%;
          }
        }
      }
    }
  }
</style>
