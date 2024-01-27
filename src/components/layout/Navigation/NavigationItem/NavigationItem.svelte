<script lang="ts">
    import clsx from 'clsx';
    import { createEventDispatcher } from 'svelte';
    import { page } from '$app/stores';
    import { Action, Icon } from '$components';
    import type { TNavigationItemAction, TNavigationItemIcon } from './NavigationItem.types';

    // -----------------------------------------------------------------------------------------------------------------
    // Props
    // -----------------------------------------------------------------------------------------------------------------
    export let action: TNavigationItemAction;
    export let icon: TNavigationItemIcon;

    // -----------------------------------------------------------------------------------------------------------------
    // Variables
    // -----------------------------------------------------------------------------------------------------------------
    const dispatch = createEventDispatcher();
    const { href, ...restAction } = action;

    // -----------------------------------------------------------------------------------------------------------------
    // Reactive statements
    // -----------------------------------------------------------------------------------------------------------------
    $: isActive = $page.url.pathname === href;

    // -----------------------------------------------------------------------------------------------------------------
    // Event listeners
    // -----------------------------------------------------------------------------------------------------------------
    const onClick = () => {
        dispatch('click', {
            href,
        });
    };
</script>

<li>
    <Action
        {...restAction}
        class="inline-flex items-center gap-2 font-bold interactive px-3 py-2 group w-full"
        on:click={onClick}
    >
        <div class="interactive-background" />

        <div
            class={clsx('interactive-foreground', {
                'bg-accent-base': isActive,
                'bg-site-base': !isActive,
            })}
        />

        <!-- TODO: do not overwrite with important -->
        <Icon
            {...icon}
            class={clsx('interactive-content', {
                '!text-accent-contrast': isActive,
                '!text-site-contrast-1': !isActive,
            })}
        />

        <span
            class={clsx('block interactive-content', {
                'text-accent-contrast': isActive,
                'text-site-contrast-1': !isActive,
            })}
        >
            <slot />
        </span>
    </Action>
</li>
