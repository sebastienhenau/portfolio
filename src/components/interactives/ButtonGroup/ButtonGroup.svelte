<script context="module" lang="ts">
    export type TButtonGroupLayout = "row" | "column" | "1/2";

    export interface TButtonGroupProps {
        layout?: TButtonGroupLayout;
    }

    export type TButtonGroupContext = boolean;
</script>

<script lang="ts">
    import clsx from "clsx";
    import { setContext } from "svelte";
    import { getComponentResponsiveClass } from "$utilities";

    export let layout: TButtonGroupLayout = "row";
    export let layoutBreakpoints = {};

    const layoutClass = getComponentResponsiveClass(layout, layoutBreakpoints, {
        row: {
            defaultValue: "flex [&>*:not(:first-child)]:ml-[-2px]",
            breakpoints: {
                "500:max-900": "500:max-900:flex 500:max-900:[&>*:not(:first-child)]:ml-[-2px]",
            },
        },
        column: {
            breakpoints: {
                900: "900:flex 900:flex-col 900:[&>*:not(:first-child)]:mt-[-2px]",
            },
        },
        "1/2": {
            breakpoints: {
                "max-500":
                    "max-500:grid max-500:grid-cols-2 max-500:grid-rows-none max-500:[&>*]:col-span-1 max-500:[&>*]:row-span-auto max-500:[&>*:nth-child(even)]:ml-[-2px] max-500:[&>*:nth-child(n+3)]:mt-[-2px]",
            },
        },
    });

    setContext<TButtonGroupContext>("buttonGroup", true);
</script>

<div data-component="button-group" class={clsx("relative z-0 inline-block", $$props.class)}>
    <div class="pointer-events-none absolute inset-0 -z-20 translate-x-2 translate-y-2 rounded bg-line" />

    <menu class={clsx("w-full", layoutClass)}>
        <slot />
    </menu>
</div>
