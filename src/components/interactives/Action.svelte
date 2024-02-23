<script
    context="module"
    lang="ts"
>
    export type TActionHref = string;
    export type TActionType = 'button' | 'submit';
    export type TActionTarget = '_blank' | null;

    export interface TActionProps {
        href?: TActionHref;
        type?: TActionType;
        target?: TActionTarget;
    }

    export type TActionElement = HTMLAnchorElement | HTMLButtonElement;
</script>

<script lang="ts">
    import clsx from 'clsx';
    import { getContext, onMount } from 'svelte';
    import type { TActionWrapperContext } from '$components';

    const actionWrapperContext = getContext<TActionWrapperContext>('actionWrapper');

    let element: TActionElement;

    export let href: TActionHref = actionWrapperContext?.action?.href || '';
    export let target: TActionTarget = actionWrapperContext?.action?.target || null;
    export let type: TActionType = 'button';

    onMount(() => {
        if (actionWrapperContext) {
            actionWrapperContext.setActionElement(element);
        }
    });
</script>

{#if !!href}
    <a
        bind:this={element}
        class={clsx(
            'focus:z-50',
            {
                'before:content-empty before:absolute before:inset-0': actionWrapperContext,
            },
            $$props.class
        )}
        {href}
        {target}
        rel={target ? clsx({ 'noopener noreferer': target === '_blank' }) : null}
    >
        <slot />
    </a>
{:else if actionWrapperContext}
    <div class={$$props.class}>
        <slot />
    </div>
{:else}
    <button
        class={clsx('focus:z-50', $$props.class)}
        {type}
        on:click
    >
        <slot />
    </button>
{/if}
