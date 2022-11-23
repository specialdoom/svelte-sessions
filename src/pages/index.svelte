<script>
    import { onMount } from "svelte";
    import TimelineShell from "../lib/components/timeline/TimelineShell.svelte";
    import { getTasksForUser } from "../lib/services/firestore-tasks";
    import { auth } from "../lib/stores/auth";
    import { timeline } from "../lib/stores/days";

    onMount(async () => {
        $timeline.tasks = await getTasksForUser($auth.uid, $timeline.current);
    });

    $: {
        getTasksForUser($auth.uid, $timeline.current).then((data) => {
            $timeline.tasks = data;
        });
    }
</script>

<TimelineShell />
