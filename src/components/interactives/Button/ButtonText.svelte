<script lang="ts" context="module">
    export type TButtonTextWrap = boolean;

    export interface TButtonTextProps {
        wrap?: TButtonTextWrap;
    }
</script>

<script lang="ts">
    import clsx from "clsx";
    import { getContext } from "svelte";
    import { Text } from "$components";
    import type { TButtonContext } from "./Button.svelte";

    const buttonContext = getContext<TButtonContext>("button");

    export let wrap: TButtonTextWrap = false;
</script>

<Text
    class={clsx(
        "text-inherit",
        {
            [clsx(buttonContext.childAnimationClass, "motion-safe:transition-transform")]:
                !buttonContext.hasLeftSlot && !buttonContext.hasRightSlot,
            "whitespace-nowrap": !wrap,
        },
        $$props.class
    )}
    tag="span"
    type="action"
    variants={[buttonContext.size === "xs" ? "sm" : "none"]}
>
    <slot />
</Text>
