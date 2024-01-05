<script lang="ts">
    import { Tag } from '$components';
    import type { TAboutExperienceItemExperience } from './AboutExperienceItem.types';

    // -----------------------------------------------------------------------------------------------------------------
    // Props
    // -----------------------------------------------------------------------------------------------------------------
    export let experience: TAboutExperienceItemExperience;

    // -----------------------------------------------------------------------------------------------------------------
    // Variables
    // -----------------------------------------------------------------------------------------------------------------
    const { role, company, description, time } = experience;
</script>

<article>
    <header class="flex justify-between items-start gap-x-6">
        <div class="flex-1">
            <h3 class="font-bold">
                {company}
            </h3>

            <!-- TODO: datetime -->
            <time
                class="text-site-contrast-2 text-3 leading-none block"
                datetime=""
            >
                {time}
            </time>
        </div>

        <Tag>{role}</Tag>
    </header>

    <p class="mt-4">
        {description}
    </p>
</article>
