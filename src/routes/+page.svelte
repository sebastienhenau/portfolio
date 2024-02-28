<script lang="ts">
    import {
        BlogPostPreview,
        Button,
        ButtonIcon,
        ButtonText,
        Cta,
        Divider,
        HomeAboutGrid,
        /*ProjectTableBodyRow,*/
        Section,
        SectionFooter,
        SectionHeader,
        SectionTitle,
        Table,
        TableBody,
        TableHeader,
        TableHeaderColumn,
    } from '$components';
    import { ROUTES_BLOG, ROUTES_PROJECTS } from '$constants';
    import type { TPageData } from './+page';
    /*import { projects } from '$content';*/

    export let data: TPageData;

    const topStories = [...data.stories].slice(0, 3);
    /*const topProjects = [...projects].slice(0, 3);*/
</script>

<svelte:head>
    <title>Home | Sébastien Henau</title>

    <meta
        content="I'm a front-end developer from Belgium. I build websites and web applications with HTML, CSS and JavaScript."
        name="description"
    />
</svelte:head>

<HomeAboutGrid />

<Divider />

<Section>
    <SectionHeader number="1">
        <SectionTitle slot="start">Blog</SectionTitle>
    </SectionHeader>

    <ul class="space-y-6 mt-7">
        {#each topStories as story}
            <li>
                <BlogPostPreview {story} />
            </li>
        {/each}
    </ul>

    <SectionFooter class="mt-7">
        <Cta>
            <Button action={{ href: ROUTES_BLOG }}>
                <ButtonText>Go to all posts</ButtonText>

                <ButtonIcon
                    class="w-6"
                    icon={{ name: 'ChevronRight' }}
                />
            </Button>
        </Cta>
    </SectionFooter>
</Section>

<Divider />

<Section>
    <SectionHeader number="2">
        <SectionTitle slot="start">Projects</SectionTitle>
    </SectionHeader>

    <Table class="mt-7">
        <TableHeader>
            <TableHeaderColumn>Year</TableHeaderColumn>

            <TableHeaderColumn>Name</TableHeaderColumn>

            <TableHeaderColumn class="hidden @550/table:table-cell">Technologies</TableHeaderColumn>
        </TableHeader>

        <TableBody>
            <!--{#each topProjects as project}
                <ProjectTableBodyRow {project} />
            {/each}-->
        </TableBody>
    </Table>

    <SectionFooter class="mt-7">
        <Cta>
            <Button action={{ href: ROUTES_PROJECTS }}>
                <ButtonText>Go to all projects</ButtonText>

                <ButtonIcon
                    class="w-6"
                    icon={{ name: 'ChevronRight' }}
                />
            </Button>
        </Cta>
    </SectionFooter>
</Section>
