<script
    context="module"
    lang="ts"
>
    import type { TActionProps } from '$components';

    export type TButtonAction = TActionProps;
    export type TButtonVariant = 'default' | 'neutral';
    export type TButtonSize = 'default' | 'sm';
    export type TButtonForm = 'default' | 'square';
    export type TButtonHorizontalAlign = 'left' | 'center';

    export interface TButtonProps {
        action: TButtonAction;
        variant?: TButtonVariant;
        size?: TButtonSize;
        form?: TButtonForm;
        horizontalAlign?: TButtonHorizontalAlign;
    }
</script>

<script lang="ts">
    import clsx from 'clsx';
    import { getContext } from 'svelte';
    import { Action } from '$components';
    import type { TButtonGroupContext, TButtonGroupItemContext } from '$components';

    export let action: TButtonAction = {};
    export let variant: TButtonVariant = 'default';
    export let size: TButtonSize = 'default';
    export let form: TButtonForm = 'default';
    export let horizontalAlign: TButtonHorizontalAlign = 'center';

    const buttonGroupContext = getContext<TButtonGroupContext>('buttonGroup') || false;
    const buttonGroupItemContext = getContext<TButtonGroupItemContext>('buttonGroupItem') || null;
    const { selected } = buttonGroupItemContext || {};
</script>

<Action
    {...action}
    class={clsx(
        'inline-flex items-center gap-3 relative z-0 group',
        {
            'justify-start': horizontalAlign === 'left',
            'justify-center': horizontalAlign === 'center',
            'px-5': size === 'default' && form === 'default',
            'h-[2.5rem]': size === 'default',
            'px-3': size === 'sm' && form === 'default',
            'h-[2rem]': size === 'sm',
            'aspect-square': form === 'square',
            'w-full': !!buttonGroupItemContext,
            'text-accent-contrast': variant === 'default' || $selected,
            'text-site-contrast-1': variant === 'neutral' && !$selected,
        },
        $$props.class
    )}
    on:click
>
    {#if !buttonGroupContext}
        <span class="absolute inset-0 -z-20 bg-line rounded pointer-events-none translate-x-2 translate-y-2" />
    {/if}

    <span
        class={clsx(
            'absolute inset-0 -z-10 rounded border border-line pointer-events-none group-hover:-translate-x-1 group-hover:-translate-y-1 group-active:translate-x-2 group-active:translate-y-2 transition-transform',
            {
                'bg-accent-base': variant === 'default' || $selected,
                'bg-site-base': variant === 'neutral' && !$selected,
            }
        )}
    />

    <slot />
</Action>
