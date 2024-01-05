<script lang="ts">
    import { Badge, Flow, FlowTitle, Table, TableBodyRowProject, TableHeaderColumn } from '$components';
    import { projects } from '$content';
</script>

<!-- TODO: link projects by companies -->
<Flow>
    <div
        class="flex items-center gap-x-5"
        slot="header"
    >
        <Badge theme="accent">{projects.length}</Badge>

        <FlowTitle>Little Miss Robot</FlowTitle>
    </div>

    <div class="@container/projects-table">
        <Table>
            <svelte:fragment slot="header">
                <TableHeaderColumn spacing={false}>Year</TableHeaderColumn>

                <TableHeaderColumn>Name</TableHeaderColumn>

                <TableHeaderColumn class="hidden @550/projects-table:table-cell">Technologies</TableHeaderColumn>
            </svelte:fragment>

            {#each projects as project}
                <TableBodyRowProject {project} />
            {/each}
        </Table>
    </div>
</Flow>
