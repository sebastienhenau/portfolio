<script lang="ts">
    import clsx from 'clsx';
    import { getContext } from 'svelte';
    import type { TSectionContext } from './Section.svelte';

    const sectionContext = getContext<TSectionContext>('section');
</script>

<div
    class={clsx(
        'col-start-1 col-end-2 max-600:hidden w-border rounded-full bg-line self-stretch justify-self-center pointer-events-none',
        {
            'row-span-full': sectionContext.parts,
            'row-start-2 row-end-4': !sectionContext.parts,
        }
    )}
/>
