<script lang="ts">
    import { Action, Icon, ListTags, TableBodyColumn, TableBodyRow } from '$components';
    import type { TTableBodyRowProjectProject } from './TableBodyRowProject.types';

    // -----------------------------------------------------------------------------------------------------------------
    // Props
    // -----------------------------------------------------------------------------------------------------------------
    export let project: TTableBodyRowProjectProject;

    // -----------------------------------------------------------------------------------------------------------------
    // Variables
    // -----------------------------------------------------------------------------------------------------------------
    const { name, date, technologies, link, company } = project;

    const limitedTechnologies = [...technologies].splice(0, 3);
    const remainingTechnologiesAmount = technologies.length - limitedTechnologies.length;
    const listTagsItems =
        remainingTechnologiesAmount > 0
            ? [...limitedTechnologies, `+${remainingTechnologiesAmount}`]
            : limitedTechnologies;
</script>

<TableBodyRow>
    <TableBodyColumn spacing={false}>
        <time
            class="text-inherit block"
            datetime=""
        >
            {date}
        </time>
    </TableBodyColumn>

    <TableBodyColumn>
        <!-- TODO: replace by ActionIcon? -->
        <Action
            class="font-bold"
            href={link}
            target="_blank"
        >
            {name}

            <Icon
                class="ml-2"
                name="ExternalLink"
            />
        </Action>

        <p>
            Made at {company}
        </p>
    </TableBodyColumn>

    <TableBodyColumn class="w-1/2 hidden @550/projects-table:table-cell">
        <ListTags items={listTagsItems} />
    </TableBodyColumn>
</TableBodyRow>
