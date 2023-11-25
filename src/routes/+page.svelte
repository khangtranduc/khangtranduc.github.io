<script lang="ts">
    import GLSLCanvas from '$lib/components/GLSLCanvas.svelte';
    let scrollY: number;
</script>

<svelte:window bind:scrollY/>

<main>
    <GLSLCanvas shader='splash'/>
    <hgroup class="name">
        <h1>Tran Duc Khang</h1>
        <div>
            <!-- svelte-ignore a11y-unknown-role -->
            <kbd role="template"/>
            <kbd/>
        </div>
    </hgroup>
</main>

<main>
    <GLSLCanvas shader='under'/>
    <hgroup>
        <h2>Projects</h2>
    </hgroup>
</main>

<style lang="scss">
    @use '../../static/scss/typingkbd';
    main {
        //This does not work for zoomed screens
        width: 100vw;
        height: 91.5vh;
        position: relative;
        hgroup {
            all:unset;
            position: absolute;
            height: 100%;
            width: 100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            &.name {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
        }
    }
    h1, h2 {
        font-weight: 900;
        @include clear-text();
    }
    h1 {
        font-size: 2.3rem;
        @include media(xl) {
            font-size: 5rem;
        }
    }
    h2 {
        font-size: 1.7rem;
        padding: 1rem 0 0 2rem;
        @include media(xl) {
            font-size: 3rem;
        }
    }
</style>