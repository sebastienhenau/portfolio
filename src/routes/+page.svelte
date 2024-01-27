<script lang="ts">
    import { Cta, Divider, Flow, FlowTitle, HomeAboutCard } from '$components';
    import { ROUTES_STORIES } from '$constants';

    // -----------------------------------------------------------------------------------------------------------------
    // Server
    // -----------------------------------------------------------------------------------------------------------------
    // export let data: TPageData;

    // -----------------------------------------------------------------------------------------------------------------
    // Variables
    // -----------------------------------------------------------------------------------------------------------------
    // const lastProjects = [...projects].splice(0, 3);
</script>

<HomeAboutCard />

<Divider />

<Flow index="1">
    <FlowTitle slot="header">Stories</FlowTitle>

    <!--<ul class='space-y-6'>
        {#each data.stories as story}
            <li>
                <ItemStory {story} />
            </li>
        {/each}
    </ul>-->
    <p>Coming soon...</p>

    <Cta
        button={{
            action: {
                href: ROUTES_STORIES,
            },
        }}
        slot="footer"
    >
        View all stories
    </Cta>
</Flow>

<Divider />

<Flow index="2">
    <FlowTitle slot="header">Projects</FlowTitle>

    <!--<ul class='space-y-6'>
        {#each lastProjects as project}
            <li>
                <ItemProject {project} />
            </li>
        {/each}
    </ul>-->
    <p>Coming soon...</p>

    <Cta
        button={{
            action: {
                href: ROUTES_STORIES,
            },
        }}
        slot="footer"
    >
        View all projects
    </Cta>
</Flow>
