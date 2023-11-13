<script lang="ts">
    import App from '$lib/components/App.svelte'
//     <main>
//     <hgroup>
//         <h1>Tran Duc Khang</h1>
//         <div>
//             <!-- svelte-ignore a11y-unknown-role -->
//             <kbd role="template"/>
//             <kbd/>
//         </div>
//     </hgroup>
//     </main>
</script>

<main>
    <App />
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
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
    h1 {
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
    // h2 {
    //     font-size: 2.5rem;
    //     margin-bottom: .5rem;
    //     @include media(xl) {
    //         margin-left: 1rem;
    //         font-size: 3rem;
    //     }
    // }
</style>