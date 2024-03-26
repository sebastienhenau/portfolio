<script lang="ts">
    import {
        PostPreview,
        Button,
        ButtonIcon,
        ButtonText,
        Highlight,
        Divider,
        HomeAboutGrid,
        ProjectTableBodyRow,
        Section,
        SectionFooter,
        SectionHeader,
        SectionTitle,
        Table,
        TableBody,
        TableHeader,
        TableHeaderColumn,
        Text,
    } from "$components";
    import { ROUTES_BLOG, ROUTES_PROJECTS } from "$constants";
    import { HeadingsContext } from "$contexts";
    import { projects } from "$content";
    import type { TPageData } from "./+page";

    export let data: TPageData;

    const topPosts = [...data.posts].slice(0, 3);
    const topProjects = [...projects].slice(0, 3);
</script>

<svelte:head>
    <title>Home | Sébastien Henau</title>

    <meta
        content="I'm a front-end developer from Belgium. I build websites and web applications with HTML, CSS and JavaScript."
        name="description"
    />
</svelte:head>

<Text class="sr-only" type="title-1" useHeadingsContext>Home</Text>

<HeadingsContext>
    <HomeAboutGrid />

    <Divider />

    <Section>
        <SectionHeader number="1">
            <SectionTitle>Blog</SectionTitle>
        </SectionHeader>

        <ul class="mt-7 space-y-6">
            {#each topPosts as post}
                <li>
                    <PostPreview {post} />
                </li>
            {/each}
        </ul>

        <SectionFooter class="mt-7">
            <Highlight verticalAlignment="center" horizontalAlignment="center">
                <Button action={{ href: ROUTES_BLOG }}>
                    <ButtonText>Go to all posts</ButtonText>

                    <ButtonIcon class="w-6" icon={{ name: "ChevronRight" }} />
                </Button>
            </Highlight>
        </SectionFooter>
    </Section>

    <Divider />

    <Section>
        <SectionHeader number="2">
            <SectionTitle>Projects</SectionTitle>
        </SectionHeader>

        <Table class="mt-7">
            <TableHeader>
                <TableHeaderColumn>Year</TableHeaderColumn>

                <TableHeaderColumn class="@550/table:w-[40%]">Project</TableHeaderColumn>

                <TableHeaderColumn class="hidden @550/table:table-cell">Technologies</TableHeaderColumn>
            </TableHeader>

            <TableBody>
                {#each topProjects as project}
                    <ProjectTableBodyRow {project} />
                {/each}
            </TableBody>
        </Table>

        <SectionFooter class="mt-7">
            <Highlight verticalAlignment="center" horizontalAlignment="center">
                <Button action={{ href: ROUTES_PROJECTS }}>
                    <ButtonText>Go to all projects</ButtonText>

                    <ButtonIcon class="w-6" icon={{ name: "ChevronRight" }} />
                </Button>
            </Highlight>
        </SectionFooter>
    </Section>
</HeadingsContext>
