<script
    lang="ts"
    context="module"
>
    import type { TTextProps } from '$components';

    export type TLinkTextText = Omit<TTextProps, 'tag'>;

    export interface TLinkTextProps {
        text?: TLinkTextText;
    }
</script>

<script lang="ts">
    import { Text } from '$components';
    import type { TTextVariants } from '$components';

    export let text: TLinkTextText = {};

    const defaultVariants: TTextVariants = ['flat'];
    const { type = 'action', variants = defaultVariants, ...restText } = text;
</script>

<Text
    {type}
    variants={[...defaultVariants, ...variants]}
    {...restText}
    tag="span"
    class="text-inherit whitespace-nowrap"
>
    <slot />
</Text>
