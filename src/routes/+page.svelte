<script lang="ts">
    import {
        Cta,
        Divider,
        Flow,
        FlowTitle,
        HomeAboutCard,
        ItemProject,
        ItemStory,
        Link,
        LinkIcon,
        LinkText,
    } from '$components';
    import { projects } from '$content';
    import { ROUTES_STORIES } from '$constants';
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
    <div
        class="flex justify-between items-center gap-6"
        slot="header"
    >
        <FlowTitle>Stories</FlowTitle>

        <Link>
            <LinkText>View all stories</LinkText>

            <LinkIcon
                class="w-6"
                icon={{ name: 'ChevronRight' }}
            />
        </Link>
    </div>

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
    >
        View all stories
    </Cta>
</Flow>

<Divider />

<Flow index="2">
    <div
        class="flex justify-between items-center gap-6"
        slot="header"
    >
        <FlowTitle>Projects</FlowTitle>

        <Link>
            <LinkText>View all projects</LinkText>

            <LinkIcon icon={{ name: 'ChevronRight' }} />
        </Link>
    </div>

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
                href: ROUTES_STORIES,
            },
        }}
        slot="footer"
    >
        View all projects
    </Cta>
</Flow>
