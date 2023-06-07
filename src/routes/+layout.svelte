<script lang="ts">
    import "@picocss/pico/scss/pico.scss";
    import "../app.scss";
    import "iconify-icon";
    import { goto } from '$app/navigation';
    import Darkmode from './darkmode.svelte';
    import { slide } from 'svelte/transition';

    let isOpen = false;
</script>

<main>
    <nav class="container-fluid">
        <ul on:click={() => goto('/')} on:keydown>
            <li>
                <img src="/profile.jpg" alt=""/>
                <strong>Khang Tran</strong>
            </li>
        </ul>
        <!-- svelte-ignore a11y-unknown-role -->
        <ul role="brands">
          <li><iconify-icon icon="fa6-brands:whatsapp" width="25"/></li>
          <li><iconify-icon icon="fa6-brands:telegram" width="25"/></li>
          <li><iconify-icon icon="fa6-brands:github" width="25"/></li>
          <li><iconify-icon icon="lucide:mail" width="25"/></li>
          <li><Darkmode /></li>
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <li role="hamburger" on:click={() => isOpen = !isOpen}><iconify-icon icon="lucide:align-justify"/></li>
        </ul>
    </nav>
    <!-- svelte-ignore a11y-unknown-role -->
    {#if isOpen}
    <ul role="drawer" transition:slide>
        <li role="label"><b>Contact Me!</b></li>
        <li><iconify-icon icon="fa6-brands:whatsapp" width="25"/></li>
        <li><iconify-icon icon="fa6-brands:telegram" width="25"/></li>
        <li><iconify-icon icon="fa6-brands:github" width="25"/></li>
        <li><iconify-icon icon="lucide:mail" width="25"/></li>
    </ul>
    {/if}
</main>

<slot/>

<style lang="scss">
    img {
        width: 2rem;
        height: 2rem;
        border-radius: 100%;
    }
    main {
        position: sticky;
        top: 0;
        background-color: $layout-color;
        z-index: 1;
    }
    li {
        display: flex;
        align-items: center;
        gap: .5rem;
        transition: .3s;
        &[role="hamburger"] {
            @include media(xl) {
                display: none;
            }
        }
        &:not([role="label"]){
            &:hover {
                transition: .3s;
                transform: scale(1.1);
            }
        }
    }
    ul{
        &[role="drawer"] {
            display: flex;
            justify-content: space-around;
            margin: 0;
            width: 100%;
        }
        &[role="brands"] {
            >li:nth-child(-n + 4) {
                display: none;
                @include media(xl) {
                    display: flex;
                    align-items: center;
                    gap: .5rem;
                    transition: .3s;
                }
            }
        }
    }
</style>