<script>
    import {Button} from "svelte-chota";
    let button_text = 1;
</script>

<button on:mouseenter={e => button_text = 2}
        on:mouseleave={e => button_text = 3}>
    Button Text {button_text}
</button>