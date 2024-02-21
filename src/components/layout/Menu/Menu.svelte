<script lang="ts">
    import clsx from 'clsx';
    import { ROUTES_ABOUT, ROUTES_BLOG, ROUTES_HOME, ROUTES_PROJECTS } from '$constants';
    import { ButtonGroup, Panel, PanelHeader, PanelContent } from '$components';
    import MenuItem from './MenuItem.svelte';
</script>

<Panel
    id="menu"
    class={clsx('900:sticky 900:top-6 900:z-40', $$props.class)}
    tag="nav"
    title="Menu"
>
    <PanelHeader>Menu</PanelHeader>

    <PanelContent>
        <ButtonGroup
            class="900:w-full"
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
    </PanelContent>
</Panel>
