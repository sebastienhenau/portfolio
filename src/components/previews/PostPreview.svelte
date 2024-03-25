<script
    context="module"
    lang="ts"
>
    import type { TPost } from '$types';

    export type TPostPreviewPost = TPost;

    export interface TBlogPostPreview {
        post: TPostPreviewPost;
    }
</script>

<script lang="ts">
    import {
        Link,
        Date,
        Preview,
        Tag,
        TagGroup,
        TagGroupItem,
        Text,
        Button,
        ButtonText,
        ButtonIcon,
        LinkText,
    } from '$components';
    import { insertDynamicRouteParam } from '$utilities';
    import { ROUTES_BLOG_ITEM } from '$constants';
    import { HeadingsContext } from '$contexts';

    export let post: TPostPreviewPost;

    const { slug, title, image, date, description, tags } = post;
    const href = insertDynamicRouteParam(ROUTES_BLOG_ITEM, 'slug', slug);
</script>

<HeadingsContext>
    <Preview
        image={{
            src: image,
            alt: title,
            loading: 'lazy',
        }}
    >
        <Text
            type="title-3"
            useHeadingsContext
        >
            <Link action={{ href }}>
                <LinkText>
                    {title}
                </LinkText>
            </Link>
        </Text>

        <Date
            class="text-site-contrast-2 block mt-2"
            value={date}
        />

        <p class="mt-4">
            {description}
        </p>

        <footer
            class="mt-5 flex @700/preview:flex-wrap flex-col @700/preview:flex-row @700/preview:justify-end items-end @700/preview:items-baseline gap-5 @700/preview:gap-7"
        >
            <TagGroup class="w-full @700/preview:w-auto @700/preview:flex-1">
                {#each tags as tag}
                    <TagGroupItem>
                        <Tag>
                            {tag}
                        </Tag>
                    </TagGroupItem>
                {/each}
            </TagGroup>

            <Button
                variant="neutral"
                size="sm"
                action={{
                    href,
                    ariaLabel: `Read more about ${title}`,
                    tabIndex: -1,
                }}
            >
                <ButtonText>
                    Read more<span class="sr-only"> about {title}</span>
                </ButtonText>

                <ButtonIcon
                    class="w-6"
                    icon={{ name: 'ChevronRight' }}
                />
            </Button>
        </footer>
    </Preview>
</HeadingsContext>
