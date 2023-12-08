<script lang="ts">
    import NavigationItem from './NavigationItem';
    import { ROUTES_ABOUT, ROUTES_HOME, ROUTES_PROJECTS, ROUTES_STORIES } from '$constants';
</script>

<!-- TODO: add uses & shorts -->
<nav class="1000:mt-7">
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
