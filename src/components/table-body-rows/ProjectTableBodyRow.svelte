<script lang="ts">
    import {
        Link,
        LinkIcon,
        LinkText,
        TableBodyColumn,
        TableBodyRow,
        Tag,
        TagGroup,
        TagGroupItem,
        Text,
        YearGroup,
    } from '$components';

    export let project;

    const { name, date, technologies, link, company } = project;

    const limitedTechnologies = [...technologies].splice(0, 3);
    const remainingTechnologiesAmount = technologies.length - limitedTechnologies.length;
    const tagGroupItems =
        remainingTechnologiesAmount > 0
            ? [...limitedTechnologies, `+${remainingTechnologiesAmount}`]
            : limitedTechnologies;
</script>

<TableBodyRow>
    <TableBodyColumn>
        <YearGroup value={date} />
    </TableBodyColumn>

    <TableBodyColumn>
        <Link
            action={{ href: link, target: '_blank', ariaLabel: `Visit ${name} in a new tab window` }}
            variant="neutral"
        >
            <LinkText>
                {name}
            </LinkText>

            <LinkIcon icon={{ name: 'ExternalLink' }} />
        </Link>

        <!-- TODO: link LMR -->
        <Text
            tag="p"
            type="text"
        >
            <!--Made at <Action href={companyUrl} target="_blank" ariaLabel={`Made at ${company}, visit the website`}>{company}</Action>-->
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
