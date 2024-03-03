<script
    lang="ts"
    context="module"
>
    import type { TTagsBlock } from '$types';

    export type TWysiwygTag = TTagsBlock;

    export interface TWysiwygProps {
        tag?: TWysiwygTag;
    }
</script>

<script lang="ts">
    import clsx from 'clsx';

    export let tag: TWysiwygTag = 'div';
</script>

<svelte:element
    this={tag}
    class={clsx('wysiwyg', $$props.class)}
>
    <slot />
</svelte:element>
