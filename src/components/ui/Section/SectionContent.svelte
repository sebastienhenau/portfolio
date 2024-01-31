<script lang="ts">
    import clsx from 'clsx';
</script>

<div class={clsx('col-start-1 600:col-start-2 col-end-3 row-start-2 row-end-3', $$props.class)}>
    <slot />
</div>
