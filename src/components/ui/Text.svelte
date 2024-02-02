<!-- TODO: font groups in this file? -->
<script
    context="module"
    lang="ts"
>
    export type TTextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
    export type TTextType = 'title' | 'text' | 'label' | 'action' | 'number';
    export type TTextVariant = 'none' | 'flat' | 'fat' | 'lg';

    export interface TTextProps {
        tag?: TTextTag;
        type?: TTextType;
        variant?: TTextVariant;
    }
</script>

<script lang="ts">
    import clsx from 'clsx';

    export let tag: TTextTag = 'p';
    export let type: TTextType = 'text';
    export let variant: TTextVariant = 'none';
</script>

<svelte:element
    this={tag}
    class={clsx(
        'font-sans',
        {
            'fg-title': type === 'title',
            'fgv-title-lg': type === 'title' && variant === 'lg',
            'fg-text': type === 'text',
            'fg-action': type === 'action',
            'fg-number': type === 'number',
            'fg-label': type === 'label',
            'fgv-flat': variant === 'flat',
            'fgv-fat': variant === 'fat',
        },
        $$props.class
    )}
>
    <slot />
</svelte:element>
