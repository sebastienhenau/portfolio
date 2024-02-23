<script
    context="module"
    lang="ts"
>
    import type { TStory } from '$types';

    export type TPreviewStoryStory = TStory;

    export interface TPreviewStory {
        story: TPreviewStoryStory;
    }
</script>

<script lang="ts">
    import { Date, Link, LinkIcon, LinkText, Preview, Tag, TagGroup, TagGroupItem, Text } from '$components';
    import { insertDynamicRouteParam } from '$utilities';
    import { ROUTES_BLOG_ITEM } from '$constants';

    export let story: TPreviewStoryStory;

    const { slug, title, image, date, description, tags } = story;
</script>

<Preview
    image={{
        src: image,
        alt: title,
    }}
>
    <Text
        class="relative z-50"
        tag="h3"
        type="title-3"
    >
        {title}
    </Text>

    <Date
        class="text-site-contrast-2 block"
        value={date}
    />

    <p class="mt-4">
        {description}
    </p>

    <footer
        class="mt-5 flex @700/item:flex-wrap flex-col @700/item:flex-row @700/item:justify-end items-end @700/item:items-baseline gap-5 @700/item:gap-7"
    >
        <TagGroup class="w-full @700/item:w-auto @700/item:flex-1">
            {#each tags as tag}
                <TagGroupItem>
                    <Tag>
                        {tag}
                    </Tag>
                </TagGroupItem>
            {/each}
        </TagGroup>

        <Link
            action={{
                href: insertDynamicRouteParam(ROUTES_BLOG_ITEM, 'slug', slug),
            }}
        >
            <LinkText>Read more</LinkText>

            <LinkIcon
                class="w-6"
                icon={{ name: 'ChevronRight' }}
            />
        </Link>
    </footer>
</Preview>
