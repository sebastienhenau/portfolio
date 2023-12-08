<script lang="ts">
    import clsx from 'clsx';
    import { Icon } from '$components';
    import type { TButtonIconIcon } from './ButtonIcon.types';

    // -------------------------------------------------------------------------
    // Props
    // -------------------------------------------------------------------------
    export let icon: TButtonIconIcon;
</script>

<Icon
    {...icon}
    class={clsx('text-inherit relative z-10 text-accent-contrast', $$props.class)}
/>
