<script
    lang="ts"
    context="module"
>
    export type TSkipLinkHref = string;

    export interface TSkipLinkProps {
        href: TSkipLinkHref;
    }
</script>

<script lang="ts">
    import clsx from 'clsx';
    import { Button, ButtonText } from '$components';

    export let href: TSkipLinkHref;
</script>

<!--'!absolute !-left-[999px] !top-auto !w-[1px] !h-[1px] !overflow-hidden !-z-[999] focus:!left-0 focus:!top-0 focus:!w-auto focus:!h-auto focus:!overflow-auto focus:!z-[999]',-->

<Button
    class={clsx(
        '!absolute !-left-[999px] !top-auto [:not(:focus)]!w-[1px] [:not(:focus)]!h-[1px] [:not(:focus)]!overflow-hidden !-z-[999] focus:!z-[999] focus:!top-4 focus:!left-4',
        $$props.class
    )}
    action={{ href: `#${href}` }}
    variant="neutral"
    size="sm"
    shade={false}
    inverse
>
    <ButtonText>
        <slot />
    </ButtonText>
</Button>
