<script lang="ts">
    import { ListTags } from '$components';
    import type { TStoryHeaderDate, TStoryHeaderListTags, TStoryHeaderTitle } from './StoryHeader.types';

    // -------------------------------------------------------------------------
    // Props
    // -------------------------------------------------------------------------
    export let title: TStoryHeaderTitle;
    export let date: TStoryHeaderDate;
    export let listTags: TStoryHeaderListTags;
</script>

<header>
    <h1 class="font-bold text-7">
        {title}
    </h1>

    <time
        class="text-3 text-site-contrast-2 mt-3 leading-none block"
        datetime=""
    >
        {date}
    </time>

    <ListTags
        {...listTags}
        class="mt-5"
    />
</header>
