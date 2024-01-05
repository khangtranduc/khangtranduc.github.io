<script lang="ts">
    import GLSLCanvas from '$lib/components/GLSLCanvas.svelte';
    import { onMount } from 'svelte';
    let scrollY: number;
    let maxY: number;
    let box = {height: 60, width: 400};
    let deltaY = 0;
    let initial_left = box.width/2;
    let left = initial_left;
    

    const horizontalScroll = (event: WheelEvent) => {
        left = initial_left - deltaY/10;
        if (Math.abs(scrollY - maxY) < .5) {
            if (left > -box.width/2 || event.deltaY < 0) deltaY += event.deltaY;
            if (deltaY > 0 || left > initial_left) {
                event.preventDefault();
                event.stopPropagation();
            }
        }
        if (deltaY < 0 && left < (initial_left + 10) && event.deltaY < 0) deltaY = 0;
        if (left < -0.25 * box.width) left = -0.25 * box.width;
        //Pac-Man effect
        // if ((left <= -box.width/2 && event.deltaY > 0) || (left >= 100 + box.width/2 && event.deltaY < 0)) deltaY = 10 * initial_left-deltaY;
    }
    
    onMount(() => {
        maxY = (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    })
</script>

<svelte:window bind:scrollY/>

<!-- <h3>
    {deltaY}
    {left}
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
            height: {box.height}%;
            width: {box.width}%;
            left: {left}%
        ">
        <innerbox style="background-color: white"/>
        <innerbox style="background-color: red"/>
        <innerbox style="background-color: blue"/>
        <innerbox style="background-color: green"/>
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
        }
        hgroup {
            &.name {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
        }
        box {
            display: flex;
            // background: linear-gradient(to right, white, gray);
            // border-radius: 7px;
            innerbox {
                border-radius: 7px;
                height: 100%;
                width: 25%;
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