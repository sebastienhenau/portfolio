<script lang="ts" context="module">
    export type TMainUrl = string;

    export interface TMainProps {
        url: TMainUrl;
    }
</script>

<script lang="ts">
    import clsx from "clsx";
    import { fly } from "svelte/transition";
    import { HeadingsContext } from "$contexts";
    import { reducedMotion } from "$stores";

    export let url: TMainUrl;
</script>

<main id="main" class={clsx("container-main relative max-900:pb-5 900:pl-7", $$props.class)}>
    <div class="absolute left-0 top-0 h-full w-border -translate-x-1/2 bg-gradient-vertical-dashed max-900:hidden" />

    {#key url}
        <div
            in:fly={{
                y: $reducedMotion ? 0 : -10,
                duration: $reducedMotion ? 0 : 200,
                delay: $reducedMotion ? 0 : 200,
            }}
            out:fly={{ y: $reducedMotion ? 0 : 10, duration: $reducedMotion ? 0 : 200 }}
        >
            <HeadingsContext>
                <slot />
            </HeadingsContext>
        </div>
    {/key}
</main>

<style lang="postcss">
    .container-main {
        --container-main-col: theme("gridColumn.span-1");

        grid-row: main;
        grid-column: var(--container-main-col);

        @media screen("900") {
            --container-main-col: main;
        }
    }
</style>
