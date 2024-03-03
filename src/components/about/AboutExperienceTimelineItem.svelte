<script
    context="module"
    lang="ts"
>
    import type { TExperience } from '$types';

    export type TAboutExperienceItemIndex = number;
    export type TAboutExperienceItemExperience = TExperience;

    export interface TAboutExperienceItemProps {
        index: TAboutExperienceItemIndex;
        experience: TExperience;
    }
</script>

<script lang="ts">
    import { Text, CollapseContent, TimelineItem, CollapseHeader, Collapse } from '$components';
    import { HeadingsContext } from '$contexts';

    export let index: TAboutExperienceItemIndex;
    export let experience: TAboutExperienceItemExperience;

    const { role, company, description, time } = experience;
</script>

<HeadingsContext>
    <TimelineItem date={{ value: time }}>
        <Collapse open={index === 0}>
            <CollapseHeader>
                <Text
                    type="title-3"
                    useHeadingsContext
                >
                    {role} at {company}
                </Text>
            </CollapseHeader>

            <CollapseContent>
                <Text>
                    {description}
                </Text>
            </CollapseContent>
        </Collapse>
    </TimelineItem>
</HeadingsContext>
