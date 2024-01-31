<script
    context="module"
    lang="ts"
>
    import type { TExperience } from '$types';

    export type TAboutExperienceItemExperience = TExperience;

    export interface TAboutExperienceItemProps {
        experience: TExperience;
    }
</script>

<script lang="ts">
    import { Tag, Text, Date } from '$components';

    export let experience: TAboutExperienceItemExperience;

    const { role, company, description, time } = experience;
</script>

<article class="@container/about-experience-item">
    <header>
        <Date
            class="text-site-contrast-2"
            value={time}
        />

        <div
            class="flex-1 flex flex-col @550/about-experience-item:flex-row flex-wrap @550/about-experience-item:justify-between items-start @550/about-experience-item:items-center gap-y-2 gap-x-6"
        >
            <Text
                tag="h3"
                type="text"
                variant="fat"
            >
                {company}
            </Text>

            <Tag>{role}</Tag>
        </div>
    </header>

    <p class="mt-3">
        {description}
    </p>
</article>
