<script lang="ts">
    import clsx from 'clsx';
    import { page } from '$app/stores';
    import type { TAction } from '$components';
    import { Action } from '$components';

    // -----------------------------------------------------------------------------------------------------------------
    // Props
    // -----------------------------------------------------------------------------------------------------------------
    export let action: TAction;

    // -----------------------------------------------------------------------------------------------------------------
    // Reactive statements
    // -----------------------------------------------------------------------------------------------------------------
    $: isActive = $page.url.pathname === action.href;
</script>

<li>
    <Action
        {...action}
        class="inline-block font-bold interactive px-3 py-1 group"
    >
        <div class="interactive-background" />

        <div
            class={clsx('interactive-foreground', {
                'bg-accent-base': isActive,
                'bg-site-base': !isActive,
            })}
        />

        <span class="block interactive-content">
            <slot />
        </span>
    </Action>
</li>
