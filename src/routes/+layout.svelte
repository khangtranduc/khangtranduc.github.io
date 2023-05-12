<script lang="ts">
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
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact" role="button">Contact</a></li>
          <li><Darkmode /></li>
        </ul>
    </nav>
</main>

<style lang="scss">
    img {
        width: 2rem;
        height: 2rem;
        border-radius: 100%;
    }
</style>