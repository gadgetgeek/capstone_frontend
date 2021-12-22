<div class="row1">
    <h2>{post.activity}</h2>
    <h3>{post.time}</h3>
    <Link to="/">
        <button class="btn1">Back to Main</button>
    </Link>
    <Link to={'/edit/' + post._id }>
        <button>Edit the Did</button>
    </Link>
        <button on:click={deleteDid}>Delete The Did</button>
</div>

<style>
.row1 {
    text-decoration: none;
}
</style>

<script>
import { Link, navigate } from "svelte-routing";
import { onMount } from "svelte"
//gets posts and id props
export let dids;

export let id;
export let getDids; //receive getDids as props
export let url; //get url as prop



let post = dids.find(p => p._id == id)



//delete dids function
const deleteDid = async () => {
    await fetch(url + id, {
        method: "delete",
    })
    getDids()
    navigate("/", {replace: true})
}

</script>