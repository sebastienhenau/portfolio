<script context="module" lang="ts">
    import type { Writable } from "svelte/store";

    export type TButtonGroupItemSelected = boolean;

    export interface TButtonGroupItemProps {
        selected?: TButtonGroupItemSelected;
    }

    export interface TButtonGroupItemContext {
        selected: Writable<TButtonGroupItemSelected>;
    }
</script>

<script lang="ts">
    import clsx from "clsx";
    import { setContext, afterUpdate } from "svelte";
    import { writable } from "svelte/store";

    export let selected: TButtonGroupItemSelected = false;

    const reactiveSelected = writable(selected);

    setContext<TButtonGroupItemContext>("buttonGroupItem", {
        selected: reactiveSelected,
    });

    afterUpdate(() => {
        if ($reactiveSelected !== selected) {
            $reactiveSelected = selected;
        }
    });
</script>

<li class={clsx("", $$props.class)}>
    <slot />
</li>
