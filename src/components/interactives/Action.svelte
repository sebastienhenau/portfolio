<script context="module" lang="ts">
    export type TActionHref = string;
    export type TActionType = "button" | "submit";
    export type TActionTarget = "_blank" | null;
    export type TActionAriaLabel = string | null;
    export type TActionTabIndex = number | null;

    export interface TActionProps {
        href?: TActionHref;
        type?: TActionType;
        target?: TActionTarget;
        ariaLabel?: TActionAriaLabel;
        tabIndex?: TActionTabIndex;
    }

    export type TActionElement = HTMLAnchorElement | HTMLButtonElement;
</script>

<script lang="ts">
    import clsx from "clsx";
    import { getContext, onMount } from "svelte";
    import type { TActionWrapperContext } from "$components";

    const actionWrapperContext = getContext<TActionWrapperContext>("actionWrapper");

    let element: TActionElement;

    export let href: TActionHref = actionWrapperContext?.action?.href || "";
    export let target: TActionTarget = actionWrapperContext?.action?.target || null;
    export let type: TActionType = "button";
    export let ariaLabel: TActionAriaLabel = null;
    export let tabIndex: TActionTabIndex = null;

    onMount(() => {
        if (actionWrapperContext) {
            actionWrapperContext.setActionElement(element);
        }
    });
</script>

{#if !!href}
    <a
        aria-label={ariaLabel}
        data-component="action"
        bind:this={element}
        class={clsx(
            {
                "before:absolute before:inset-0 before:content-empty": actionWrapperContext,
            },
            $$props.class
        )}
        {href}
        {target}
        tabindex={tabIndex}
        rel={target ? clsx({ "noopener noreferer": target === "_blank" }) : null}
    >
        <slot />
    </a>
{:else if actionWrapperContext}
    <div data-component="action" class={$$props.class}>
        <slot />
    </div>
{:else}
    <button data-component="action" aria-label={ariaLabel} class={$$props.class} {type} on:click>
        <slot />
    </button>
{/if}
