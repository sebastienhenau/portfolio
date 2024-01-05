<script lang="ts">
    import { Badge, Flow, FlowTitle, ItemStory } from '$components';
    import type { TPageData } from './page.types';

    // -----------------------------------------------------------------------------------------------------------------
    // Server
    // -----------------------------------------------------------------------------------------------------------------
    export let data: TPageData;
</script>

<Flow>
    <div
        class="flex items-center gap-x-5"
        slot="header"
    >
        <Badge theme="accent">{data.stories.length}</Badge>

        <FlowTitle>Stories</FlowTitle>
    </div>

    <ul>
        {#each data.stories as story}
            <li>
                <ItemStory {story} />
            </li>
        {/each}
    </ul>
</Flow>
