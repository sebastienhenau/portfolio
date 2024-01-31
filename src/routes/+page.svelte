<script lang="ts">
    import {
        Button,
        ButtonIcon,
        ButtonText,
        Cta,
        Divider,
        HomeAboutCard,
        Section,
        SectionContent,
        SectionFooter,
        SectionTitle,
        Text,
    } from '$components';
    import { ROUTES_BLOG, ROUTES_PROJECTS } from '$constants';

    // export let data: TPageData;
</script>

<HomeAboutCard />

<Divider />

<Section number="1">
    <SectionTitle>Blog</SectionTitle>

    <SectionContent class="mt-7">
        <Text>Coming soon...</Text>
    </SectionContent>

    <SectionFooter class="mt-7">
        <Cta>
            <Button action={{ href: ROUTES_BLOG }}>
                <ButtonText>Go to all posts</ButtonText>

                <ButtonIcon
                    class="w-6"
                    icon={{ name: 'ChevronRight' }}
                />
            </Button>
        </Cta>
    </SectionFooter>
</Section>

<Divider />

<Section number="2">
    <SectionTitle>Projects</SectionTitle>

    <SectionContent class="mt-7">
        <Text>Coming soon...</Text>
    </SectionContent>

    <SectionFooter class="mt-7">
        <Cta>
            <Button action={{ href: ROUTES_PROJECTS }}>
                <ButtonText>Go to all projects</ButtonText>

                <ButtonIcon
                    class="w-6"
                    icon={{ name: 'ChevronRight' }}
                />
            </Button>
        </Cta>
    </SectionFooter>
</Section>
