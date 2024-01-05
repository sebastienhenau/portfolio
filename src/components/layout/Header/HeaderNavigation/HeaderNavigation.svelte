<script lang="ts">
    import clsx from 'clsx';
    import { ROUTES_ABOUT, ROUTES_HOME, ROUTES_PROJECTS, ROUTES_STORIES } from '$constants';
    import NavigationItem from './NavigationItem';
</script>

<!-- TODO: add uses & shorts -->
<nav class={clsx('max-700:hidden 1000:start-col-1 1000:end-col-3 1000:row-start-2 1000:row-end-3', $$props.class)}>
    <ul class="flex 1000:flex-col max-1000:gap-x-5">
        <NavigationItem
            action={{
                href: ROUTES_HOME,
            }}
        >
            Home
        </NavigationItem>

        <NavigationItem
            action={{
                href: ROUTES_ABOUT,
            }}
        >
            About
        </NavigationItem>

        <NavigationItem
            action={{
                href: ROUTES_STORIES,
            }}
        >
            Stories
        </NavigationItem>

        <NavigationItem
            action={{
                href: ROUTES_PROJECTS,
            }}
        >
            Projects
        </NavigationItem>
    </ul>
</nav>
