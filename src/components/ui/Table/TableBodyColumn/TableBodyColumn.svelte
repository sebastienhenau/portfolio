<script lang="ts">
    import clsx from 'clsx';
    import type { TTableBodyColumnSpacing } from './TableBodyColumn.types';

    // -----------------------------------------------------------------------------------------------------------------
    // Props
    // -----------------------------------------------------------------------------------------------------------------
    export let spacing: TTableBodyColumnSpacing = true;
</script>

<td
    class={clsx(
        'relative z-10 py-5 px-3',
        {
            'pl-5': spacing,
        },
        $$props.class
    )}
>
    <slot />
</td>
