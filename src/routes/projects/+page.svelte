<script lang="ts">
    import {
        Link,
        Section,
        SectionHeader,
        SectionTitle,
        Text,
        Table,
        TableHeader,
        TableHeaderColumn,
        TableBody,
        ProjectTableBodyRow,
        LinkText,
    } from "$components";
    import { projects } from "$content";
</script>

<svelte:head>
    <title>Projects | Sébastien Henau</title>

    <meta
        content="I work on projects ranging from content websites to data driven applications to experimental digital experiences."
        name="description"
    />
</svelte:head>

<Section>
    <SectionHeader>
        <SectionTitle>Projects</SectionTitle>

        <!--<Button
            size="sm"
            slot="end"
            variant="neutral"
        >
            <ButtonText>Filter</ButtonText>

            <ButtonIcon icon={{ name: 'Filter' }} />
        </Button>-->
    </SectionHeader>

    <div class="mt-4 space-y-4">
        <Text tag="p" type="text">
            I have worked on projects ranging from content websites to data driven applications to experimental digital
            experiences. Currently, I'm working at <Link
                inline
                action={{ href: "http://www.spatie.be", target: "_blank" }}><LinkText>Spatie</LinkText></Link
            >, mainly focused on front-end development.
        </Text>

        <Text tag="p" type="text">
            In my past experiences I have had the possibility to work on a number of projects. These projects are the
            result of a <strong>great collaboration</strong> and I've had the pleasure of working with a
            <strong>great team of people</strong>.
        </Text>
    </div>

    <Table class="mt-8">
        <TableHeader>
            <TableHeaderColumn>Year</TableHeaderColumn>

            <TableHeaderColumn class="@550/table:w-[40%]">Project</TableHeaderColumn>

            <TableHeaderColumn class="hidden @550/table:table-cell">Technologies</TableHeaderColumn>
        </TableHeader>

        <TableBody>
            {#each projects as project}
                <ProjectTableBodyRow {project} />
            {/each}
        </TableBody>
    </Table>
</Section>
