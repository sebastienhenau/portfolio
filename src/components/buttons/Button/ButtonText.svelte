<script lang="ts">
    import clsx from 'clsx';
    import { Text } from '$components';
</script>

<Text
    class={clsx(
        'text-inherit group-hover:-translate-x-1 group-hover:-translate-y-1 group-active:translate-x-2 group-active:translate-y-2 transition-transform',
        $$props.class
    )}
    tag="span"
    type="action"
    variants={['flat']}
>
    <slot />
</Text>
