<script lang="ts">
    import { getContext } from "svelte";
    import { Button, ButtonText, ButtonIcon, ActionWrapper } from "$components";
    import type { TCollapseContext } from "./Collapse.svelte";

    const collapseContext = getContext<TCollapseContext>("collapse");
    const { open } = collapseContext || {};
</script>

<!-- TODO: add aria-expanded="false|true" and aria-controls="#id-on-details" -->
<ActionWrapper class="flex items-center justify-between gap-6 border-b border-line py-3 pl-5 pr-4" tag="summary">
    <slot />

    <Button size="xs" variant="neutral">
        <ButtonText>
            {#if $open}
                Close
            {:else}
                Open
            {/if}
        </ButtonText>

        {#if $open}
            <ButtonIcon icon={{ name: "ChevronUp" }} />
        {:else}
            <ButtonIcon icon={{ name: "ChevronDown" }} />
        {/if}
    </Button>
</ActionWrapper>
