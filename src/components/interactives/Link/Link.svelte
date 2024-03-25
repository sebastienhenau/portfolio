<script
    context="module"
    lang="ts"
>
    import type { TActionProps } from '$components';

    export type TInlineLinkAction = TActionProps;
    export type TLinkInline = boolean;
    export type TLinkWrap = boolean;

    export interface TLinkProps {
        action?: TInlineLinkAction;
        inline?: TLinkInline;
    }

    export interface TLinkContext {
        inline: TLinkInline;
    }
</script>

<script lang="ts">
    import clsx from 'clsx';
    import { Action } from '$components';
    import { setContext } from 'svelte';

    export let action: TInlineLinkAction = {};
    export let inline: TLinkInline = false;
    export let wrap: TLinkWrap = true;

    setContext<TLinkContext>('link', {
        inline,
    });
</script>

<Action
    {...action}
    underlined
    class={clsx(
        'underline underline-offset-2 decoration-2 text-inherit hover:text-accent-base motion-safe:transition-colors',
        {
            'inline-block space-x-2': !inline,
            'whitespace-nowrap': !wrap,
        },
        $$props.class
    )}
>
    <slot />
</Action>
