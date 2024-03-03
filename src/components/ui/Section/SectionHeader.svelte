<script
    context="module"
    lang="ts"
>
    export type TSectionHeaderNumber = string;

    export interface TSectionHeaderProps {
        number?: TSectionHeaderNumber;
    }
</script>

<script lang="ts">
    import clsx from 'clsx';
    import { Badge } from '$components';

    export let number: TSectionHeaderNumber = '';
</script>

<header
    class={clsx(
        {
            'flex items-center gap-4': !!number,
        },
        $$props.class
    )}
>
    {#if !!number}
        <Badge>
            {number}
        </Badge>
    {/if}

    {#if $$slots.start && $$slots.end}
        <div
            class={clsx('flex justify-between items-center gap-4', {
                'flex-1': !!number,
            })}
        >
            <slot name="start" />

            <slot name="end" />
        </div>
    {:else}
        <slot />
    {/if}
</header>
