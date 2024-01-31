<script
    context="module"
    lang="ts"
>
    import type { TActionProps } from '$components';

    export type TLinkAction = TActionProps;

    export interface TLink {
        action: TLinkAction;
    }
</script>

<script lang="ts">
    import clsx from 'clsx';
    import { Action } from '$components';

    // -----------------------------------------------------------------------------------------------------------------
    // Props
    // -----------------------------------------------------------------------------------------------------------------
    export let action: TLinkAction = {};
</script>

<Action
    {...action}
    class={clsx('inline-flex items-center gap-3 text-accent-base', $$props.class)}
>
    <slot />
</Action>
