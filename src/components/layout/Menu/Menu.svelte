<script lang="ts">
    import clsx from 'clsx';
    import { ROUTES_ABOUT, ROUTES_BLOG, ROUTES_HOME, ROUTES_PROJECTS } from '$constants';
    import { ButtonGroup, Panel, PanelHeader, PanelContent } from '$components';
    import MenuItem from './MenuItem.svelte';
</script>

<div class={clsx('sticky max-900:bottom-0 900:top-6 z-40 max-500:full-bleed max-500:px-3 max-500:pb-5', $$props.class)}>
    <div class="500:hidden absolute inset-0 bg-site-base pointer-events-none z-0" />

    <Panel
        id="menu"
        tag="nav"
        class="max-500:relative max-500:z-10"
        title="Menu"
    >
        <PanelHeader>Menu</PanelHeader>

        <PanelContent>
            <ButtonGroup
                class="max-500:w-full 900:w-full"
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
</div>
