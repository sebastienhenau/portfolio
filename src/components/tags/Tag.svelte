<script lang="ts">
    import clsx from 'clsx';
    import { Panel, Text } from '$components';
</script>

<Panel class={clsx('inline-block p-3', $$props.class)}>
    <Text
        class="truncate"
        tag="p"
        type="label"
        variants={['flat']}
    >
        <slot />
    </Text>
</Panel>
