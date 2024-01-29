<script
    context="module"
    lang="ts"
>
    import type { TActionProps } from '$components';

    export type TButtonAction = TActionProps;
    export type TButtonVariant = 'default' | 'neutral';
    export type TButtonSize = 'default' | 'sm';
    export type TButtonForm = 'default' | 'square';

    export interface TButtonProps {
        action: TButtonAction;
        variant?: TButtonVariant;
        size?: TButtonSize;
        form?: TButtonForm;
    }
</script>

<script lang="ts">
    import clsx from 'clsx';
    import { Action } from '$components';

    export let action: TButtonAction = {};
    export let variant: TButtonVariant = 'default';
    export let size: TButtonSize = 'default';
    export let form: TButtonForm = 'default';
</script>

<Action
    {...action}
    class={clsx(
        'inline-flex justify-center items-center gap-3 relative z-0 group',
        {
            'text-accent-contrast': variant === 'default',
            'text-site-contrast-1': variant === 'neutral',
            'px-5': size === 'default' && form === 'default',
            'h-[2.5rem]': size === 'default',
            'px-3': size === 'sm' && form === 'default',
            'h-[2rem]': size === 'sm',
            'aspect-square': form === 'square',
        },
        $$props.class
    )}
    on:click
>
    <span class="absolute inset-0 -z-20 bg-line rounded translate-x-2 translate-y-2" />

    <span
        class="absolute inset-0 -z-10 bg-site-base rounded border group-hover:-translate-x-1 group-hover:-translate-y-1 group-active:translate-x-2 group-active:translate-y-2 transition-transform"
    />

    <slot />
</Action>
