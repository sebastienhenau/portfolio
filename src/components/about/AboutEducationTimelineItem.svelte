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
    import { Tag, Text, TimelineItem } from '$components';

    export let education: TAboutEducationItemEducation;

    const { name, school, type, time } = education;
</script>

<TimelineItem date={{ value: time }}>
    <article class="@container/about-education-item">
        <div
            class="@550/about-education-item:flex @550/about-education-item:justify-between @550/about-education-item:gap-6 @550/about-education-item:items-center"
        >
            <div class="@550/about-education-item:flex-1">
                <Text
                    tag="h3"
                    type="title-3"
                >
                    {name}
                </Text>

                <Text class="mt-1">
                    {school}
                </Text>
            </div>

            <Tag class="mt-3 @550/about-education-item:mt-0">{type}</Tag>
        </div>
    </article>
</TimelineItem>
