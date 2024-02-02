<script
    context="module"
    lang="ts"
>
    export type THighlightTag = 'div';

    export interface THighlightProps {
        tag?: THighlightTag;
    }
</script>

<script lang="ts">
    import clsx from 'clsx';

    export let tag: THighlightTag = 'div';
</script>

<svelte:element
    this={tag}
    class={clsx('rounded bg-gradient-striped', $$props.class)}
>
    <slot />
</svelte:element>
