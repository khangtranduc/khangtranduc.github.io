<script lang="ts">
    import GLSLCanvas from '$lib/components/GLSLCanvas.svelte';
    import { onMount } from 'svelte';
    let scrollY: number;
    let maxY: number;
    let innerWidth: number;
    let right: number;
    let left: number;
    let box: HTMLElement;
    
    let deltaY = 0;

    const horizontalScroll = (event: WheelEvent) => {
        right = box?.getBoundingClientRect().right
        left = box?.getBoundingClientRect().left
        if (Math.abs(scrollY - maxY) < .5) {
            if (right > 0 || event.deltaY < 0) deltaY += event.deltaY
            if (deltaY > 0 || left + right > innerWidth) {
                event.preventDefault();
                event.stopPropagation();
            }
        }
        if (deltaY < 0 && left + right < innerWidth && event.deltaY < 0) deltaY = 0
        if ((right <= 0 && event.deltaY > 0) || (left >= innerWidth && event.deltaY < 0)) deltaY = -deltaY
    }

    
    onMount(() => {
        maxY = (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    })
</script>

<svelte:window bind:scrollY bind:innerWidth/>

<!-- <h3>
    {-50-deltaY/10}
    {(right + left)/2}
    {left}
    {innerWidth/2}
</h3> -->

<main>
    <GLSLCanvas shader='splash'/>
    <hgroup class="name" 
        style="
            opacity: {(300-scrollY)/300};
            transform: translate(-50%, {-50+scrollY/15}%);
        ">
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
    <hgroup
        style="
            opacity: {(scrollY-(maxY-400))/400};
            transform: translate(-50%, -{50+(maxY-scrollY)/10}%)
        ">
        <h2>What I Do</h2>
        <!-- Fade in when the scroll reaches a certain section (bottom perhaps) -->
        <!-- Change to "what i did" when scrolling over past projects -->
        <!-- Each page in the carousel is one project -->
    </hgroup>
    <box
        style="
            transform: translate({-50-deltaY/10}%, -50%)
        " bind:this={box}>
        <innerbox style="background-color: blue"/>
        <innerbox style="background-color: transparent"/>
        <innerbox style="background-color: red"/>
    </box>
    <cover on:wheel={horizontalScroll}/>
</main>

<style lang="scss">
    @use '../../static/scss/typingkbd';
    main {
        //This does not work for zoomed screens
        width: 100vw;
        height: 91.5vh;
        position: relative;
        hgroup, cover, box {
            all: unset;
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
        box {
            display: flex;
            width: fit-content;
            height: 50%;
            border: solid;
            // width: fit-content;
            // border-right: solid red;
            // border-left: solid red;
            innerbox {
                width: 100vw;
                height: 100%;
                border-left: solid white;
            }
        }
    }
    h3{
        position: fixed;
        z-index: 2;
        bottom: 50%;
        left: 50%;
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
        padding: 0 0 0 1rem;
        @include media(xl) {
            font-size: 3rem;
        }
    }
</style>