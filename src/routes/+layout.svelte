<script lang="ts">
    import "../app.scss"
    const links = [
        "blog"
    ]
</script>

<nav class="container-fluid">
    <ul>
        <li>
            <a href="/"><img src="favicon.png" alt="logo"/></a>
        </li>
    </ul>
    <ul>
        {#each links as link}
            <li>
                <a href={link}>{link}</a>
            </li>
        {/each}
    </ul>
</nav>

<slot/>

<style lang="scss">
    nav {
        position: sticky;
        background-color: rgba(255, 255, 255, .85);
    }
    img {
        width: 2rem;
    }
</style>