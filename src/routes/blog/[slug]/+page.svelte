<script lang="ts">
    import { Detail, DetailBackButton, DetailHeader, DetailContent, TagGroup, TagGroupItem, Tag } from "$components";
    import { HeadingsContext } from "$contexts";
    import { ROUTES_BLOG } from "$constants";
    import type { TPageData } from "./+page";

    export let data: TPageData;

    const { metadata, content } = data;
    const { title, description, tags, date } = metadata;
</script>

<svelte:head>
    <title>{`${title} | Sébastien Henau`}</title>

    <meta content={description} name="description" />
</svelte:head>

<Detail>
    <DetailBackButton href={ROUTES_BLOG}>Back to blog</DetailBackButton>

    <DetailHeader {title} {date}>
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

    <HeadingsContext>
        <DetailContent>
            <svelte:component this={content} />
        </DetailContent>
    </HeadingsContext>
</Detail>
