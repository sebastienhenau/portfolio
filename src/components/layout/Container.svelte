<script
    context="module"
    lang="ts"
>
    export type TContainerTag = 'div';

    export interface TContainerProps {
        tag?: TContainerTag;
    }
</script>

<script lang="ts">
    import clsx from 'clsx';

    export let tag: TContainerTag = 'div';
</script>

<svelte:element
    this={tag}
    class={clsx('max-w-[72rem] w-full mx-auto px-5 700:px-8 1200:px-12', $$props.class)}
>
    <slot />
</svelte:element>
