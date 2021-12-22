<script>
  import {onMount} from 'svelte';
  import { Router, Route, Link } from "svelte-routing";
  import AllDids from "./pages/AllDids.svelte";
  import SingleDid from "./pages/SingleDid.svelte";
  import Form from "./pages/Form.svelte";
  import Modal from './components/Modal.svelte';
  


  export let url = ""; // prop for router to url
  let dids; // variable to hold dids
  let baseURL = "https://ba-capstone.herokuapp.com/dids/"; //api url

  //function to get dids
  const getDids = async () => {
    const response = await fetch(baseURL);
    const data = await response.json();
    dids = data;
  }

  onMount(()=> getDids());

  //for my modal
  let modal;
</script>

<style>
  .App {
    text-align: center;
  }
  
</style>

<Router url="{url}">
  <div class="App">
    <h1 class="h1">Its Time To Do The Things!</h1>
      <Link to="/new">
        <button class="btn2">New Did</button>
      </Link>
    <main>
      <Route path="/post/:id" let:params>
        <SingleDid dids={dids} id={params.id} url={baseURL} getDids={getDids}/>
      </Route>
      <Route path="/new">
        <Form dids={dids} url={baseURL} getDids={getDids}/>
      </Route>
      <Route path="/edit/:id" let:params>
        <Form dids={dids} id={params.id} url={baseURL} getDids={getDids}/>
      </Route>
      <Route path="/">
        <AllDids dids={dids} />
      </Route>
      <button on:click={() => modal.show()}>Show What</button>
      <Modal bind:this={modal}>
      <h2>Progress Report</h2>
      <p>I will update this when i'm done</p>
        <button on:click={() => modal.hide()}>Close it</button>
      </Modal>
    </main>
      
  </div>
</Router>
