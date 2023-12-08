<script lang="ts">
    import { FlowItem, Link, LinkIcon, LinkText, ListTags } from '$components';
    import { insertDynamicRouteParam } from '$utilities';
    import { ROUTES_STORY } from '$constants';
    import type { TFlowItemStoryStory } from './FlowItemStory.types';

    // -------------------------------------------------------------------------
    // Props
    // -------------------------------------------------------------------------
    export let story: TFlowItemStoryStory;

    // -------------------------------------------------------------------------
    // Variables
    // -------------------------------------------------------------------------
    const { slug, title, image, date, description, tags } = story;
</script>

<FlowItem
    item={{
        image: {
            border: true,
            src: image,
            alt: title,
        },
    }}
    {title}
>
    <time
        class="text-site-contrast-2 text-3 block"
        datetime=""
    >
        {date}
    </time>

    <p class="mt-4">
        {description}
    </p>

    <footer class="mt-7 flex justify-between gap-x-7">
        <ListTags items={tags} />

        <Link
            action={{
                href: insertDynamicRouteParam(ROUTES_STORY, 'slug', slug),
            }}
        >
            <LinkText>Read more</LinkText>

            <LinkIcon
                class="w-6"
                icon={{ name: 'ChevronRight' }}
            />
        </Link>
    </footer>
</FlowItem>
