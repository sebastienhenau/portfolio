<script lang="ts">
    import clsx from 'clsx';
    import { Table } from '$components';
</script>

<div class={clsx('flow-table-pl', $$props.class)}>
    <Table>
        <svelte:fragment slot="header">
            <th class="absolute top-0 left-0 h-full" />

            <slot name="header" />
        </svelte:fragment>

        <svelte:fragment>
            <slot />
        </svelte:fragment>
    </Table>
</div>
