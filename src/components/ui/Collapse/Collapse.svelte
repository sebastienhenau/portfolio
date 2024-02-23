<script
    lang="ts"
    context="module"
>
    import type { Writable } from 'svelte/store';

    export type TCollapseOpen = boolean;

    export interface TCollapseProps {
        open?: TCollapseOpen;
    }

    export interface TCollapseContext {
        open: Writable<TCollapseOpen>;
    }
</script>

<script lang="ts">
    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';
    import { Panel } from '$components';

    export let open: TCollapseOpen = false;

    const reactiveOpen = writable(open);

    setContext('collapse', {
        open: reactiveOpen,
    });
</script>

<Panel>
    <details bind:open={$reactiveOpen}>
        <slot />
    </details>
</Panel>
