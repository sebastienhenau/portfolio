<script lang="ts">
    import clsx from 'clsx';
    import { getContext } from 'svelte';
    import type { TButtonContext } from '../Button.types';

    // -----------------------------------------------------------------------------------------------------------------
    // Context getters
    // -----------------------------------------------------------------------------------------------------------------
    const button: TButtonContext = getContext('button');
</script>

<span
    class={clsx('text-inherit font-bold interactive-content', {
        'text-accent-contrast': button.variant === 'default',
        'text-site-contrast-1': button.variant === 'neutral',
    })}
>
    <slot />
</span>
