<script lang="ts">
    import clsx from 'clsx';
</script>

<div class={clsx('bg-gradient-striped flex justify-center items-center p-7 rounded', $$props.class)}>
    <slot />
</div>
