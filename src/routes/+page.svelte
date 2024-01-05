<script lang="ts">
    import { Cta, Divider, Flow, FlowTitle, HomeAboutCard, ItemProject, ItemStory } from '$components';
    import { projects } from '$content';
    import { ROUTES_PROJECTS, ROUTES_STORIES } from '$constants';
    import type { TPageData } from './page.types';

    // -----------------------------------------------------------------------------------------------------------------
    // Server
    // -----------------------------------------------------------------------------------------------------------------
    export let data: TPageData;

    // -----------------------------------------------------------------------------------------------------------------
    // Variables
    // -----------------------------------------------------------------------------------------------------------------
    const lastProjects = [...projects].splice(0, 3);
</script>

<HomeAboutCard />

<Divider />

<Flow index="1">
    <FlowTitle slot="header">Stories</FlowTitle>

    <ul class="space-y-6">
        {#each data.stories as story}
            <li>
                <ItemStory {story} />
            </li>
        {/each}
    </ul>

    <Cta
        button={{
            action: {
                href: ROUTES_STORIES,
            },
        }}
        slot="footer"
        text="Show all stories"
    />
</Flow>

<Divider />

<Flow index="2">
    <FlowTitle slot="header">Projects</FlowTitle>

    <ul class="space-y-6">
        {#each lastProjects as project}
            <li>
                <ItemProject {project} />
            </li>
        {/each}
    </ul>

    <Cta
        button={{
            action: {
                href: ROUTES_PROJECTS,
            },
        }}
        slot="footer"
        text="Show all projects"
    />
</Flow>
