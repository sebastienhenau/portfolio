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
    import clsx from 'clsx';
    import { getContext } from 'svelte';
    import { Icon } from '$components';
    import type { TActionWrapperContext } from '$components';
    import type { TButtonContext } from './Button.svelte';

    export let icon: TButtonIconIcon;

    const actionWrapperContext = getContext<TActionWrapperContext>('actionWrapper');
    const buttonContext = getContext<TButtonContext>('button');
</script>

<Icon
    {...icon}
    class={clsx(
        'transition-transform transition-colors',
        {
            'group-hover:-translate-x-1 group-hover:-translate-y-1': !actionWrapperContext,
            'group-hover/action-wrapper:-translate-x-1 group-hover/action-wrapper:-translate-y-1': actionWrapperContext,
            'group-active:translate-x-2 group-active:translate-y-2':
                (buttonContext.size === 'default' || buttonContext.size === 'sm') && !actionWrapperContext,
            'group-active/action-wrapper:translate-x-2 group-active/action-wrapper:translate-y-2':
                (buttonContext.size === 'default' || buttonContext.size === 'sm') && actionWrapperContext,
            'group-active:translate-x-1 group-active:translate-y-1':
                buttonContext.size === 'xs' && !actionWrapperContext,
            'group-active/action-wrapper:translate-x-1 group-active/action-wrapper:translate-y-1':
                buttonContext.size === 'xs' && actionWrapperContext,
        },
        $$props.class
    )}
/>
