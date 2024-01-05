<script lang="ts">
    import clsx from 'clsx';
    import type { TBadgeInherit, TBadgeTheme } from './Badge.types';

    // -----------------------------------------------------------------------------------------------------------------
    // Props
    // -----------------------------------------------------------------------------------------------------------------
    export let theme: TBadgeTheme = 'default';
    export let inherit: TBadgeInherit = false;
</script>

<div
    class={clsx(
        'flex justify-center items-center border border-border rounded',
        {
            'bg-site-background': theme === 'default',
            'bg-accent': theme === 'accent',
            'w-[1.25rem] h-[1.25rem]': !inherit,
            'w-inherit h-inherit': inherit,
        },
        $$props.class
    )}
>
    <p
        class={clsx('leading-none text-2 font-bold', {
            'text-accent-contrast': theme === 'accent',
        })}
    >
        <slot />
    </p>
</div>
