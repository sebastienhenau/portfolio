<script lang="ts">
    import clsx from 'clsx';
    import { Action } from '$components';
    import type { TLinkAction } from './Link.types';

    // -----------------------------------------------------------------------------------------------------------------
    // Props
    // -----------------------------------------------------------------------------------------------------------------
    export let action: TLinkAction;
</script>

<Action
    {...action}
    class={clsx('inline-flex items-center gap-3 text-accent', $$props.class)}
>
    <slot />
</Action>
