<script lang="ts">
    import App from '$lib/components/App.svelte'
</script>

<main>
    <hgroup>
        <h1>Tran Duc Khang</h1>
        <div>
            <!-- svelte-ignore a11y-unknown-role -->
            <kbd role="template"/>
            <kbd/>
        </div>
    </hgroup>
</main>

<cock>
    <App />
</cock>

<style lang="scss">
    @use '../../static/scss/typingkbd';

    cock {
        width: 100vw;
        height: 100vh;
        display: block;
        background: rgb(13, 19, 32);
        background: linear-gradient(180deg, rgba(13, 19, 32, 1) 0%, rgba(8, 12, 21, 1) 100%);
    }

    main {
        @include background();
        hgroup {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
    h1, h2 {
        background-size: cover;
        background-image: url('/wave.gif');
        font-weight: 900;
        text-align: center;
        @include clear-text();
    }
    h1 {
        font-size: 2.9rem;
        filter: grayscale(.7);
        @include media(xl) {
            font-size: 5rem
        }
    }
    h2 {
        font-size: 2.5rem;
        margin-bottom: .5rem;
        @include media(xl) {
            margin-left: 1rem;
            font-size: 3rem;
        }
    }
</style>