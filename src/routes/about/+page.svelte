<script lang="ts">
    import {
        AboutEducationItem,
        AboutExperienceItem,
        AboutIntroCard,
        Button,
        ButtonIcon,
        ButtonText,
        Divider,
        Section,
        SectionHeader,
        SectionTitle,
    } from '$components';
    import { educations, experiences } from '$content';
    import { ROUTES_PROJECTS } from '$constants';
</script>

<svelte:head>
    <title>About | Sébastien Henau</title>

    <meta
        content="I'm a front-end developer from Belgium working at Little Miss Robot. I build websites and web applications with HTML, CSS and JavaScript."
        name="description"
    />
</svelte:head>

<AboutIntroCard />

<Divider />

<Section>
    <SectionHeader number="1">
        <SectionTitle slot="start">Experience</SectionTitle>
    </SectionHeader>

    <div class="mt-4">
        <p>
            I've been fortunate enough to have had the opportunity to learn and work on some challenging projects at
            Little Miss Robot. Ranging from content websites to data driven web applications to experimental digital
            experiences. Each project has been a valuable opportunity for growth. This was all made possible through
            great teamwork with great people!
        </p>

        <ul class="mt-6 space-y-6">
            {#each experiences as experience}
                <li>
                    <AboutExperienceItem {experience} />
                </li>
            {/each}
        </ul>
    </div>
</Section>

<Divider />

<Section>
    <SectionHeader number="2">
        <SectionTitle slot="start">Education</SectionTitle>
    </SectionHeader>

    <div class="mt-4">
        <p>
            During my education I landed 2 bachelor degrees. Both degrees complemented each other where I was able to
            explore UX, visual design, motion design, back-end and front-end development.
        </p>

        <ul class="space-y-6 mt-6">
            {#each educations as education}
                <li>
                    <AboutEducationItem {education} />
                </li>
            {/each}
        </ul>
    </div>
</Section>

<Divider />

<Section>
    <SectionHeader number="3">
        <SectionTitle slot="start">Projects</SectionTitle>
    </SectionHeader>

    <div class="mt-4">
        <p>
            Mijn leergierigheid, gedrevenheid en oog voor detail komt tot uiting in mijn projecten, van contentwebsites
            tot data-driven web-applicaties en experimentele digitale ervaringen. Een deel van de projecten staan
            opgesomd op mijn website.
        </p>

        <Button
            action={{
                href: ROUTES_PROJECTS,
            }}
            class="mt-6"
        >
            <ButtonText>Go to projects</ButtonText>

            <ButtonIcon
                class="w-6"
                icon={{ name: 'ChevronRight' }}
            />
        </Button>
    </div>
</Section>
