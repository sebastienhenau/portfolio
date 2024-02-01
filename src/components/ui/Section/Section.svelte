<script
    context="module"
    lang="ts"
>
    export type TSectionParts = boolean;

    export interface TSectionProps {
        parts?: TSectionParts;
    }

    export interface TSectionContext {
        parts: TSectionParts;
    }
</script>

<script lang="ts">
    import { setContext } from 'svelte';
    import SectionPart from './SectionPart.svelte';

    export let parts: TSectionParts = false;

    setContext<TSectionContext>('section', {
        parts,
    });
</script>

<SectionPart
    class={$$props.class}
    root
    tag="section"
>
    <slot />
</SectionPart>
