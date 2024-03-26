<script lang="ts" context="module">
    import type { TActionProps, TActionElement } from "$components";
    import type { TTagsBlock } from "$types";

    export type TActionWrapperAction = TActionProps;
    export type TActionWrapperTag = TTagsBlock;

    export interface TActionWrapperProps {
        action?: TActionWrapperAction;
        tag?: TActionWrapperTag;
    }

    export interface TActionWrapperContext {
        action: TActionWrapperAction;
        setActionElement: (element: TActionElement) => void;
    }

    export type TActionWrapperMouseDownTimeStamp = number;
    export type TActionWrapperMouseUpTimeStamp = number;
</script>

<script lang="ts">
    import clsx from "clsx";
    import { setContext } from "svelte";

    export let action: TActionWrapperAction = {};
    export let tag: TActionWrapperTag = "div";

    let actionElement: TActionElement;
    let mouseDownTimeStamp: TActionWrapperMouseDownTimeStamp;
    let mouseUpTimeStamp: TActionWrapperMouseUpTimeStamp;

    const setActionElement = (element: TActionElement) => {
        actionElement = element;
    };

    const onMouseDown = () => {
        mouseDownTimeStamp = +new Date();
    };

    const onMouseUp = () => {
        mouseUpTimeStamp = +new Date();

        if (mouseUpTimeStamp - mouseDownTimeStamp < 200) {
            actionElement.click();
        }
    };

    setContext<TActionWrapperContext>("actionWrapper", {
        action,
        setActionElement,
    });
</script>

{#if !!action.href}
    <svelte:element
        this={tag}
        class={clsx("group/action-wrapper relative cursor-pointer", $$props.class)}
        on:mousedown={onMouseDown}
        on:mouseup={onMouseUp}
        role="button"
        tabindex="0"
    >
        <slot />
    </svelte:element>
{:else}
    <svelte:element
        this={tag}
        class={clsx("group/action-wrapper cursor-pointer", $$props.class)}
        role={tag !== "summary" ? "button" : null}
        tabindex={tag !== "summary" ? 0 : null}
        on:click
    >
        <slot />
    </svelte:element>
{/if}
