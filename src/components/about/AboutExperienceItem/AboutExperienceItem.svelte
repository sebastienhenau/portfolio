<script lang="ts">
    import { ListItem, Tag } from '$components';
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

<li class="@container/about-experience-item">
    <article>
        <ListItem>
            <header
                class="flex flex-col @550/about-experience-item:flex-row flex-wrap justify-between items-start gap-y-4 gap-x-6"
                slot="main"
            >
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

            <p
                class="mt-4"
                slot="sub"
            >
                {description}
            </p>
        </ListItem>
    </article>
</li>
