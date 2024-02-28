<script lang="ts">
    import clsx from 'clsx';
</script>

<menu class={clsx('flex flex-wrap gap-4', $$props.class)}>
    <slot />
</menu>
