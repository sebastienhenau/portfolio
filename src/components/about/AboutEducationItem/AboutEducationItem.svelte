<script lang="ts">
    import { ListItem, Tag } from '$components';
    import type { TAboutEducationItemEducation } from './AboutEducationItem.types';

    // -----------------------------------------------------------------------------------------------------------------
    // Props
    // -----------------------------------------------------------------------------------------------------------------
    export let education: TAboutEducationItemEducation;

    // -----------------------------------------------------------------------------------------------------------------
    // Variables
    // -----------------------------------------------------------------------------------------------------------------
    const { name, school, type, time } = education;
</script>

<li class="@container/about-education-item">
    <article>
        <ListItem>
            <header
                class="flex flex-col @550/about-education-item:flex-row justify-between gap-y-2 gap-x-6 items-start"
                slot="main"
            >
                <h3 class="font-bold">{name}</h3>

                <Tag>{type}</Tag>
            </header>

            <div
                class="space-y-2 mt-3 @550/about-education-item:mt-0"
                slot="sub"
            >
                <p>
                    {school}
                </p>

                <!-- TODO: datetime -->
                <time
                    class="text-site-contrast-2 text-3 leading-none block"
                    datetime=""
                >
                    {time}
                </time>
            </div>
        </ListItem>
    </article>
</li>
