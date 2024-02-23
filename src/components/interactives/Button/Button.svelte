<script
    context="module"
    lang="ts"
>
    import type { TActionProps } from '$components';
    import type { TBreakpointsOptions } from '$types';

    export type TButtonAction = TActionProps;
    export type TButtonVariant = 'default' | 'neutral';
    export type TButtonInverse = boolean;
    export type TButtonShade = boolean;
    export type TButtonSize = 'default' | 'sm' | 'xs';
    export type TButtonForm = 'default' | 'square';
    export type TButtonHorizontalAlign = 'left' | 'center';
    export type TButtonHorizontalAlignBreakpoints = TBreakpointsOptions<TButtonHorizontalAlign>;

    export interface TButtonProps {
        action: TButtonAction;
        variant?: TButtonVariant;
        inverse?: TButtonInverse;
        size?: TButtonSize;
        form?: TButtonForm;
        shade?: TButtonShade;
        horizontalAlign?: TButtonHorizontalAlign;
        horizontalAlignBreakpoints?: TButtonHorizontalAlignBreakpoints;
    }

    export interface TButtonContext {
        size: TButtonSize;
    }
</script>

<script lang="ts">
    import clsx from 'clsx';
    import { getContext, setContext } from 'svelte';
    import { Action } from '$components';
    import { getComponentResponsiveClass } from '$utilities';
    import type { TButtonGroupContext, TButtonGroupItemContext, TActionWrapperContext } from '$components';

    export let action: TButtonAction = {};
    export let variant: TButtonVariant = 'default';
    export let inverse: TButtonInverse = false;
    export let size: TButtonSize = 'default';
    export let form: TButtonForm = 'default';
    export let shade: TButtonShade = true;
    export let horizontalAlign: TButtonHorizontalAlign = 'center';
    export let horizontalAlignBreakpoints: TButtonHorizontalAlignBreakpoints = {};

    const actionWrapperContext = getContext<TActionWrapperContext>('actionWrapper') || false;

    const buttonGroupContext = getContext<TButtonGroupContext>('buttonGroup') || false;
    const buttonGroupItemContext = getContext<TButtonGroupItemContext>('buttonGroupItem') || null;
    const { selected } = buttonGroupItemContext || {};

    const horizontalAlignClass = getComponentResponsiveClass<TButtonHorizontalAlign, TButtonHorizontalAlignBreakpoints>(
        horizontalAlign,
        horizontalAlignBreakpoints,
        {
            left: {
                breakpoints: {
                    '500': '500:justify-start',
                },
            },
            center: {
                defaultValue: 'justify-center',
                breakpoints: {
                    'max-500': 'max-500:justify-center',
                },
            },
        }
    );

    setContext<TButtonContext>('button', {
        size,
    });
</script>

<Action
    {...action}
    class={clsx(
        'inline-flex items-center relative z-0 group',
        horizontalAlignClass,
        {
            'px-5': size === 'default' && form === 'default',
            'h-[2.5rem]': size === 'default',
            'px-3': size === 'sm' && form === 'default',
            'h-[2rem]': size === 'sm',
            'px-2': size === 'xs' && form === 'default',
            'h-[1.5rem]': size === 'xs',
            'gap-3': size === 'default' || size === 'sm',
            'gap-2': size === 'xs',
            'aspect-square': form === 'square',
            'w-full': !!buttonGroupItemContext,
            'text-accent-contrast': (variant === 'default' && !inverse) || $selected,
            'text-site-contrast-1': variant === 'neutral' && !inverse && !$selected,
            'text-accent-base': (variant === 'default' && inverse) || $selected,
            'text-site-base': variant === 'neutral' && inverse && !$selected,
        },
        $$props.class
    )}
    on:click
>
    {#if !buttonGroupContext && shade}
        <span
            class={clsx('absolute inset-0 -z-20 rounded pointer-events-none', {
                'bg-line': !inverse,
                'bg-accent-base border border-line': variant === 'default' && inverse,
                'bg-site-base border border-line': variant === 'neutral' && inverse,
                'translate-x-2 translate-y-2': size === 'default' || size === 'sm',
                'translate-x-1 translate-y-1': size === 'xs',
            })}
        />
    {/if}

    <span
        class={clsx('absolute inset-0 -z-10 rounded border border-line pointer-events-none transition-transform', {
            'bg-accent-base': (variant === 'default' && !inverse) || $selected,
            'bg-site-base': variant === 'neutral' && !inverse && !$selected,
            'bg-accent-contrast': variant === 'default' && inverse && $selected,
            'bg-site-contrast-1': variant === 'neutral' && inverse && !selected,
            'group-hover:-translate-x-1 group-hover:-translate-y-1': !actionWrapperContext,
            'group-hover/action-wrapper:-translate-x-1 group-hover/action-wrapper:-translate-y-1': actionWrapperContext,
            'group-active:translate-x-2 group-active:translate-y-2':
                (size === 'default' || size === 'sm') && !actionWrapperContext,
            'group-active/action-wrapper:translate-x-2 group-active/action-wrapper:translate-y-2':
                (size === 'default' || size === 'sm') && actionWrapperContext,
            'group-active:translate-x-1 group-active:translate-y-1': size === 'xs' && !actionWrapperContext,
            'group-active/action-wrapper:translate-x-1 group-active/action-wrapper:translate-y-1':
                size === 'xs' && actionWrapperContext,
        })}
    />

    <slot />
</Action>
