<script lang="ts">
    import "../app.scss";
    import "@picocss/pico/scss/pico.scss";
    import "iconify-icon";
    import { onNavigate } from '$app/navigation';
    import Darkmode from './darkmode.svelte';

    onNavigate((navigation) => {
        // @ts-ignore
        if (!document.startViewTransition) return;

        return new Promise((resolve) => {
            // @ts-ignore
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });
</script>

<main>
    <nav class="container-fluid">
        <ul>
            <a href="/">
                <li>
                    <img src="/favicon.png" alt="">
                    <strong>Khang Tran</strong>
                </li>
            </a>
        </ul>
        <!-- svelte-ignore a11y-unknown-role -->
        <ul role="brands">
            <li><a href="mailto:khangtranduc6@gmail.com">
                <iconify-icon icon="lucide:mail" width="25"/>
            </a></li>
            <li><a href="https://github.com/khangtranduc" target="_blank">
                <iconify-icon icon="lucide:github" width="25"/>
            </a></li>
            <li><a href="https://www.linkedin.com/in/khangtranduc" target="_blank">
                <iconify-icon icon="lucide:linkedin" width="25"/>
            </a></li>
            <li><Darkmode></Darkmode></li>
        </ul>
    </nav>
</main>

<slot/>

<style lang="scss">
    a {
        all: unset;
        display: flex;
        align-items: center;
    }
    img {
        width: 2rem;
        height: 2rem;
        border-radius: 100%;
    }
    main {
        position: sticky;
        top: 0;
        background-color: $layout-color;
        z-index: 1;
    }
    li {
        display: flex;
        align-items: center;
        gap: .5rem;
        transition: .3s;
        &:hover {
            transition: .3s;
            transform: scale(1.1);
        }
    }
    ul{
        &[role="brands"] {
            >li:nth-child(-n + 5) {
                display: none;
                @include media(xl) {
                    display: flex;
                    align-items: center;
                    gap: .5rem;
                    transition: .3s;
                }
            }
        }
    }
</style>