<script>
  import {onMount} from 'svelte';
  import { Router, Route, Link } from "svelte-routing";
  import AllDids from "./pages/AllDids.svelte";
  import SingleDid from "./pages/SingleDid.svelte";
  import Form from "./pages/Form.svelte";

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
//let count = 0;
  // onMount(() => {
  //   const interval = setInterval(() => count++, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // });
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
    </main>
      <!-- <p>Page has been open for <code>{count}</code> seconds.</p> -->
  </div>
</Router>
