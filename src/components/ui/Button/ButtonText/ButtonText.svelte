<script lang="ts">
    import clsx from 'clsx';
    import { getContext } from 'svelte';
    import type { TButtonContext } from '../Button.types';

    // -----------------------------------------------------------------------------------------------------------------
    // Context getters
    // -----------------------------------------------------------------------------------------------------------------
    const button: TButtonContext = getContext('button');

    // -----------------------------------------------------------------------------------------------------------------
    // Reactive statements
    // -----------------------------------------------------------------------------------------------------------------
    $: variant = button.variant;
</script>

<span
    class={clsx('font-bold interactive-content', {
        'text-accent-contrast': variant === 'default',
        'text-site-contrast-1': variant === 'neutral',
    })}
>
    <slot />
</span>
