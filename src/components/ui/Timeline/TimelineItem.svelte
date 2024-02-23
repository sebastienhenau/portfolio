<script
    lang="ts"
    context="module"
>
    import type { TDateProps } from '$components';

    export type TTimelineItemDate = TDateProps;

    export interface TTimelineItemProps {
        date: TTimelineItemDate;
    }
</script>

<script lang="ts">
    import { Dot, Date } from '$components';

    export let date: TTimelineItemDate;
</script>

<li class="col-span-full grid grid-cols-[0.625rem_1fr] gap-x-4 700:gap-x-6 gap-y-3">
    <Dot class="col-start-1 col-end-2 self-center" />

    <Date
        class="col-start-2 col-end-3 text-site-contrast-2"
        {...date}
    />

    <div class="col-start-2 col-end-3">
        <slot />
    </div>
</li>
