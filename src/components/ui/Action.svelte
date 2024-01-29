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
</script>

<script lang="ts">
    import clsx from 'clsx';

    export let href: TActionHref = '';
    export let type: TActionType = 'button';
    export let target: TActionTarget = null;
</script>

{#if !!href}
    <a
        class={$$props.class}
        {href}
        {target}
        rel={target ? clsx({ 'noopener noreferer': target === '_blank' }) : null}
    >
        <slot />
    </a>
{:else}
    <button
        class={$$props.class}
        {type}
        on:click
    >
        <slot />
    </button>
{/if}
