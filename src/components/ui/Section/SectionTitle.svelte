<script lang="ts">
    import clsx from 'clsx';
    import { getContext } from 'svelte';
    import type { TSectionHeaderContext } from '$components';
    import { Text } from '$components';

    const sectionHeaderContext = getContext<TSectionHeaderContext>('section-header');
</script>

<Text
    class={clsx(
        {
            'row-start-1 row-end-2 col-start-2 col-end-3': !sectionHeaderContext,
        },
        $$props.class
    )}
    tag="h2"
    type="title"
>
    <slot />
</Text>
