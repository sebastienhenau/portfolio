<script
    context="module"
    lang="ts"
>
    export type TSectionHeaderContext = boolean;
</script>

<script lang="ts">
    import clsx from 'clsx';
    import { setContext } from 'svelte';

    setContext<TSectionHeaderContext>('section-header', true);
</script>

<header class={clsx('flex justify-between items-center', $$props.class)}>
    <slot name="left" />

    <slot name="right" />
</header>
