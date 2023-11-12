<script lang="ts">
    import "@picocss/pico/scss/pico.scss";
    import "../app.scss";
    import "iconify-icon";
    import { goto } from '$app/navigation';
    import Darkmode from './darkmode.svelte';
</script>

<main>
    <nav class="container-fluid">
        <ul on:click={() => goto('/')} on:keydown>
            <li>
                <img src="/favicon.png" alt=""/>
                <strong>Khang Tran</strong>
            </li>
        </ul>
        <!-- svelte-ignore a11y-unknown-role -->
        <ul role="brands">
          <li><iconify-icon icon="fa6-brands:whatsapp" width="25"/></li>
          <li><iconify-icon icon="fa6-brands:telegram" width="25"/></li>
          <li><iconify-icon icon="fa6-brands:github" width="25"/></li>
          <li><iconify-icon icon="lucide:mail" width="25"/></li>
          <li><iconify-icon on:keydown on:click={() => window.open("https://www.linkedin.com/in/khangtranduc", "_blank")} icon="fa6-brands:linkedin" width="25"/></li>
          <li><Darkmode /></li>
        </ul>
    </nav>
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
        &:hover {
            transition: .3s;
            transform: scale(1.1);
        }
    }
    ul{
        &[role="brands"] {
            >li:nth-child(-n + 5) {
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