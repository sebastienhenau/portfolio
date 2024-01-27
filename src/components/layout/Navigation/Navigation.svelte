<script lang="ts">
    import clsx from 'clsx';
    import { createEventDispatcher } from 'svelte';
    import { goto } from '$app/navigation';
    import { ROUTES_ABOUT, ROUTES_HOME, ROUTES_PROJECTS, ROUTES_STORIES } from '$constants';
    import { NavigationItem } from './NavigationItem';

    // -----------------------------------------------------------------------------------------------------------------
    // Variables
    // -----------------------------------------------------------------------------------------------------------------
    const dispatch = createEventDispatcher();

    // -----------------------------------------------------------------------------------------------------------------
    // Event listeners
    // -----------------------------------------------------------------------------------------------------------------
    /* eslint-disable-next-line */
    const onClickNavigationItem = (e: any) => {
        dispatch('clickNavigationItem');

        goto(e.detail.href);
    };
</script>

<ul
    class={clsx(
        'flex max-500:flex-col 900:flex-col max-500:[&>*:not(:first-child)]:mt-[-2px] 500:max-900:[&>*:not(:first-child)]:ml-[-2px] 900:[&>*:not(:first-child)]:mt-[-2px]',
        $$props.class
    )}
>
    <NavigationItem
        action={{
            href: ROUTES_HOME,
        }}
        icon={{
            name: 'Home',
        }}
        on:click={onClickNavigationItem}
    >
        Home
    </NavigationItem>

    <NavigationItem
        action={{
            href: ROUTES_ABOUT,
        }}
        icon={{
            name: 'User',
        }}
        on:click={onClickNavigationItem}
    >
        About
    </NavigationItem>

    <NavigationItem
        action={{
            href: ROUTES_STORIES,
        }}
        icon={{
            name: 'Book',
        }}
        on:click={onClickNavigationItem}
    >
        Stories
    </NavigationItem>

    <NavigationItem
        action={{
            href: ROUTES_PROJECTS,
        }}
        icon={{
            name: 'Table',
        }}
        on:click={onClickNavigationItem}
    >
        Projects
    </NavigationItem>
</ul>
