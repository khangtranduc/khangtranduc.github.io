<script lang="ts">
    import "@picocss/pico/scss/pico.scss";
    import { goto } from '$app/navigation';
    import Darkmode from './darkmode.svelte';
</script>

<main>
    <nav class="container-fluid">
        <ul on:click={() => goto('/')} on:keydown>
          <li><img src="/profile.jpg" alt=""/></li>
          <li><strong>Khang Tran</strong></li>
        </ul>
        <ul>
          <li><iconify-icon icon="lucide:github"/></li>
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
</style>