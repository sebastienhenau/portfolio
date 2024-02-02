<script lang="ts">
    import { Button, ButtonIcon, ButtonText, Date, Tag, TagGroup, TagGroupItem, Text } from '$components';
    import { ROUTES_BLOG } from '$constants';
    import type { TPageData } from './+page';

    export let data: TPageData;

    const { metadata, content } = data;
    const { title, tags, date } = metadata;
</script>

<Button
    action={{ href: ROUTES_BLOG }}
    size="sm"
    variant="neutral"
>
    <ButtonIcon
        class="w-6"
        icon={{ name: 'ChevronLeft' }}
    />

    <ButtonText>Back to blog posts</ButtonText>
</Button>

<article class="mt-8">
    <header class="space-y-4">
        <Text
            tag="h1"
            type="title"
            variant="lg"
        >
            {title}
        </Text>

        <Date
            class="text-site-contrast-2"
            value={date}
        />

        <TagGroup>
            {#each tags as tag}
                <TagGroupItem>
                    <Tag>
                        {tag}
                    </Tag>
                </TagGroupItem>
            {/each}
        </TagGroup>
    </header>

    <div class="mt-8 wysiwyg">
        <svelte:component this={content} />
    </div>
</article>
