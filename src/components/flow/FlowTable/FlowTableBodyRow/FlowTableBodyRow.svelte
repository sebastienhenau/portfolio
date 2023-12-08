<script lang="ts">
    import { Dot, TableBodyRow } from '$components';
</script>

<!--[&>*:nth-child(2)]:pl-0-->
<TableBodyRow class="flow-table-body-row">
    <td class="flow-table-body-row-dot-column absolute p-0 top-0 h-full flex items-center">
        <Dot class="-translate-x-1/2" />
    </td>

    <slot />
</TableBodyRow>
