<script lang="ts">
    import { BlogPostPreview, Button, ButtonIcon, ButtonText, Section, SectionHeader, SectionTitle } from '$components';
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

    <div class="mt-7">
        <ul>
            {#each data.blogPosts as blogPost}
                <li>
                    <BlogPostPreview {blogPost} />
                </li>
            {/each}
        </ul>
    </div>
</Section>
