<script
    context="module"
    lang="ts"
>
    import type { TIconProps } from '$components';

    export type TLinkIconIcon = TIconProps;

    export interface TLinkIcon {
        icon: TLinkIconIcon;
    }
</script>

<script lang="ts">
    import clsx from 'clsx';
    import { Icon } from '$components';

    export let icon: TLinkIconIcon;
</script>

<Icon
    {...icon}
    class={clsx('text-inherit', $$props.class)}
/>
