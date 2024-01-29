<script
    context="module"
    lang="ts"
>
    import type { TIconProps } from '$components';

    export type TButtonIconIcon = TIconProps;

    export interface TButtonIcon {
        icon: TButtonIconIcon;
    }
</script>

<script lang="ts">
    import { Icon } from '$components';

    export let icon: TButtonIconIcon;
</script>

<Icon
    {...icon}
    class="group-hover:-translate-x-1 group-hover:-translate-y-1 group-active:translate-x-2 group-active:translate-y-2 transition-transform"
/>
