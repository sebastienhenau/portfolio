<script lang="ts">
    import '$styles/main.css';
    import { Header, Menu } from '$components';
</script>

<div
    class="container 900:grid 900:grid-cols-[11rem_1fr] 900:grid-rows-[auto_1fr] max-900:space-y-7 900:gap-x-9 900:gap-y-7 py-7"
>
    <Header class="900:col-start-2 900:col-end-3" />

    <Menu class="900:row-start-2 900:row-end-3 900:self-start" />

    <main class="900:col-start-2 900:col-end-3 900:row-start-2 900:row-end-3">
        <slot />
    </main>
</div>
