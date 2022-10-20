<script>
  import Component from "./lib/Component.svelte";
  import Heading from "./lib/Heading.svelte";
  import AssignmentsAreReactive from "./lib/AssignmentsAreReactive.svelte";
</script>

<main>
    <nav>
        <ul>
            <li><a href="about">About</a></li>
            <li><a href="contact">Contact</a></li>
        </ul>
    </nav>
    <Component />
    <Heading title="Custom title" />
    <Heading />
    <AssignmentsAreReactive title="Not uppercase"/>
</main>
