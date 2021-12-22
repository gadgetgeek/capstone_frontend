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

<!-- Look Kerlin & Sarah...CSS just like mom used to make! -->
<style>
  .App {
    text-align: center;
    text-decoration: none;
  }
  .main {
    text-decoration: none;
  }
  .h1 {
    color: #4CAF50;
  }
  .btn_mod {
    transition: 0.4s;
  }
  .btn_mod:hover {
    border-radius: 8px;
    background-color: #4CAF50;
    color: white;
  }
  
  .btn2 {
    transition: 0.4s;
  }
  .btn2:hover {
    border-radius: 8px;
    background-color: #4CAF50;
    color: white;
  }

  
</style>

<Router url="{url}">
  <div class="App">
    <h1 class="h1">Its Time To Do The Things!</h1>
      <Link to="/new">
        <button class="btn2">New Did</button>
      </Link>
    <main class="main">
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
      <button class="btn_mod" on:click={() => modal.show()}>Did Reminder</button>
      <Modal bind:this={modal}>
      <h2>Reminder</h2>
      <ul style="text-align: left;">
        <li>25% Doing Code Challenges</li>
        <li>25% Learning New Tech or Solidifying Foundation</li>
        <li>25% Sending Out Job Application (2 SOLID Applications per hour)</li>
        <li>25% Networking and Branding</li>
      </ul>
        <button on:click={() => modal.hide()}>Close it</button>
      </Modal>
    </main>
      
  </div>
</Router>
