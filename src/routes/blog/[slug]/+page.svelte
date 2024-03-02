<script lang="ts">
    import { Detail, DetailBackButton, DetailHeader, DetailContent, TagGroup, TagGroupItem, Tag } from '$components';
    import { ROUTES_BLOG } from '$constants';
    import type { TPageData } from './+page';

    export let data: TPageData;

    const { metadata, content } = data;
    const { title, tags, date } = metadata;
</script>

<Detail>
    <DetailBackButton href={ROUTES_BLOG}>Back to blog</DetailBackButton>

    <DetailHeader
        {title}
        {date}
    >
        <TagGroup>
            {#each tags as tag}
                <TagGroupItem>
                    <Tag>
                        {tag}
                    </Tag>
                </TagGroupItem>
            {/each}
        </TagGroup>
    </DetailHeader>

    <DetailContent>
        <svelte:component this={content} />
    </DetailContent>
</Detail>
