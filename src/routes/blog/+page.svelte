<script lang="ts">
    import {
        BlogPostPreview,
        Button,
        ButtonIcon,
        ButtonText,
        Section,
        SectionContent,
        SectionHeader,
        SectionTitle,
    } from '$components';
    import type { TPageData } from './+page';

    export let data: TPageData;
</script>

<Section>
    <SectionHeader number="1">
        <SectionTitle slot="start">Blog</SectionTitle>

        <Button
            size="sm"
            slot="end"
            variant="neutral"
        >
            <ButtonText>Filter</ButtonText>

            <ButtonIcon icon={{ name: 'Filter' }} />
        </Button>
    </SectionHeader>

    <SectionContent class="mt-7">
        <!--<Text>Coming soon...</Text>-->

        <ul>
            {#each data.stories as story}
                <li>
                    <BlogPostPreview {story} />
                </li>
            {/each}
        </ul>
    </SectionContent>
</Section>
