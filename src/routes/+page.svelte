<main>
    <hgroup>
        <h1>Tran Duc Khang</h1>
        <kbd/>
    </hgroup>
</main>


<style lang="scss">
    main {
        display: flex;
        width: 100vw;
        height: 91.5vh;
        background-image: url('/wave.gif');
        background-size: cover;
        background-position-y: 75%;
        align-items: center;
        justify-content: center;
    }
    hgroup {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h1 {
        background-size: cover;
        background-image: url('/wave.gif');
        background-clip: text;
        font-size: 5rem;
        font-weight: 900;
        color: transparent;
        -webkit-background-clip: text;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: white;
        filter: grayscale(.7);
    }
    div {
        width: 10rem;
        border: solid;
    }
    kbd {
        min-width: none;
        font-family: monospace;
        overflow: hidden;
        white-space: nowrap;
        margin: 0 auto;
        border-right: .15rem solid white;
        letter-spacing: .15rem;
        animation: 
            typewriter 3s steps(40, end) infinite,
            blink .5s infinite alternate;
        &:after {
            content: "";
            animation: spin 9s infinite linear;
        }
    }
    @keyframes typewriter {
        0%, 100% { width: 0 }
        20%, 80% { width: 100% }
    }
    @keyframes blink {
        from {border-right-color: white}
        to {border-right-color: transparent}
    }
    @keyframes spin {
        0% {content: "Cock"}
        50% {content: "Cum"}
        100%{content: "Balls"}
    }
</style>