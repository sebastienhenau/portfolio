<script lang="ts">
    import clsx from 'clsx';
</script>

<ul class={clsx('flex flex-wrap gap-3', $$props.class)}>
    <slot />
</ul>
