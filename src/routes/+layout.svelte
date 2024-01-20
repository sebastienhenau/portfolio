<script lang="ts">
    import '$styles/main.css';
    import { Header, Navigation } from '$components';
</script>

<div class="stretch-container grid grid-cols-[11rem_1fr] grid-rows-[auto_1fr] gap-x-9">
    <Header class="col-start-2 col-end-3 row-start-1 row-end-2" />

    <Navigation class="col-start-1 col-end-2 row-start-2 row-end-3 self-start" />

    <main class="col-start-2 col-end-3 row-start-2 row-end-3">
        <slot />
    </main>
</div>
