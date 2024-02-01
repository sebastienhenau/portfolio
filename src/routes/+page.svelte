<script lang="ts">
    import {
        BlogPostPreview,
        Button,
        ButtonIcon,
        ButtonText,
        Cta,
        Divider,
        HomeAboutCard,
        Section,
        SectionContent,
        SectionFooter,
        SectionHeader,
        SectionTitle,
        Text,
    } from '$components';
    import { ROUTES_BLOG, ROUTES_PROJECTS } from '$constants';
    import type { TPageData } from './+page';
    /*import { projects } from '$content';*/

    export let data: TPageData;

    const topStories = [...data.stories].slice(0, 3);
    /*const topProjects = [...projects].slice(0, 3);*/
</script>

<HomeAboutCard />

<Divider />

<Section>
    <SectionHeader number="1">
        <SectionTitle slot="start">Blog</SectionTitle>
    </SectionHeader>

    <SectionContent class="mt-7">
        <ul class="space-y-6">
            {#each topStories as story}
                <li>
                    <BlogPostPreview {story} />
                </li>
            {/each}
        </ul>
    </SectionContent>

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

    <SectionContent>
        <Text>Coming soon...</Text>
        <!--<Table>
            <TableBody>
                {#each topProjects as project}
                    <ProjectTableBodyRow {project} />
                {/each}
            </TableBody>
        </Table>-->
    </SectionContent>

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
