<script lang="ts">
    import {
        Text,
        Link,
        LinkText,
        LinkIcon,
        TableBodyColumn,
        TableBodyRow,
        Tag,
        TagGroup,
        TagGroupItem,
        YearGroup,
    } from '$components';

    export let project;

    const { name, date, technologies, link, company, companyUrl } = project;
</script>

<TableBodyRow>
    <TableBodyColumn>
        <YearGroup value={date} />
    </TableBodyColumn>

    <TableBodyColumn class="space-y-2">
        <Link action={{ href: link, target: '_blank', ariaLabel: `Visit ${name} in a new tab window` }}>
            <LinkText text={{ type: 'title-3' }}>
                {name}
            </LinkText>

            <LinkIcon icon={{ name: 'ExternalLink' }} />
        </Link>

        <Text class="text-site-contrast-2">
            Made at <Link
                inline
                action={{ href: companyUrl, target: '_blank' }}><LinkText>{company}</LinkText></Link
            >
        </Text>
    </TableBodyColumn>

    <TableBodyColumn class="hidden @550/table:table-cell">
        <TagGroup>
            {#each technologies as technology}
                <TagGroupItem>
                    <Tag>
                        {technology}
                    </Tag>
                </TagGroupItem>
            {/each}
        </TagGroup>
    </TableBodyColumn>
</TableBodyRow>
