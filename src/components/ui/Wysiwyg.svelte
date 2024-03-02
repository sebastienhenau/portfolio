<script
    lang="ts"
    context="module"
>
    export type TWysiwygTag = 'div';

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
