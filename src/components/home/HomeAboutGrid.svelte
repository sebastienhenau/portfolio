<script>
    import clsx from "clsx";
    import {
        Link,
        Section,
        SectionTitle,
        Button,
        ButtonIcon,
        ButtonText,
        ButtonList,
        ButtonListItem,
        Image,
        Text,
        Panel,
        Highlight,
        LinkText,
    } from "$components";
    import { ROUTES_ABOUT } from "$constants";
</script>

<Section class={clsx("@container/home-about-grid", $$props.class)}>
    <SectionTitle class="sr-only">About me</SectionTitle>

    <div
        class="space-y-6 @600/home-about-grid:grid @600/home-about-grid:grid-cols-[1fr_15rem] @600/home-about-grid:grid-rows-2-auto @600/home-about-grid:items-stretch @600/home-about-grid:gap-6 @600/home-about-grid:space-y-0"
    >
        <Panel
            class="col-start-1 col-end-2 row-start-1 row-end-2 flex flex-wrap gap-6 p-6 @400/home-about-grid:flex-nowrap"
        >
            <Panel class="aspect-square h-[6rem] w-[6rem]">
                <Image fit="cover" src="/images/profile.webp" alt="Sébastien Henau" width="96" height="96" />
            </Panel>

            <div
                class="pointer-events-none flex-1 overflow-hidden rounded bg-gradient-striped @400/home-about-grid:hidden"
            />

            <Text tag="p" type="text">
                Hello, my name is <strong>Sébastien</strong>, or just <strong>Seba</strong> is fine. I'm a front-end
                developer working at <Link inline action={{ href: "http://www.spatie.be", target: "_blank" }}
                    ><LinkText>Spatie</LinkText></Link
                >. I build interactive and accessible websites and web applications.
            </Text>
        </Panel>

        <ButtonList class="col-start-1 col-end-3 row-start-2 row-end-3">
            <ButtonListItem>
                <Button
                    variant="neutral"
                    size="sm"
                    action={{ href: "https://github.com/sebastienhenau", target: "_blank" }}
                >
                    <ButtonIcon slot="left" icon={{ name: "Github" }} />

                    <svelte:fragment slot="center">
                        <ButtonText>Github</ButtonText>

                        <ButtonIcon icon={{ name: "ExternalLink" }} />
                    </svelte:fragment>
                </Button>
            </ButtonListItem>

            <ButtonListItem>
                <Button
                    variant="neutral"
                    size="sm"
                    action={{ href: "https://www.linkedin.com/in/sebastien-henau", target: "_blank" }}
                >
                    <ButtonIcon slot="left" icon={{ name: "Linkedin" }} />

                    <svelte:fragment slot="center">
                        <ButtonText>Linkedin</ButtonText>

                        <ButtonIcon icon={{ name: "ExternalLink" }} />
                    </svelte:fragment>
                </Button>
            </ButtonListItem>
        </ButtonList>

        <Highlight
            class="col-start-2 col-end-3 row-start-1 row-end-2"
            verticalAlignment="center"
            horizontalAlignment="center"
        >
            <Button action={{ href: ROUTES_ABOUT }}>
                <ButtonText>More about me</ButtonText>
            </Button>
        </Highlight>
    </div>
</Section>
