<script lang="ts">
    import "../app.scss";
    import "iconify-icon";
</script>

<nav class="container-fluid">
    <ul>
        <li>
            <a href="/"><img src="favicon.png" alt="logo"/></a>
        </li>
    </ul>
</nav>

<slot/>

<style lang="scss">
    nav {
        height: 3rem;
        position: fixed;
        background-color: rgba(255, 255, 255, 0.85);
    }
    img {
        width: 1.6rem;
    }
</style>