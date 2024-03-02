<script
    lang="ts"
    context="module"
>
    import type { TDateValue } from '$components';

    export type TDetailHeaderTitle = string;
    export type TDetailHeaderDate = TDateValue;

    export interface TDetailHeaderProps {
        title: TDetailHeaderTitle;
        date: TDetailHeaderDate;
    }
</script>

<script lang="ts">
    import { Date, Text } from '$components';

    export let title: TDetailHeaderTitle;
    export let date: TDetailHeaderDate;
</script>

<header class="space-y-4">
    <Text
        tag="h1"
        type="title-1"
        variants={['lg']}
    >
        {title}
    </Text>

    <Date
        class="text-site-contrast-2"
        value={date}
    />

    <slot />
</header>
