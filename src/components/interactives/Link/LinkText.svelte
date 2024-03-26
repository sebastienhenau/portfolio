<script lang="ts" context="module">
    import type { TTextProps } from "$components";

    export type TLinkTextText = Omit<TTextProps, "tag">;

    export interface TLinkTextProps {
        text?: TLinkTextText;
    }
</script>

<script lang="ts">
    import { Text } from "$components";
    import { getContext } from "svelte";
    import type { TLinkContext } from "./Link.svelte";

    export let text: TLinkTextText = {};

    const linkContext = getContext<TLinkContext>("link");

    const { type = linkContext.inline ? "inherit" : "action", ...restText } = text;
</script>

<Text {type} {...restText} tag="span">
    <slot />
</Text>
