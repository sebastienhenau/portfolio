<script
    context="module"
    lang="ts"
>
    import type { TActionProps } from '$components';

    export type TLinkAction = TActionProps;
    export type TLinkVariant = 'default' | 'neutral';

    export interface TLink {
        action: TLinkAction;
        variant: TLinkVariant;
    }
</script>

<script lang="ts">
    import clsx from 'clsx';
    import { Action } from '$components';

    // -----------------------------------------------------------------------------------------------------------------
    // Props
    // -----------------------------------------------------------------------------------------------------------------
    export let action: TLinkAction = {};
    export let variant: TLinkVariant = 'default';
</script>

<Action
    {...action}
    class={clsx(
        'inline-flex items-center gap-3 underline underline-offset-2 decoration-2',
        {
            'text-accent-base': variant === 'default',
            'text-site-contrast-1 hover:text-accent-base motion-safe:transition-colors': variant === 'neutral',
        },
        $$props.class
    )}
>
    <slot />
</Action>
