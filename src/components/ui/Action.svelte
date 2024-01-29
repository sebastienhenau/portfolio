<script
    context="module"
    lang="ts"
>
    export type TActionPropHref = string;
    export type TActionPropType = 'button' | 'submit';
    export type TActionPropTarget = '_blank' | null;

    export interface TActionProps {
        href?: TActionPropHref;
        type?: TActionPropType;
        target?: TActionPropTarget;
    }
</script>

<script lang="ts">
    import clsx from 'clsx';

    export let href: TActionPropHref = '';
    export let type: TActionPropType = 'button';
    export let target: TActionPropTarget = null;
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
