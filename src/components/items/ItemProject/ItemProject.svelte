<script lang="ts">
    import type { TItemProjectProject } from './ItemProject.types';
    import { Item, Link, LinkIcon, LinkText, ListTags } from '$components';
    import clsx from 'clsx';

    // -----------------------------------------------------------------------------------------------------------------
    // Props
    // -----------------------------------------------------------------------------------------------------------------
    export let project: TItemProjectProject;

    // -----------------------------------------------------------------------------------------------------------------
    // Variables
    // -----------------------------------------------------------------------------------------------------------------
    const { name, image, company, role, date, technologies, link } = project;
</script>

<Item
    image={{
        border: true,
        src: image,
        alt: name,
    }}
>
    <h3 class={clsx('font-bold relative', $$props.class)}>
        {name}
    </h3>

    <ul class="space-y-2 mt-2">
        <li class="text-site-contrast-2">
            <time
                class="text-inherit block"
                datetime=""
            >
                {date}
            </time>
        </li>

        <li class="text-site-contrast-2">
            Made at {company}
        </li>

        <li class="text-site-contrast-2">
            {role}
        </li>
    </ul>

    <footer
        class="mt-5 flex @700/item:flex-wrap flex-col @700/item:flex-row @700/item:justify-end items-end @700/item:items-baseline gap-5 @700/item:gap-7"
    >
        <ListTags
            class="w-full @700/item:w-auto @700/item:flex-1"
            items={technologies}
        />

        <Link
            action={{
                href: link,
                target: '_blank',
            }}
        >
            <LinkText>Check it out</LinkText>

            <LinkIcon
                class="w-6"
                icon={{ name: 'ChevronRight' }}
            />
        </Link>
    </footer>
</Item>
