<script>
    import clsx from 'clsx';
    import {
        Button,
        ButtonText,
        ButtonList,
        ButtonListItem,
        Image,
        Text,
        Panel,
        Highlight,
        ButtonIcon,
    } from '$components';
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

            <div
                class="@400/home-about-grid:hidden bg-gradient-striped pointer-events-none flex-1 rounded overflow-hidden"
            />

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
</div>
