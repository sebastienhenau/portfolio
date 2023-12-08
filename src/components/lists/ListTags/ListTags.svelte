<script lang="ts">
    import clsx from 'clsx';
    import { Tag } from '$components';
    import type { TListTagsItems } from './ListTags.types';

    // -------------------------------------------------------------------------
    // Props
    // -------------------------------------------------------------------------
    export let items: TListTagsItems = [];
</script>

<ul class={clsx('flex flex-wrap gap-3', $$props.class)}>
    {#each items as item}
        <li>
            <Tag>
                {item}
            </Tag>
        </li>
    {/each}
</ul>
