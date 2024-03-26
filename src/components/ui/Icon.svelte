<script context="module" lang="ts">
    export type TIconName = string;

    export interface TIconProps {
        name: TIconName;
    }
</script>

<script lang="ts">
    import clsx from "clsx";
    import { icons } from "$content";

    export let name: TIconName;

    const icon = icons[name];
</script>

<svelte:component
    this={icon}
    class={clsx("inline-flex aspect-square h-auto w-5 items-center justify-center text-inherit", $$props.class)}
    height="100%"
    width="100%"
    focusable="false"
    aria-hidden="true"
/>
