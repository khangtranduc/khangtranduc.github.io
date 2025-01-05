<script lang="ts">
    export let pdfUrl;
</script>

<div>
    <iframe src={pdfUrl} title="PDF"></iframe>
</div>

<style>
    iframe {
        width: 100%;
        height: calc(100vh - var(--size-10));
        border: none;
    }
</style>