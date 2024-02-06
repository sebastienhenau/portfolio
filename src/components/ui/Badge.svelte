<script lang="ts">
    import clsx from 'clsx';
    import { Text } from '$components';
</script>

<div
    class={clsx(
        'flex justify-center items-center border border-line rounded bg-site-base w-[1.25rem] h-[1.25rem]',
        $$props.class
    )}
>
    <Text
        tag="p"
        type="label"
        variants={['flat', 'sm']}
    >
        <slot />
    </Text>
</div>
