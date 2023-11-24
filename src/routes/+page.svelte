<script lang="ts">
    import GLSLCanvas from '$lib/components/GLSLCanvas.svelte';
</script>

<main>
    <GLSLCanvas shader='splash'/>
    <hgroup>
        <h1>Tran Duc Khang</h1>
        <div>
            <!-- svelte-ignore a11y-unknown-role -->
            <kbd role="template"/>
            <kbd/>
        </div>
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
            position: absolute;
            width: 100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
    h1 {
        font-size: 2.3rem;
        font-weight: 900;
        text-align: center;
        filter: grayscale(.7);
        @include clear-text();
        @include media(xl) {
            font-size: 5rem
        }
    }
</style>