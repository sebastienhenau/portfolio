<script lang="ts">
    import { Panel, Text } from '$components';
</script>

<Panel class="inline-block p-3">
    <Text
        class="truncate"
        tag="p"
        type="label"
        variant="flat"
    >
        <slot />
    </Text>
</Panel>
