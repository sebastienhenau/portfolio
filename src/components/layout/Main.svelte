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

    export let url: TMainUrl;
</script>

{#key url}
    <main
        id="main"
        class={clsx('container-main relative 900:pl-7 max-900:pb-5', $$props.class)}
        in:fly={{ y: -10, duration: 200, delay: 200 }}
        out:fly={{ y: 10, duration: 200 }}
    >
        <div
            class="max-900:hidden absolute top-0 left-0 w-border h-full bg-gradient-vertical-dashed -translate-x-1/2"
        />

        <HeadingsContext>
            <slot />
        </HeadingsContext>
    </main>
{/key}

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
