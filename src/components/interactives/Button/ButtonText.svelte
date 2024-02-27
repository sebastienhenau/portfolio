<script lang="ts">
    import clsx from 'clsx';
    import { getContext } from 'svelte';
    import { Text } from '$components';
    import type { TActionWrapperContext } from '$components';
    import type { TButtonContext } from './Button.svelte';

    const actionWrapperContext = getContext<TActionWrapperContext>('actionWrapper');
    const buttonContext = getContext<TButtonContext>('button');
</script>

<Text
    class={clsx(
        'text-inherit transition-transform transition-colors',
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
    tag="span"
    type="action"
    variants={['flat', buttonContext.size === 'xs' ? 'sm' : 'none']}
>
    <slot />
</Text>
