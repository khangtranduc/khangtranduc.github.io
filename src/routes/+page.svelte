<script lang="ts">
    import { fade } from "svelte/transition";
    import { loadIcon } from "iconify-icon";

    let innerHeight: number
    let innerWidth: number
    const links = Object.entries({
        "projects": "/projects",
        "resume": "/resume.pdf"
    })
    const icons = Object.entries({
        "mdi:github": "https://github.com/khangtranduc", 
        "mdi:gmail": "mailto:khangductran@duck.com",
        "mdi:linkedin": "https://www.linkedin.com/in/khangtranduc/", 
        "ic:baseline-telegram": "https://t.me/khangductran"
    })
    let showContacts = false;
    let maintain = false;
</script>

<svelte:window bind:innerHeight bind:innerWidth/>

<!-- <canvas class="glsl-canvas" data-fragment-url="solid.frag" width={innerWidth} height={innerHeight}/> -->
<!-- <main/> -->

<div class="ver">
    <h1>HI, <span>i'm <mark>khang</mark></span></h1>

    <div class="links">
        {#each links as [label, link], i}
        <h2><a href={link} class="contrast">{label}</a></h2>
        {#if i < links.length - 1}
        <h2>|</h2>
        {/if}
        {/each}
        <h2>|</h2>
        <h2><a href={"#"}
            class="contrast"
            on:mouseenter={() => showContacts = true}
            on:mouseleave={() => setTimeout(() => showContacts = false, 100)}>contacts</a></h2>
    </div>
    <div class="contacts" role="banner"
        on:mouseenter={() => maintain = showContacts}
        on:mouseleave={() => maintain = false}>
        {#if showContacts || maintain}
        {#each icons as [icon, link], i}
        <a href="{link}" target="_blank"
            in:fade|global={{ delay: (icons.length - i) * 100, duration: 300 }} 
            out:fade|global={{ delay: i * 100, duration: 300 }}>
            <!-- svelte-ignore empty-block -->
            {#await loadIcon(icon) then _}
            <iconify-icon inline width="40" icon="{icon}"/>
            {:catch}
            {icon.split(":")[1]}
            {/await}
        </a>
        {/each}
        {/if}
    </div>
</div>


<style lang="scss">
    canvas {
        width: 100vw;
        height: 100vh;
        background: $grey-50;
    }
    mark {
        background-color: transparent;
        animation-name: highlight;
        animation-duration: 3s;
        animation-fill-mode: forwards;
        background-size: 200%;
        background-image: linear-gradient(to right, $amber-100 50%, transparent 50%),
            linear-gradient($grey-50, $grey-50);
    }
    h1 {
        font-size: 3.5rem;
        font-weight: 900;
        span {
            font-size: 3.5rem;
            font-weight: bold;
        }
        animation-name: intro;
        animation-duration: 3s;
    }
    h2 {
        color: $grey-600
    }
    a {
        color: $grey-600;
        text-decoration: none;
        &:hover {
            color: $black;
        }
    }
    .contacts {
        width: 100%;
        height: 1.5rem;
        align-items: center;
        display: flex;
        gap: 1rem;
        justify-content: end;
        iconify-icon {
            color: $grey-600;
            transition: .3s;
            &:hover {
                color: $black;
                transition: .3s;
            }
        }
    }
    .links {
        width: 100%;
        display: flex;
        justify-content: space-between;
        animation-name: links;
        animation-duration: 5s;
    }
    .ver {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    @keyframes highlight {
        0% {background-position: 100%;}
        66% {background-position: 100%;}
        100% {background-position: 0%;}
    }

    @keyframes intro {
        0% {transform: translate(0, 100%);
            clip-path: polygon(0 110%, 0 110%, 100% 110%, 100% 110%);}
        25% {transform: translate(0, 100%);
            clip-path: polygon(0 110%, 0 110%, 100% 110%, 100% 110%);}
        50% {transform: translate(0, 100%);
            clip-path: polygon(0 110%, 0 0, 100% 0, 100% 110%);}
        100% {transform: translate(0, 0);}
    }

    @keyframes links {
        0% {opacity: 0;}
        33% {opacity: 0;}
        100% {opacity: 1;}
    }
</style>