<script lang="ts">
    import { setContext } from 'svelte';
    import type { TButtonGroupContext } from './ButtonGroup.types';

    // -----------------------------------------------------------------------------------------------------------------
    // Context setters
    // -----------------------------------------------------------------------------------------------------------------
    setContext('buttonGroup', true) as TButtonGroupContext;
</script>

<div class="interactive">
    <div class="interactive-background" />

    <!-- TODO: link margin to border default -->
    <div class="inline-flex [&>*:not(:first-child)]:ml-[-2px]">
        <slot />
    </div>
</div>
