<script context="module" lang="ts">
    import type { TTagsBlock } from "$types";

    export type THighlightTag = TTagsBlock;
    export type THighlightHorizontalAlignment = "none" | "center";
    export type THighlightVerticalAlignment = "none" | "center";

    export interface THighlightProps {
        tag?: THighlightTag;
    }
</script>

<script lang="ts">
    import clsx from "clsx";

    export let tag: THighlightTag = "div";
    export let horizontalAlignment: THighlightHorizontalAlignment = "none";
    export let verticalAlignment: THighlightVerticalAlignment = "none";
</script>

<svelte:element
    this={tag}
    class={clsx(
        "rounded bg-gradient-striped p-7",
        {
            flex: horizontalAlignment !== "none" || verticalAlignment !== "none",
            "justify-center": horizontalAlignment === "center",
            "items-center": verticalAlignment === "center",
        },
        $$props.class
    )}
>
    <slot />
</svelte:element>
