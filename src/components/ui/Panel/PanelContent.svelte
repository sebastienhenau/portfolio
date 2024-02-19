<script lang="ts">
    import clsx from 'clsx';
</script>

<div class={clsx('p-4 900:p-6', $$props.class)}>
    <slot />
</div>
