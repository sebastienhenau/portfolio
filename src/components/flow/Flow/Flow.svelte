<script lang="ts">
    import clsx from 'clsx';
    import { Badge } from '$components';
    import type { TFlowIndex } from './Flow.types';

    // -----------------------------------------------------------------------------------------------------------------
    // Props
    // -----------------------------------------------------------------------------------------------------------------
    export let index: TFlowIndex = undefined;
</script>

<!-- TODO: link 1.25rem to badge or inherit badge -->
<section
    class={clsx('grid grid-cols-1 600:grid-cols-[1.25rem_1fr] grid-rows-3-auto gap-x-4 700:gap-x-6', $$props.class)}
>
    <div
        class={clsx(
            'max-600:hidden col-start-1 col-end-2 row-end-4 w-[2px] rounded-full bg-border self-stretch justify-self-center pointer-events-none',
            {
                'row-start-2': !!index,
                'row-start-1': !index,
            }
        )}
    />

    <header
        class="row-start-1 row-end-2 col-start-1 col-end-2 600:col-end-3 grid grid-cols-[1.25rem_1fr] grid-rows-1 gap-x-4 700:gap-x-6"
    >
        {#if !!index}
            <Badge class="col-start-1 col-end-2 row-start-1 row-end-2 self-center">
                {index}
            </Badge>
        {/if}

        <div
            class={clsx('col-end-3 row-start-1 row-end-2 self-center', {
                'col-start-2': !!index,
                'col-start-1 600:col-start-2': !index,
            })}
        >
            <slot name="header" />
        </div>
    </header>

    <div
        class={clsx('row-start-2 row-end-3 col-start-1 col-end-2 600:col-start-2 600:col-end-3', {
            'mt-7': !!$$slots.header,
        })}
    >
        <slot />
    </div>

    {#if $$slots.footer}
        <footer class="col-start-1 col-end-2 600:col-start-2 600:col-end-3 row-start-3 row-end-4 mt-7">
            <slot name="footer" />
        </footer>
    {/if}
</section>
