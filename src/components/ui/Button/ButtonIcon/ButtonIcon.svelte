<script lang="ts">
    import clsx from 'clsx';
    import { getContext } from 'svelte';
    import { Icon } from '$components';
    import type { TButtonIconIcon } from './ButtonIcon.types';
    import type { TButtonContext } from '../Button.types';

    // -----------------------------------------------------------------------------------------------------------------
    // Context getters
    // -----------------------------------------------------------------------------------------------------------------
    const button: TButtonContext = getContext('button');

    // -----------------------------------------------------------------------------------------------------------------
    // Props
    // -----------------------------------------------------------------------------------------------------------------
    export let icon: TButtonIconIcon;

    // -----------------------------------------------------------------------------------------------------------------
    // Reactive statements
    // -----------------------------------------------------------------------------------------------------------------
    $: variant = button.variant;
</script>

<!-- TODO: remove important -->
<Icon
    {...icon}
    class={clsx(
        'interactive-content',
        {
            '!text-accent-contrast': variant === 'default',
            '!text-site-contrast-1': variant === 'neutral',
        },
        $$props.class
    )}
/>
