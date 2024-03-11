<script
    lang="ts"
    context="module"
>
    export type TMainUrl = string;

    export interface TMainProps {
        url: TMainUrl;
    }
</script>

<script lang="ts">
    import clsx from 'clsx';
    import { fly } from 'svelte/transition';
    import { HeadingsContext } from '$contexts';
    import { reducedMotion } from '$stores';

    export let url: TMainUrl;
</script>

<main
    id="main"
    class={clsx('container-main relative 900:pl-7 max-900:pb-5', $$props.class)}
>
    <div class="max-900:hidden absolute top-0 left-0 w-border h-full bg-gradient-vertical-dashed -translate-x-1/2" />

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
        --container-main-col: theme('gridColumn.span-1');

        grid-row: main;
        grid-column: var(--container-main-col);

        @media screen('900') {
            --container-main-col: main;
        }
    }
</style>
