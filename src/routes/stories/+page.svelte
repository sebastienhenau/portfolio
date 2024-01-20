<script lang="ts">
    import { Button, ButtonIcon, ButtonText, Flow, FlowTitle, ItemStory } from '$components';
    import type { TPageData } from './page.types';

    // -----------------------------------------------------------------------------------------------------------------
    // Server
    // -----------------------------------------------------------------------------------------------------------------
    export let data: TPageData;
</script>

<Flow index="1">
    <div
        class="flex justify-between items-center gap-6"
        slot="header"
    >
        <FlowTitle>Stories</FlowTitle>

        <Button
            size="sm"
            variant="neutral"
        >
            <ButtonText>Filter</ButtonText>

            <ButtonIcon icon={{ name: 'Filter' }} />
        </Button>
    </div>

    <ul>
        {#each data.stories as story}
            <li>
                <ItemStory {story} />
            </li>
        {/each}
    </ul>
</Flow>
