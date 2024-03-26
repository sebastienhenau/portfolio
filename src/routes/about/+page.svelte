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
        Link,
        Wysiwyg,
        LinkText,
    } from "$components";
    import { educations, experiences } from "$content";
    import { ROUTES_PROJECTS } from "$constants";
    import { HeadingsContext } from "$contexts";
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
        class="space-y-6 @600/about-intro-section:grid @600/about-intro-section:grid-cols-[auto_1fr] @600/about-intro-section:gap-6 @600/about-intro-section:space-y-0"
    >
        <div
            class="@600/about-intro-section:col-start-2 @600/about-intro-section:col-end-3 @600/about-intro-section:row-span-full"
        >
            <SectionTitle>Hello there 👋</SectionTitle>

            <Wysiwyg class="mt-3">
                <p>
                    My name is Sébastien, it's the french version of Sebastian. I know it's quite long, so "Seba" is
                    just fine. I've also had people call me "seblet" or "sebie", they are different, but I'm fine with
                    all of those!
                </p>

                <p>
                    So, who am I? I'm a developer from Belgium mainly focused on front-end development at the moment.
                    I'm working at <Link inline action={{ href: "http://www.spatie.be", target: "_blank" }}>
                        <LinkText>Spatie</LinkText></Link
                    >, gracefully toggling my way in their front-end architectures, with coffee obviously.
                </p>
            </Wysiwyg>
        </div>

        <Highlight
            class="@600/about-intro-section:col-start-1 @600/about-intro-section:col-end-2 @600/about-intro-section:row-span-full"
            horizontalAlignment="center"
            verticalAlignment="center"
        >
            <Panel class="aspect-square h-[6rem] w-[6rem]">
                <Image alt="Sébastien Henau" src="/images/profile.webp" width="96" height="96" />
            </Panel>
        </Highlight>
    </Section>
</div>

<Divider />

<HeadingsContext>
    <Section>
        <SectionHeader number="1">
            <SectionTitle>A little about me</SectionTitle>
        </SectionHeader>

        <Wysiwyg class="mt-4">
            <p>
                I like my spot at <Link inline action={{ href: "http://www.spatie.be", target: "_blank" }}
                    ><LinkText>Spatie</LinkText></Link
                >, but I have other ways of keeping myself busy during my own free time:
            </p>

            <ul>
                <li>I like running, if I am not twisting my poor ankle again.</li>

                <li>Conquering some climbing walls, or just ... gracefully descend from them.</li>

                <li>Lazily playing some games in the sofa, when my energy levels are depleted.</li>

                <li>Losing track of time when reading a thriller or a fantasy book.</li>
            </ul>
        </Wysiwyg>
    </Section>

    <Divider />

    <Section>
        <SectionHeader number="2">
            <SectionTitle>Experience</SectionTitle>
        </SectionHeader>

        <div class="mt-4">
            <p>
                I graduated in 2017 and have been working ever since as a developer with a focus on front-end
                development.
            </p>

            <Timeline class="mt-6">
                {#each experiences as experience}
                    <AboutExperienceTimelineItem {experience} />
                {/each}
            </Timeline>
        </div>
    </Section>

    <Divider />

    <Section>
        <SectionHeader number="3">
            <SectionTitle>Education</SectionTitle>
        </SectionHeader>

        <div class="mt-4">
            <p>
                During my education I landed 2 bachelor degrees. Both degrees complemented each other where I was able
                to explore UX, visual design, motion design, back-end and front-end development.
            </p>

            <Timeline class="mt-6">
                {#each educations as education}
                    <AboutEducationTimelineItem {education} />
                {/each}
            </Timeline>
        </div>
    </Section>

    <Divider />

    <Section>
        <SectionHeader number="4">
            <SectionTitle>Projects</SectionTitle>
        </SectionHeader>

        <div class="mt-4">
            <p>
                I've been fortunate enough to have had the opportunity to learn and work on some challenging projects.
                Ranging from content websites to data driven web applications to experimental digital experiences. Check
                out some of the projects I've worked on over the past years!
            </p>

            <Button
                action={{
                    href: ROUTES_PROJECTS,
                }}
                class="mt-6"
            >
                <ButtonText>Go to projects</ButtonText>

                <ButtonIcon class="w-6" icon={{ name: "ChevronRight" }} />
            </Button>
        </div>
    </Section>
</HeadingsContext>
