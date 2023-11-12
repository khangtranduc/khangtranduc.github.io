<script lang="ts">

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

<style lang="scss">
    @use '../../static/scss/typingkbd';

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