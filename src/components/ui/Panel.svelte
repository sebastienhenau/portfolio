<script
    context="module"
    lang="ts"
>
    export type TPanelTag = 'div' | 'nav';

    export interface TPanelProps {
        tag?: TPanelTag;
    }
</script>

<script lang="ts">
    import clsx from 'clsx';

    export let tag: TPanelTag = 'div';
</script>

<svelte:element
    this={tag}
    class={clsx('relative z-0', $$props.class)}
>
    <div class="absolute inset-0 -z-20 bg-site-base border rounded pointer-events-none translate-x-2 translate-y-2" />

    <div class="absolute inset-0 -z-10 bg-site-base rounded" />

    <div class="relative z-0">
        <slot />
    </div>

    <div class="absolute inset-0 z-10 border rounded bg-transparent pointer-events-none" />
</svelte:element>
