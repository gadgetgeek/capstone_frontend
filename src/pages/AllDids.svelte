<div>
    {#each dids as did, index}
        <article class="line">
            <Link to="{`/post/` + did._id}">
                <h2 class="act">{did.activity}</h2>
            </Link>
            <h3 class="time">{did.time}</h3>
        </article>
    {/each}
    
</div>

<style>

.line {
    display: flex;
    justify-content: space-around;
}
</style>

<script>
import { Link } from "svelte-routing";
export let dids = []; //recieve dids props

</script>