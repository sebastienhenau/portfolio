<script lang="ts">
    import { PostPreview, Section, SectionHeader, SectionTitle } from '$components';
    import type { TPageData } from './+page';

    export let data: TPageData;
</script>

<svelte:head>
    <title>Blog | Sébastien Henau</title>

    <meta
        content="I write about building websites and interfaces or hobbies like books or games."
        name="description"
    />
</svelte:head>

<Section>
    <SectionHeader>
        <SectionTitle>Blog</SectionTitle>

        <!--<Button
            size="sm"
            slot="end"
            variant="neutral"
        >
            <ButtonText>Filter</ButtonText>

            <ButtonIcon icon={{ name: 'Filter' }} />
        </Button>-->
    </SectionHeader>

    <ul class="mt-7">
        {#each data.posts as post}
            <li>
                <PostPreview {post} />
            </li>
        {/each}
    </ul>
</Section>
