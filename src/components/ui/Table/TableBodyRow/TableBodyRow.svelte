<script lang="ts">
    import clsx from 'clsx';
</script>

<tr
    class={clsx(
        'relative',
        'before:content-empty before:opacity-0 before:absolute before:inset-0 before:bg-gradient-striped hover:before:opacity-100 before:transition-opacity before:pointer-events-none before:rounded-tr-lg before:rounded-br-lg before:z-0]',
        $$props.class
    )}
>
    <slot />
</tr>
