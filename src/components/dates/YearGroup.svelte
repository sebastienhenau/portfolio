<!-- TODO: cleanup? -->
<script lang="ts" context="module">
    export type TYearGroupValue = string;

    export interface TYearGroupProps {
        value: TYearGroupValue;
    }
</script>

<script lang="ts">
    import { Date } from "$components";

    export let value: TYearGroupValue;

    const years = value.split("-");
    const hasMultipleYears = years.length > 1;
</script>

{#if hasMultipleYears}
    <span class={$$props.class}>
        {#each years as year, index}
            <Date format="YYYY" value={year} />

            {#if index < years.length - 1}
                {"- "}
            {/if}
        {/each}
    </span>
{:else}
    <Date class={$$props.class} format="YYYY" {value} />
{/if}
