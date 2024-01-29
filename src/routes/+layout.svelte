<script lang="ts">
    import '$styles/main.css';
    import { Header } from '$components';
</script>

<div class="container">
    <Header />

    <main>
        <slot />
    </main>
</div>
