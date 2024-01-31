<script lang="ts">
    import clsx from 'clsx';
</script>

<footer class={clsx('col-start-1 600:col-start-2 col-end-3 row-start-3 row-end-4', $$props.class)}>
    <slot />
</footer>
