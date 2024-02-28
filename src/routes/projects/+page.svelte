<script lang="ts">
    import {
        Section,
        SectionHeader,
        SectionTitle,
        Text,
        Table,
        TableHeader,
        TableHeaderColumn,
        TableBody,
        /*ProjectTableBodyRow*/
    } from '$components';
    /*import { projects } from '$content';*/
</script>

<svelte:head>
    <title>Projects | Sébastien Henau</title>

    <meta
        content="I work on projects ranging from content websites to data driven applications to experimental digital experiences."
        name="description"
    />
</svelte:head>

<Section>
    <SectionHeader number="1">
        <SectionTitle slot="start">Projects</SectionTitle>

        <!--<Button
            size="sm"
            slot="end"
            variant="neutral"
        >
            <ButtonText>Filter</ButtonText>

            <ButtonIcon icon={{ name: 'Filter' }} />
        </Button>-->
    </SectionHeader>

    <div class="mt-4">
        <Text
            tag="p"
            type="text"
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere aliquet est vitae blandit. Fusce
            dignissim lorem urna, in eleifend ligula ultricies sed. Nulla scelerisque metus ac nunc cursus fringilla.
            Vestibulum finibus sodales libero nec molestie. Quisque ac condimentum neque. Phasellus pharetra turpis
            purus, nec egestas ligula aliquam eu. Suspendisse vel laoreet elit.
        </Text>
    </div>

    <Table class="mt-8">
        <TableHeader>
            <TableHeaderColumn>Year</TableHeaderColumn>

            <TableHeaderColumn>Name</TableHeaderColumn>

            <TableHeaderColumn class="hidden @550/table:table-cell">Technologies</TableHeaderColumn>
        </TableHeader>

        <TableBody>
            <!--{#each projects as project}
                <ProjectTableBodyRow {project} />
            {/each}-->
        </TableBody>
    </Table>
</Section>
