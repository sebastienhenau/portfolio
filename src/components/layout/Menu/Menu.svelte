<script lang="ts">
    import clsx from 'clsx';
    import { ROUTES_ABOUT, ROUTES_BLOG, ROUTES_HOME, ROUTES_PROJECTS } from '$constants';
    import { ButtonGroup } from '$components';
    import MenuItem from './MenuItem.svelte';
</script>

<nav class={clsx('panel p-4 900:p-6', $$props.class)}>
    <ButtonGroup
        customDirectionClass="max-900:[&>*:not(:first-child)]:ml-[-2px] 900:flex-col 900:[&>*:not(:first-child)]:mt-[-2px]"
    >
        <MenuItem
            href={ROUTES_HOME}
            icon="Home"
        >
            Home
        </MenuItem>

        <MenuItem
            href={ROUTES_ABOUT}
            icon="User"
        >
            About
        </MenuItem>

        <MenuItem
            href={ROUTES_BLOG}
            icon="Book"
        >
            Blog
        </MenuItem>

        <MenuItem
            href={ROUTES_PROJECTS}
            icon="Table"
        >
            Projects
        </MenuItem>
    </ButtonGroup>
</nav>
