<script lang="ts">
    import {
        Button,
        ButtonIcon,
        ButtonText,
        ProjectTableBodyRow,
        Section,
        SectionContent,
        SectionHeader,
        SectionPart,
        SectionTitle,
        Table,
        TableBody,
        TableHeader,
        TableHeaderColumn,
        Text,
    } from '$components';
    import { projects } from '$content';
</script>

<Section
    number="1"
    parts
>
    <SectionHeader number="1">
        <SectionTitle slot="start">Projects</SectionTitle>

        <Button
            size="sm"
            slot="end"
            variant="neutral"
        >
            <ButtonText>Filter</ButtonText>

            <ButtonIcon icon={{ name: 'Filter' }} />
        </Button>
    </SectionHeader>

    <SectionPart class="mt-4">
        <SectionContent>
            <Text
                tag="p"
                type="text"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere aliquet est vitae blandit. Fusce
                dignissim lorem urna, in eleifend ligula ultricies sed. Nulla scelerisque metus ac nunc cursus
                fringilla. Vestibulum finibus sodales libero nec molestie. Quisque ac condimentum neque. Phasellus
                pharetra turpis purus, nec egestas ligula aliquam eu. Suspendisse vel laoreet elit.
            </Text>
        </SectionContent>
    </SectionPart>

    <Table class="mt-8">
        <TableHeader>
            <TableHeaderColumn>Year</TableHeaderColumn>

            <TableHeaderColumn>Name</TableHeaderColumn>

            <TableHeaderColumn class="hidden @550/table:table-cell">Technologies</TableHeaderColumn>
        </TableHeader>

        <TableBody>
            {#each projects as project}
                <ProjectTableBodyRow {project} />
            {/each}
        </TableBody>
    </Table>
</Section>
