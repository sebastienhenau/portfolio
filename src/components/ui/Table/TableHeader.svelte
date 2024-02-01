<script lang="ts">
    import { Panel } from '$components';
</script>

<thead class={$$props.class}>
    <Panel tag="tr">
        <slot />
    </Panel>
</thead>
