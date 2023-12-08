<script lang="ts">
    import { clsx } from 'clsx';
    import { page } from '$app/stores';
    import type { TAction } from '$components';
    import { Action } from '$components';

    // -------------------------------------------------------------------------
    // Props
    // -------------------------------------------------------------------------
    export let action: TAction;

    // -------------------------------------------------------------------------
    // Reactive statements
    // -------------------------------------------------------------------------
    $: isActive = $page.url.pathname === action.href;
</script>

<li>
    <Action
        {...action}
        class={clsx('inline-block font-semibold transition-colors 1000:py-1 hover:text-accent', {
            'text-accent': isActive,
        })}
    >
        <slot />
    </Action>
</li>
