<script
    lang="ts"
    context="module"
>
    import type { TDateProps, TYearGroupProps } from '$components';

    export type TTimelineItemDate = TDateProps | null;
    export type TTimelineItemYearGroup = TYearGroupProps | null;

    export interface TTimelineItemProps {
        date?: TTimelineItemDate;
        yearGroup?: TTimelineItemYearGroup;
    }
</script>

<script lang="ts">
    import { Dot, Date, YearGroup } from '$components';

    export let date: TTimelineItemDate = null;
    export let yearGroup: TTimelineItemYearGroup = null;
</script>

<li class="col-span-full grid grid-cols-[0.625rem_1fr] gap-x-4 700:gap-x-6 gap-y-3">
    <Dot class="col-start-1 col-end-2 self-center" />

    {#if date}
        <Date
            class="col-start-2 col-end-3 text-site-contrast-2"
            format="YYYY"
            {...date}
        />
    {:else if yearGroup}
        <YearGroup
            class="col-start-2 col-end-3 text-site-contrast-2"
            {...yearGroup}
        />
    {/if}

    <div class="col-start-2 col-end-3">
        <slot />
    </div>
</li>
