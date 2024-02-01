<script
    context="module"
    lang="ts"
>
    export type TSectionPartTag = 'div' | 'section';
    export type TSectionPartRoot = boolean;

    export interface TSectionPartProps {
        tag?: TSectionPartTag;
        root?: TSectionPartRoot;
    }
</script>

<script lang="ts">
    import clsx from 'clsx';
    import { getContext } from 'svelte';
    import type { TSectionContext } from './Section.svelte';
    import SectionLine from './SectionLine.svelte';

    export let root: TSectionPartRoot = false;
    export let tag: TSectionPartTag = 'div';

    const sectionContext = getContext<TSectionContext>('section');
    // TODO: try to simplify?
    const isRootWithoutParts = root && !sectionContext.parts;
    const isPartOfSection = !root && sectionContext.parts;
</script>

<!-- TODO: link 1.25rem to badge or inherit badge -->
<svelte:element
    this={tag}
    class={clsx(
        {
            'grid grid-cols-[auto_1fr] 600:grid-cols-[1.25rem_1fr] grid-rows-3-auto gap-x-4 700:gap-x-6':
                isRootWithoutParts || isPartOfSection,
        },
        $$props.class
    )}
>
    {#if isRootWithoutParts || isPartOfSection}
        <SectionLine />
    {/if}

    <slot />
</svelte:element>
