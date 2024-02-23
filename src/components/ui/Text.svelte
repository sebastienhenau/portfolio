<!-- TODO: font groups in this file? -->
<script
    context="module"
    lang="ts"
>
    export type TTextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
    export type TTextType = 'title-1' | 'title-2' | 'title-3' | 'text' | 'label' | 'action';
    export type TTextVariant = 'none' | 'flat' | 'fat' | 'lg' | 'sm';
    export type TTextVariants = TTextVariant[];

    export interface TTextProps {
        tag?: TTextTag;
        type?: TTextType;
        variants?: TTextVariants;
    }
</script>

<script lang="ts">
    import clsx from 'clsx';

    export let tag: TTextTag = 'p';
    export let type: TTextType = 'text';
    export let variants: TTextVariants = ['none'];
</script>

<svelte:element
    this={tag}
    class={clsx(
        'font-sans',
        {
            'fs-title-1': type === 'title-1',
            'fs-title-2': type === 'title-2',
            'fs-title-3': type === 'title-3',
            'fs-text': type === 'text',
            'fs-action': type === 'action',
            'fs-label': type === 'label',
            'fsv-sm': (type === 'label' || type === 'action') && variants.includes('sm'),
            'fsv-fat': type === 'text' && variants.includes('fat'),
            'fsv-flat': variants.includes('flat'),
        },
        $$props.class
    )}
>
    <slot />
</svelte:element>
