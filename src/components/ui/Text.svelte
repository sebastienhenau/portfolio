<script context="module" lang="ts">
    import type { TTagsText } from "$types";

    export type TTextTag = TTagsText;
    export type TTextType = "title-1" | "title-2" | "title-3" | "text" | "label" | "action" | "inherit";
    export type TTextVariant = "none" | "flat" | "fat" | "lg" | "sm";
    export type TTextVariants = TTextVariant[];
    export type TTextUseHeadingsContext = boolean;

    export interface TTextProps {
        tag?: TTextTag;
        type?: TTextType;
        variants?: TTextVariants;
        useHeadingsContext?: TTextUseHeadingsContext;
    }
</script>

<script lang="ts">
    import clsx from "clsx";
    import { getContext } from "svelte";
    import type { THeadingsContext } from "$contexts";

    export let tag: TTextTag = "p";
    export let type: TTextType = "text";
    export let variants: TTextVariants = ["none"];
    export let useHeadingsContext: TTextUseHeadingsContext = false;

    const headingsContext = getContext<THeadingsContext>("headings");
</script>

<svelte:element
    this={useHeadingsContext ? headingsContext.tag : tag}
    class={clsx(
        "font-sans",
        {
            "fs-title-1": type === "title-1",
            "fs-title-2": type === "title-2",
            "fs-title-3": type === "title-3",
            "fs-text": type === "text",
            "fs-action": type === "action",
            "fs-label": type === "label",
            "fsv-sm": (type === "label" || type === "action") && variants.includes("sm"),
            "fsv-fat": type === "text" && variants.includes("fat"),
            "fsv-flat": variants.includes("flat"),
            "text-inherit": type === "inherit",
        },
        $$props.class
    )}
>
    <slot />
</svelte:element>
