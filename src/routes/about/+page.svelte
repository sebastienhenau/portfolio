<script lang="ts">
    import {
        AboutEducationTimelineItem,
        AboutExperienceTimelineItem,
        Timeline,
        Button,
        ButtonText,
        ButtonIcon,
        Divider,
        Section,
        SectionHeader,
        SectionTitle,
        Panel,
        Image,
        Highlight,
    } from '$components';
    import { educations, experiences } from '$content';
    import { ROUTES_PROJECTS } from '$constants';
    import { HeadingsContext } from '$contexts';
</script>

<svelte:head>
    <title>About | Sébastien Henau</title>

    <meta
        content="I am a front-end developer from Belgium working at Little Miss Robot. I build websites and web applications with HTML, CSS and JavaScript."
        name="description"
    />
</svelte:head>

<div class="@container/about-intro-section">
    <Section
        class="@600/about-intro-section:grid @600/about-intro-section:grid-cols-2-auto @600/about-intro-section:gap-6 space-y-6 @600/about-intro-section:space-y-0"
    >
        <div
            class="@600/about-intro-section:col-start-2 @600/about-intro-section:col-end-3 @600/about-intro-section:row-span-full"
        >
            <SectionTitle>Hello there 👋</SectionTitle>

            <p class="mt-3">
                I'm a 30-year-old Belgian developer toggling my way into front-end architectures with my faithful cup of
                coffee next to me. Located in the heart of Belgium, I wear the hat as one of the lead developers at
                Little Miss Robot. Together with a great team, I am fortunate enough to contribute to making the
                internet a better place!
            </p>

            <p class="mt-3">
                When I am not losing myself in lines of code you'll likely catch me navigating running trails,
                attempting to conquer climbing walls (or just gracefully descend from them), playing some games on my
                trusty PlayStation or if I have some time left, read a book.
            </p>
        </div>

        <Highlight
            class="@600/about-intro-section:col-start-1 @600/about-intro-section:col-end-2 @600/about-intro-section:row-span-full"
            horizontalAlignment="center"
            verticalAlignment="center"
        >
            <Panel class="w-[6rem] h-[6rem] aspect-square">
                <Image
                    alt="Sébastien Henau"
                    src="/images/profile.webp"
                    width="96"
                    height="96"
                />
            </Panel>
        </Highlight>
    </Section>
</div>

<Divider />

<HeadingsContext>
    <Section>
        <SectionHeader number="1">
            <SectionTitle>Experience</SectionTitle>
        </SectionHeader>

        <div class="mt-4">
            <p>
                I've been fortunate enough to have had the opportunity to learn and work on some challenging projects at
                Little Miss Robot. Ranging from content websites to data driven web applications to experimental digital
                experiences. Each project has been a valuable opportunity for growth. This was all made possible through
                great teamwork with great people!
            </p>

            <Timeline class="mt-6">
                {#each experiences as experience, index}
                    <AboutExperienceTimelineItem
                        {index}
                        {experience}
                    />
                {/each}
            </Timeline>
        </div>
    </Section>

    <Divider />

    <Section>
        <SectionHeader number="2">
            <SectionTitle>Education</SectionTitle>
        </SectionHeader>

        <div class="mt-4">
            <p>
                During my education I landed 2 bachelor degrees. Both degrees complemented each other where I was able
                to explore UX, visual design, motion design, back-end and front-end development.
            </p>

            <Timeline class="mt-6">
                {#each educations as education}
                    <li>
                        <AboutEducationTimelineItem {education} />
                    </li>
                {/each}
            </Timeline>
        </div>
    </Section>

    <Divider />

    <Section>
        <SectionHeader number="3">
            <SectionTitle>Projects</SectionTitle>
        </SectionHeader>

        <div class="mt-4">
            <p>
                Mijn leergierigheid, gedrevenheid en oog voor detail komt tot uiting in mijn projecten, van
                contentwebsites tot data-driven web-applicaties en experimentele digitale ervaringen. Een deel van de
                projecten staan opgesomd op mijn website.
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
</HeadingsContext>
