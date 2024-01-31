<script
    context="module"
    lang="ts"
>
    import type { TEducation } from '$types';

    export type TAboutEducationItemEducation = TEducation;

    export interface TAboutEducationItem {
        education: TEducation;
    }
</script>

<script lang="ts">
    import { Tag, Text, Date } from '$components';

    export let education: TAboutEducationItemEducation;

    const { name, school, type, time } = education;
</script>

<article class="@container/about-education-item">
    <header>
        <Date
            class="text-site-contrast-2"
            value={time}
        />

        <div
            class="flex-1 flex flex-col @550/about-education-item:flex-row flex-wrap @550/about-education-item:justify-between items-start @550/about-education-item:items-center gap-y-2 gap-x-6"
        >
            <Text
                tag="h3"
                type="text"
                variant="fat"
            >
                {name}
            </Text>

            <Tag>{type}</Tag>
        </div>
    </header>

    <p class="mt-3 @550/about-education-item:mt-0">
        {school}
    </p>
</article>
