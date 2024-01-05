<script lang="ts">
    import { Item, Link, LinkIcon, LinkText, ListTags } from '$components';
    import { insertDynamicRouteParam } from '$utilities';
    import { ROUTES_STORY } from '$constants';
    import type { TItemStoryStory } from './ItemStory.types';
    import clsx from 'clsx';

    // -----------------------------------------------------------------------------------------------------------------
    // Props
    // -----------------------------------------------------------------------------------------------------------------
    export let story: TItemStoryStory;

    // -----------------------------------------------------------------------------------------------------------------
    // Variables
    // -----------------------------------------------------------------------------------------------------------------
    const { slug, title, image, date, description, tags } = story;
</script>

<Item
    image={{
        border: true,
        src: image,
        alt: title,
    }}
>
    <h3 class={clsx('font-bold relative', $$props.class)}>
        {title}
    </h3>

    <time
        class="text-site-contrast-2 text-3 block"
        datetime=""
    >
        {date}
    </time>

    <p class="mt-4">
        {description}
    </p>

    <footer
        class="mt-5 flex @700/item:flex-wrap flex-col @700/item:flex-row @700/item:justify-end items-end @700/item:items-baseline gap-5 @700/item:gap-7"
    >
        <ListTags
            class="w-full @700/item:w-auto @700/item:flex-1"
            items={tags}
        />

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
</Item>
