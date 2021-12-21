<div>
    <form on:submit="{handleSubmit}">
        <input type="text" placeholder="activity" bind:value="{activity}" />
        <input type="text" placeholder="time" bind:value="{time}" />
        <input type="submit" bind:value="{buttonLabel}" />
    </form>
</div>

<style></style>

<script>
import { navigate } from "svelte-routing";

export let dids; //receive dids array prop
export let id; //receive id prop
export let url; //recieve url prop
export let getDids; //receive getDids prop

let buttonLabel = "Create Did"; //default for submit button text
let activity = ""; //default for activity field
let time = ""; //default value for time field
//default values of handle submit for creating dids
let handleSubmit = async (event) => {
    event.preventDefault();

    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            //pickOne,
            activity,
            time,
        }),
    });
    getDids();
    navigate("/", { replace: true });

};

//if id is defined, reconfigure for editing
if (id) {
    buttonLabel = "Edit the Did";
    let post = dids.find((p) => p._id == id);
    //pickOne = post.pickOne;
    activity = post.activity;
    time = post.time;
    handleSubmit = async (event) => {
        event.preventDefault();

        await fetch(url + id + "/", {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id,
                //pickOne,
                activity,
                time,
            }),
        });
        getDids();
        navigate("/", {replace: true });
    };
}

</script>

<!-- <form on:submit|preventDefault={handleSubmit}>
	<select value={selected} on:change="{() => answer = ''}">
		{#each questions as question}
			<option value={question}>
				{question.text}
			</option>
		{/each}
	</select>

	<input bind:value={answer}>

	<button disabled={!answer} type=submit>
		Submit
	</button>
</form> -->

<!-- <p>selected question {selected ? selected.id : '[waiting...]'}</p> -->

<!-- // let pickOne = [
	// 	{ :id, text: `25% Doing Code Challenges` },
	// 	{ :id, text: `25% Learning New Tech or Solidifying Foundation` },
	// 	{ :id, text: `25% Sending Out Job Application (2 SOLID Applications per hour)` }
    //     { :id, text: `25% Networking and Branding` },
	// ];

	// let selected;

	// let answer = '';

	// function handleSubmit() {
	// 	alert(`answered question ${selected.id} (${selected.text}) with "${answer}"`);
	// } -->