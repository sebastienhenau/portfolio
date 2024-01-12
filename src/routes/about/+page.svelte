<script lang="ts">
    import {
        AboutEducationItem,
        AboutExperienceItem,
        AboutIntroCard,
        Button,
        ButtonText,
        Divider,
        Flow,
        FlowTitle,
    } from '$components';
    import { educations, experiences } from '$content';
</script>

<AboutIntroCard />

<Divider />

<!-- TODO: tag & structure -->
<Flow index="1">
    <FlowTitle slot="header">Experience</FlowTitle>

    <p>
        I've been fortunate enough to have had the opportunity to learn and work on some challenging projects at Little
        Miss Robot. Ranging from content websites to data driven web applications to experimental digital experiences.
        Each project has been a valuable opportunity for growth. This was all made possible through great teamwork with
        great people!
    </p>

    <ul class="mt-6 space-y-6">
        {#each experiences as experience}
            <AboutExperienceItem {experience} />
        {/each}
    </ul>
</Flow>

<Divider />

<Flow index="2">
    <FlowTitle slot="header">Projects</FlowTitle>

    <div class="flex flex-col gap-y-4">
        <p>
            Mijn leergierigheid, gedrevenheid en oog voor detail komt tot uiting in mijn projecten, van contentwebsites
            tot data-driven web-applicaties en experimentele digitale ervaringen. Een deel van de projecten staan
            opgesomd op mijn website.
        </p>

        <Button
            action={{
                href: '/projects',
            }}
            class="self-end"
        >
            <ButtonText>Go to projects</ButtonText>
        </Button>
    </div>
</Flow>

<Divider />

<Flow index="3">
    <FlowTitle slot="header">Education</FlowTitle>

    <p>
        During my education I landed 2 bachelor degrees. Both degrees complemented each other where I was able to
        explore UX, visual design, motion design, back-end and front-end development.
    </p>

    <ul class="mt-6 space-y-6">
        {#each educations as education}
            <AboutEducationItem {education} />
        {/each}
    </ul>
</Flow>
