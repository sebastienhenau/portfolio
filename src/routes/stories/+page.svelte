<script lang="ts">
    import { Flow, FlowTitle } from '$components';

    // -----------------------------------------------------------------------------------------------------------------
    // Server
    // -----------------------------------------------------------------------------------------------------------------
    // export let data: TPageData;
</script>

<Flow index="1">
    <!-- TODO: header with filter -->
    <!--<div
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
    </div>-->
    <FlowTitle slot="header">Stories</FlowTitle>

    <!--<ul>
        {#each data.stories as story}
            <li>
                <ItemStory {story} />
            </li>
        {/each}
    </ul>-->
    <p>Coming soon...</p>
</Flow>
