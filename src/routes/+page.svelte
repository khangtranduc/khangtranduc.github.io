<main>
    <hgroup>
        <h1>Tran Duc Khang</h1>
        <div>
            <kbd role="template"/>
            <kbd/>
        </div>
    </hgroup>
</main>

<h2>Projects</h2>



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
    h1, h2 {
        background-size: cover;
        background-image: url('/wave.gif');
        background-clip: text;
        font-weight: 900;
        color: transparent;
        text-align: center;
        -webkit-background-clip: text;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: white;
        @include media(xl) {
            text-align: left;
        }
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
        @include media(xl) {
            margin-left: 1rem;
            font-size: 3rem;
        }
    }
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    kbd {
        min-width: 0;
        letter-spacing: .15rem;
        border-right: .15rem solid white;
        margin: 0 auto;
        padding-right: 0;
        padding-left: .3rem;
        font-family: monospace;
        font-size: 1rem;
        &[role="template"] {
            display: none;
        }
        &:not([role="template"]) {
            overflow: hidden;
            white-space: nowrap;
            animation-delay: 0;
            animation: 
                typewriter 3s infinite linear,
                blink .5s infinite alternate;
        }
        &:after {
            content: "";
            animation-delay: 0;
            animation: spin infinite;
            animation-duration: 12s;
            animation-timing-function: step-end;
        }
    }
    @keyframes typewriter {
        0%, 100% { width: 0 }
        20%, 80% {width: 100%}
    }
    @keyframes blink {
        from {border-right-color: white}
        to {border-right-color: transparent}
    }
    @keyframes spin {
        0% {content: "Computer Scientist"}
        25% {content: "Physicist"}
        50% {content: "Engineer"}
        75% {content: "Epic Gamer"}
        100% {content: "Computer Scientist"}
    }
</style>