<script lang="ts">
    import { Date, TableBodyColumn, TableBodyRow, Tag, TagGroup, TagGroupItem, Text } from '$components';

    export let project;

    const { name, date, technologies, company } = project;

    const limitedTechnologies = [...technologies].splice(0, 3);
    const remainingTechnologiesAmount = technologies.length - limitedTechnologies.length;
    const tagGroupItems =
        remainingTechnologiesAmount > 0
            ? [...limitedTechnologies, `+${remainingTechnologiesAmount}`]
            : limitedTechnologies;
</script>

<TableBodyRow>
    <TableBodyColumn>
        <Date value={date} />
    </TableBodyColumn>

    <TableBodyColumn>
        <Text
            tag="p"
            type="text"
            variant="fat"
        >
            {name}
        </Text>

        <Text
            tag="p"
            type="text"
        >
            Made at {company}
        </Text>
    </TableBodyColumn>

    <TableBodyColumn class="hidden @550/table:table-cell">
        <TagGroup>
            {#each tagGroupItems as tagGroupItem}
                <TagGroupItem>
                    <Tag>
                        {tagGroupItem}
                    </Tag>
                </TagGroupItem>
            {/each}
        </TagGroup>
    </TableBodyColumn>
</TableBodyRow>
