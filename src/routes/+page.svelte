<script lang="ts">
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import { Status, type Project } from '$lib/types';
    import { getDesc } from '$lib/funcs';
    let projects: Project[] = $page.data.projects;
    let pointer = 0;
</script>

<bg>
    <hgroup>
        <h1>Tran Duc Khang</h1>
        <div>
            <!-- svelte-ignore a11y-unknown-role -->
            <kbd role="template"/>
            <kbd/>
        </div>
    </hgroup>
</bg>

<section class="container-fluid">
    <h2>About Me</h2>
    <cardbox>
        <article>
            <img src="/mug.jpg" alt=""/>
            <sep/>
            <p>
                <span>Hi!</span> I am <b>Khang</b>, a newly graduated scholar from NUS High. I am interested in Computer Science, Physics, and Engineering.
            </p>
        </article>
    </cardbox>
</section>

<main class="galaxy">
    <h2>Projects</h2>
    <catalog>
        {#each projects.slice(pointer * 3, (pointer * 3) + 3) as project, i}
        <article data-tooltip={project.name} on:keydown on:click={() => goto(`/project/${3 * pointer + i}`)}>
            <hgroup>
                <h3>{project.name}</h3>
                <h4>Status: <mark role={Status[project.status].toLowerCase()}>{Status[project.status]}</mark></h4>
            </hgroup>
            {#if project.src}
                <img alt="" src={project.src}/>
            {:else}
                <img alt="" src="/waves.gif"/>
            {/if}
            <hgroup>
                <h3>Description</h3>
                {#await getDesc(project.desc)}
                    <p>...waiting<br><br><br></p>
                {:then desc}
                    <p>{desc}</p>
                {:catch}
                    <p><lorem/></p>
                {/await}
            </hgroup>
        </article>
        {/each}
        <clicker>
            <!-- svelte-ignore a11y-unknown-role -->
            <div role="left" on:keydown on:click={() => pointer = ((pointer - 1) + 3) % 3}>
                <iconify-icon icon="lucide:chevron-left"/>
            </div>
            <!-- svelte-ignore a11y-unknown-role -->
            <div role="right" on:keydown on:click={() => pointer = (pointer + 1) % 3}>
                <iconify-icon icon="lucide:chevron-right"/>
            </div>
        </clicker>
    </catalog>
</main>

<style lang="scss">
    section {
        // background-image: url('/waves.gif');
        // background-size: cover;
        // background-position-y: 75%;
        margin: 0;
        padding-bottom: 3.5rem;
        cardbox {
            display: flex;
            width: 100%;
            justify-content: center;
        }
        article {
            display: flex;
            flex-direction: column;
            transition: .1s;
            align-items: center;
            width: 95%;
            padding: 2.5rem 1.25rem 2.5rem 1.25rem;
            @include media(xl) {
                width: 40%;
                flex-direction: row;
            }
            margin: 0;
            gap: .5rem;
            > img {
                width: 10rem;
                aspect-ratio: 1;
                border-radius: 100%;
                object-fit: cover;
                object-position: 0 20%;
            }
            p {
                height: fit-content;
                margin: 0;
            }
            span {
                font-size: 2rem;
            }
            &:hover {
                transform: rotate(-2deg) scale(1.01);
            }
        }
    }
    sep {
        width: 100%;
        height: 0%;
        border: solid .01rem;
        @include media(xl){
            width: 0%;
            height: 100%;
        }
    }
    main {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 92vh;
        background-image: url('/bg/galaxy.gif');
        background-size: cover;
        background-position-y: 50%;
    }
    clicker {
        display: flex;
        align-items: center;
        width: 100%;
        height: min-content;
        display: flex;
        gap: .5rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        @include media(xl) {
            margin-bottom: 0;
        }
        div {
            box-shadow: var(--card-box-shadow);
            border-radius: 20px;
            border: solid .01rem;
            background-color: $layout-color;
            padding: .5rem;
            flex: 1;
            transition: .3s;
            &:hover {
                transition: .3s;
                &[role="right"]{
                    transform: translateX(10px);
                }
                &[role="left"]{
                    transform: translateX(-10px);
                }
            }
        }
    }
    catalog {
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        gap: .3rem;
        margin-left: .7rem;
        margin-right: .7rem;
        @include media(xl) {
            margin-left: 3rem;
            margin-right: 3rem;
        }
        >article {
            width: 100%;
            flex: 1;
            display: flex;
            flex-direction: column;
            transition: .3s;
            margin: 0;
            padding: .3rem;
            padding-left: 1rem;
            padding-right: 1rem;
            border: solid .01rem $layout-color;
            background-image: linear-gradient(to bottom, $end-point 20%, $mid-point 50%, $end-point 80%);
            background-color: transparent;
            background-size: cover;
            &:hover {
                transition: .3s;
                transform: scale(1.01);
            }
            > img {
                height: 10rem;
                object-fit: cover;
            }
            @include media(xl) {
                width: calc(100%/3 - .3rem);
                > img {
                    height: 21rem;
                    padding-left: 3rem;
                    padding-right: 3rem;
                }
            }
            > hgroup {
                margin: .3rem;
            }
            mark {
                border-radius: 5px;
                &[role="completed"] {
                    background-color: $var-green;
                }
                &[role="sidelined"] {
                    background-color: $var-gray;
                }
            }
            p {
                margin: 0;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
    bg {
        display: flex;
        width: 100vw;
        height: 91.5vh;
        background-image: url('/wave.gif');
        background-size: cover;
        background-position-y: 75%;
        align-items: center;
        justify-content: center;
        hgroup {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
    h1, h2, span {
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
        margin-bottom: .5rem;
        @include media(xl) {
            margin-left: 1rem;
            font-size: 3rem;
        }
    }
    h3 {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
        75% {content: "Videographer"}
        100% {content: "Computer Scientist"}
    }
</style>