<script lang="ts">
    import clsx from 'clsx';
</script>

<table class={clsx('w-full', $$props.class)}>
    <thead>
        <tr class="relative border-b border-border border-dotted">
            <slot name="header" />
        </tr>
    </thead>

    <tbody class="before:content-empty before:block before:h-5">
        <slot />
    </tbody>
</table>
