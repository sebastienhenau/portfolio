<script lang="ts">
    import {
        Button,
        ButtonIcon,
        ButtonText,
        Flow,
        FlowTitle,
        Table,
        TableBodyRowProject,
        TableHeaderColumn,
    } from '$components';
    import { projects } from '$content';
</script>

<!-- TODO: link projects by companies -->
<Flow index="1">
    <div
        class="flex justify-between items-center gap-6"
        slot="header"
    >
        <FlowTitle>Projects</FlowTitle>

        <Button
            size="sm"
            variant="neutral"
        >
            <ButtonText>Filter</ButtonText>

            <ButtonIcon icon={{ name: 'Filter' }} />
        </Button>
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
