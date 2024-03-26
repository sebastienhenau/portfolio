<script context="module" lang="ts">
    import type { TTagsBlock } from "$types";

    export type TPanelTag = TTagsBlock;

    export interface TPanelProps {
        tag?: TPanelTag;
    }

    export type TPanelContext = boolean;
</script>

<script lang="ts">
    import clsx from "clsx";
    import { setContext } from "svelte";

    export let tag: TPanelTag = "div";

    setContext<TPanelContext>("panel", true);
</script>

<svelte:element
    this={tag}
    id={$$props.id}
    class={clsx(
        "relative z-0",
        "before:pointer-events-none before:absolute before:inset-0 before:-z-20 before:translate-x-2 before:translate-y-2 before:rounded before:border before:border-line before:bg-site-base before:content-empty",
        "after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded after:border after:border-line after:bg-site-base after:content-empty",
        $$props.class
    )}
>
    <slot />
</svelte:element>
