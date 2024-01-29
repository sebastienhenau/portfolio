<script
    context="module"
    lang="ts"
>
    export type TIconName = string;

    export interface TIconProps {
        name: TIconName;
    }
</script>

<script lang="ts">
    import clsx from 'clsx';
    import { icons } from '$content';

    export let name: TIconName;

    const icon = icons[name];
</script>

<svelte:component
    this={icon}
    class={clsx('text-inherit inline-flex items-center justify-center w-5 aspect-square h-auto', $$props.class)}
    height="100%"
    width="100%"
/>
