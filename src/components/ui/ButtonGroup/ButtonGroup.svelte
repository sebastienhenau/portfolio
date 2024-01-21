<script lang="ts">
    import clsx from 'clsx';
    import { setContext } from 'svelte';
    import type { TButtonGroupContext } from './ButtonGroup.types';

    // -----------------------------------------------------------------------------------------------------------------
    // Context setters
    // -----------------------------------------------------------------------------------------------------------------
    setContext('buttonGroup', true) as TButtonGroupContext;
</script>

<div class={clsx('interactive', $$props.class)}>
    <div class="interactive-background" />

    <!-- TODO: link margin to border default -->
    <div class="inline-flex [&>*:not(:first-child)]:ml-[-2px]">
        <slot />
    </div>
</div>
