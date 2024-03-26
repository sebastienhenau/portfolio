<script context="module" lang="ts">
    import type { TIconProps } from "$components";

    export type TButtonIconIcon = TIconProps;

    export interface TButtonIcon {
        icon: TButtonIconIcon;
    }
</script>

<script lang="ts">
    import clsx from "clsx";
    import { getContext } from "svelte";
    import { Icon } from "$components";
    import type { TButtonContext } from "./Button.svelte";

    export let icon: TButtonIconIcon;

    const buttonContext = getContext<TButtonContext>("button");
</script>

<Icon
    {...icon}
    class={clsx(
        {
            [clsx(buttonContext.childAnimationClass, "motion-safe:transition-transform")]:
                !buttonContext.hasLeftSlot && !buttonContext.hasRightSlot,
        },
        $$props.class
    )}
/>
