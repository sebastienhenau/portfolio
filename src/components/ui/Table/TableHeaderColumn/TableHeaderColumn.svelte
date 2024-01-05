<script lang="ts">
    import clsx from 'clsx';
    import type { TTableHeaderColumnSpacing } from './TableHeaderColumn.types';

    // -----------------------------------------------------------------------------------------------------------------
    // Props
    // -----------------------------------------------------------------------------------------------------------------
    export let spacing: TTableHeaderColumnSpacing = true;
</script>

<th
    class={clsx(
        'text-left text-site-contrast-2 text-3 py-3',
        {
            'pl-5': spacing,
        },
        $$props.class
    )}
>
    <slot />
</th>
