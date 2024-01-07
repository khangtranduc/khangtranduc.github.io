<script lang="ts">
    import GLSLCanvas from '$lib/components/GLSLCanvas.svelte';
    import { onMount } from 'svelte';
    import { cubicOut } from 'svelte/easing';
    import { tweened } from 'svelte/motion';

    let scrollY: number = 0;
    let maxY: number;
    let colors = ["white", "red", "blue", "green", "orange", "purple", "gray", "cyan"]
    let box = {height: 90, width: colors.length * 100};
    let deltaY = 0;
    let initial_left = box.width/2;
    let left = initial_left;
    // Tweens
    let leftTweened = tweened(left, {duration: 300, easing: cubicOut})
    let nameOpacityTweened = tweened((300-scrollY)/300, {duration: 400, easing: cubicOut});
    let nameVerticalTweened = tweened(-50+scrollY/15, {duration: 400, easing: cubicOut});

    $: $nameOpacityTweened = (300-scrollY)/300;
    $: $nameVerticalTweened = -50+scrollY/10;
    $: $leftTweened = left;

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
        if (left < -(colors.length/2 - 1) * 100) left = -(colors.length/2 - 1) * 100;
        //Pac-Man effect
        // if ((left <= -box.width/2 && event.deltaY > 0) || (left >= 100 + box.width/2 && event.deltaY < 0)) deltaY = 10 * initial_left-deltaY;
    }
    
    onMount(() => {
        maxY = (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    })
</script>

<svelte:window bind:scrollY/>

<!-- <h3>
    
</h3> -->

<main>
    <GLSLCanvas shader='splash'/>
    <hgroup class="name" 
        style="
            opacity: {$nameOpacityTweened};
            transform: translate(-50%, {$nameVerticalTweened}%);
        ">
        <h1>Tran Duc Khang</h1>
        <div>
            <!-- svelte-ignore a11y-unknown-role -->
            <kbd role="template"/>
            <kbd/>
        </div>
    </hgroup>
</main>

<main on:wheel={horizontalScroll}>
    <GLSLCanvas shader='under'/>
    <hgroup
        style="
            opacity: {(scrollY-(maxY-400))/400};
            transform: translate(-50%, -{50+(maxY-scrollY)/10}%)
        ">
        <h2>What I Do</h2>
    </hgroup>
    {#if scrollY > maxY/2}
    <box
        style="
            height: {box.height}%;
            width: {box.width}%;
            left: {$leftTweened}%;
            opacity: {(scrollY-(maxY-400))/400};
            transform: translate(-50%, -{50+(maxY-scrollY)/15}%)
        ">
        {#each colors as color, _}
        <innerbox>
            <a href="/project/{color}">
                <article style="background-color: {color}" style:--card="{color}">
                    <h1>{color}</h1>
                </article>
            </a>
        </innerbox>
        {/each}
    </box>
    {/if}
</main>

<style lang="scss">
    @use '../../static/scss/typingkbd';
    main {
        //This does not work for zoomed screens
        width: 100vw;
        height: 91.5vh;
        position: relative;
        hgroup, box {
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
        }
        box {
            display: flex;
            innerbox {
                display: flex;
                align-items: center;
                justify-content: center;
                flex: 1;
                height: 100%;
                a {
                    transition: .3s;
                    height: 80%;
                    width: 80%;
                    &:hover {
                        text-decoration: none;
                        transition: .3s;
                        transform: scale(1.01);
                    }
                    article {
                        margin: none;
                        height: 100%;
                        view-transition-name: var(--card);
                    }
                }
            }
        }
    }
    h3{
        position: fixed;
        z-index: 2;
        bottom: 50%;
        left: 50%;
    }
</style>