<script lang="ts">
    import clsx from 'clsx';
    import { getContext, setContext } from 'svelte';
    import type { TButtonGroupContext } from '$components';
    import { Action } from '$components';
    import type { TButtonAction, TButtonContext, TButtonForm, TButtonSize, TButtonVariant } from './Button.types';

    // -----------------------------------------------------------------------------------------------------------------
    // Context getters
    // -----------------------------------------------------------------------------------------------------------------
    const buttonGroup: TButtonGroupContext = getContext('buttonGroup');

    // -----------------------------------------------------------------------------------------------------------------
    // Props
    // -----------------------------------------------------------------------------------------------------------------
    export let action: TButtonAction = {};
    export let variant: TButtonVariant = 'default';
    export let size: TButtonSize = 'default';
    export let form: TButtonForm = 'default';

    // -----------------------------------------------------------------------------------------------------------------
    // Reactive statements
    // -----------------------------------------------------------------------------------------------------------------
    /* TODO: cleanup */
    $: reactiveVariant = variant;

    // -----------------------------------------------------------------------------------------------------------------
    // Context setters
    // -----------------------------------------------------------------------------------------------------------------
    setContext('button', {
        variant: reactiveVariant,
    } as TButtonContext);
</script>

<Action
    {...action}
    class={clsx(
        'inline-flex justify-center items-center gap-3',
        {
            interactive: !buttonGroup,
            'interactive-root': buttonGroup,
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
    {#if !buttonGroup}
        <div class="interactive-background" />
    {/if}

    <div
        class={clsx('interactive-foreground', {
            'bg-accent-base': variant === 'default',
            'bg-site-base': variant === 'neutral',
        })}
    />

    <slot />
</Action>
