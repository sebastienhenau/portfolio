<script>
    import clsx from 'clsx';
    import { Button, ButtonText, ButtonList, ButtonListItem, Image, Text, Panel, Cta, ButtonIcon } from '$components';
    import { ROUTES_ABOUT } from '$constants';
</script>

<div class={clsx('@container/home-about-grid', $$props.class)}>
    <div
        class="space-y-6 @600/home-about-grid:space-y-0 @600/home-about-grid:grid @600/home-about-grid:grid-cols-[1fr_15rem] @600/home-about-grid:grid-rows-2-auto @600/home-about-grid:items-stretch @600/home-about-grid:gap-6"
    >
        <Panel
            tag="article"
            class="col-start-1 col-end-2 row-start-1 row-end-2 p-6 flex flex-wrap gap-6 @400/home-about-grid:flex-nowrap"
        >
            <Panel class="min-w-[5rem] max-w-[6rem] w-full">
                <Image
                    fit="cover"
                    src="/images/profile.jpg"
                    ,
                    alt="Sébastien Henau"
                />
            </Panel>

            <div class="@400/home-about-grid:hidden bg-gradient-striped pointer-events-none flex-1" />

            <Text
                class=""
                tag="p"
                type="text"
            >
                Hello, my name is <strong>Sébastien</strong>. I build digital, interactive and accessible products and
                work on improving the technical stack at Little Miss Robot.
            </Text>
        </Panel>

        <ButtonList class="col-start-1 col-end-3 row-start-2 row-end-3">
            <ButtonListItem>
                <Button
                    variant="neutral"
                    size="sm"
                    action={{ href: 'https://github.com/sebastienhenau', target: '_blank' }}
                >
                    <ButtonIcon
                        slot="left"
                        icon={{ name: 'Github' }}
                    />

                    <svelte:fragment slot="center">
                        <ButtonText>Github</ButtonText>

                        <ButtonIcon icon={{ name: 'ExternalLink' }} />
                    </svelte:fragment>
                </Button>
            </ButtonListItem>

            <ButtonListItem>
                <Button
                    variant="neutral"
                    size="sm"
                    action={{ href: 'https://www.linkedin.com/in/sebastien-henau', target: '_blank' }}
                >
                    <ButtonIcon
                        slot="left"
                        icon={{ name: 'Linkedin' }}
                    />

                    <svelte:fragment slot="center">
                        <ButtonText>Linkedin</ButtonText>

                        <ButtonIcon icon={{ name: 'ExternalLink' }} />
                    </svelte:fragment>
                </Button>
            </ButtonListItem>

            <!--<ButtonListItem>
                <Button variant='neutral' size='sm'>
                    <ButtonIcon slot='left' icon={{ name: 'Linkedin' }} />

                    <svelte:fragment slot='center'>
                        <ButtonText>
                            X.com
                        </ButtonText>

                        <ButtonIcon icon={{ name: 'TwitterX' }} />
                    </svelte:fragment>
                </Button>
            </ButtonListItem>-->
        </ButtonList>

        <Cta class="col-start-2 col-end-3 row-start-1 row-end-2">
            <Button action={{ href: ROUTES_ABOUT }}>
                <ButtonText>More about me</ButtonText>
            </Button>
        </Cta>
    </div>
</div>

<!--<Card>
    <Panel
        class='max-w-[7rem] w-full'
        slot='image'
    >
        &lt;!&ndash; TODO: create more responsive images &ndash;&gt;
        <Picture image={{ src: '/images/profile.jpg', alt: 'Sébastien Henau' }} />
    </Panel>

    <svelte:fragment slot='content'>
        <Text
            tag='h1'
            type='title-2'
        >
            Sébastien Henau
        </Text>

        <Text
            class='text-site-contrast-2'
            tag='p'
            type='text'
        >
            Front-end lead at Little Miss Robot
        </Text>

        <Text
            class='mt-3'
            tag='p'
            type='text'
        >
            I build digital, interactive and accessible products and work on improving the technical stack at Little
            Miss Robot.
        </Text>

        <footer class='mt-7'>
            <Button action={{ href: ROUTES_ABOUT }}>
                <ButtonText>More about me</ButtonText>

                <ButtonIcon
                    class='w-6'
                    icon={{ name: 'ChevronRight' }}
                />
            </Button>
        </footer>
    </svelte:fragment>
</Card>-->
