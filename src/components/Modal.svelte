<script>
    let shown = false;
    export function show() {
    shown = true;
    }
    export function hide() {
    shown = false;
    }
</script>

<style>
    .modal-wrapper {
        background-color: rgb(0, 0, 0);
        background-color: rgba(0, 0, 0, 0.6);
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .modal {
        background-color: white;
        max-width: 80vw;
        padding: 1rem;
        margin: 15% auto;
        border-radius: 8px;
    }
    .close {
        float: right;
        cursor: pointer;
    }
    .close:hover {
        font-weight: bold;
    }
</style>

<!-- I found this and I think its really cool.  This was copied from a tutorial -->
<svelte:window
    on:keydown={e => {
        if (e.keyCode == 27) {
            hide();
    }
}} />

{#if shown}
    <div class="modal-wrapper">
    <div class="modal">
        <span class="close" on:click={() => hide()}>&times;</span>
        <slot />
    </div>
    </div>
{/if}
