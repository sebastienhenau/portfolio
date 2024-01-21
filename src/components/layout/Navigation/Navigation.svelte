<script lang="ts">
    import clsx from 'clsx';
    import { ROUTES_ABOUT, ROUTES_HOME, ROUTES_PROJECTS, ROUTES_STORIES } from '$constants';
    import { NavigationItem } from './NavigationItem';
</script>

<nav class={clsx('max-500:hidden', $$props.class)}>
    <ul class="panel p-4 900:p-6 flex 900:flex-col gap-3">
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
