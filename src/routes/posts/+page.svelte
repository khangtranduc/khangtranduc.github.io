<script lang="ts">
    import { formatDate } from "$lib/utils";

    let { data } = $props();
</script>

<main>
    <hgroup>
        <h1>posts</h1>
        <p>Some filler text down here</p>
    </hgroup>

    <div class="posts">
        {#each data.posts as post}
            <div class="post">
                <h2><a href="/posts/{post.slug}">{post.title}</a></h2>
                <span>{formatDate(post.date, 'long')}</span>
                <p>{post.description}</p>
            </div>
        {/each}
    </div>
</main>


<style>
    hgroup {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        width: 50%;

        margin-left: var(--size-6);
    }

    .posts {
        display: flex;
        flex-direction: column;

        margin-left: var(--size-6);
        margin-top: var(--size-6);
    }

    @media (min-width: 1024px) {
        .posts {
            margin-left: var(--size-fluid-10);
        }   
    }

    .post {
        display: flex;
        flex-direction: column;
    }
</style>