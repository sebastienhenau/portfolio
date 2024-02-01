<script
    context="module"
    lang="ts"
>
    export type TSectionHeaderNumber = string;

    export interface TSectionHeaderProps {
        number: TSectionHeaderNumber;
    }
</script>

<script lang="ts">
    import clsx from 'clsx';
    import { getContext } from 'svelte';
    import { Badge } from '$components';
    import type { TSectionContext } from './Section.svelte';

    export let number: TSectionHeaderNumber;

    const sectionContext = getContext<TSectionContext>('section');
</script>

<header
    class={clsx(
        'flex items-center gap-4 700:gap-6',
        {
            'row-start-1 row-end-2 col-span-full': !sectionContext.parts,
        },
        $$props.class
    )}
>
    <Badge>
        {number}
    </Badge>

    <div class="flex-1 flex justify-between items-center gap-4">
        <slot name="start" />

        <slot name="end" />
    </div>
</header>
