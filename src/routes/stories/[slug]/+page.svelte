<script lang="ts">
    import { StoryHeader } from '$components';
    import type { TPageData } from './page.types';

    // -----------------------------------------------------------------------------------------------------------------
    // Server
    // -----------------------------------------------------------------------------------------------------------------
    export let data: TPageData;
</script>

<!-- TODO: detail page -->
<article>
    <StoryHeader
        date={data.metadata.date}
        listTags={{
            items: data.metadata.tags,
        }}
        title={data.metadata.title}
    />

    <svelte:component this={data.content} />

    <!--    -->
    <!--    <StoryIntro>-->
    <!--        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget ligula-->
    <!--        vel ligula imperdiet tempor. Vivamus nec nibh lacinia, pulvinar magna-->
    <!--        sit amet, ultrices ante. Lorem ipsum dolor sit amet, consectetur-->
    <!--        adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing-->
    <!--        elit. In eget ligula vel ligula imperdiet tempor. Vivamus nec nibh-->
    <!--        lacinia, pulvinar magna sit amet, ultrices ante. Lorem ipsum dolor sit-->
    <!--        amet, consectetur adipiscing elit.-->
    <!--    </StoryIntro>-->

    <!--    <Divider />-->

    <!--    <Flow>-->
    <!--        <FlowContent>-->
    <!--            <FlowSubtitle>Lorem ipsum dolor sit amet.</FlowSubtitle>-->

    <!--            <p>-->
    <!--                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget-->
    <!--                ligula vel ligula imperdiet tempor. Vivamus nec nibh lacinia,-->
    <!--                pulvinar magna sit amet, ultrices ante. Lorem ipsum dolor sit-->
    <!--                amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,-->
    <!--                consectetur adipiscing elit. In eget ligula vel ligula imperdiet-->
    <!--                tempor. Vivamus nec nibh lacinia, pulvinar magna sit amet,-->
    <!--                ultrices ante. Lorem ipsum dolor sit amet, consectetur-->
    <!--                adipiscing elit.-->
    <!--            </p>-->

    <!--            <Image-->
    <!--                alt='-->
    <!--                border-->
    <!--                class='w-full mt-6 h-[250px]'-->
    <!--                src='/images/placeholder.jpg'-->
    <!--            />-->

    <!--            <FlowSubtitle class='mt-6'>-->
    <!--                Lorem ipsum dolor sit amet.-->
    <!--            </FlowSubtitle>-->

    <!--            <p>-->
    <!--                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget-->
    <!--                ligula vel ligula imperdiet tempor. Vivamus nec nibh lacinia,-->
    <!--                pulvinar magna sit amet, ultrices ante. Lorem ipsum dolor sit-->
    <!--                amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,-->
    <!--                consectetur adipiscing elit. In eget ligula vel ligula imperdiet-->
    <!--                tempor. Vivamus nec nibh lacinia, pulvinar magna sit amet,-->
    <!--                ultrices ante. Lorem ipsum dolor sit amet, consectetur-->
    <!--                adipiscing elit.-->
    <!--            </p>-->

    <!--            <FlowSubtitle class='mt-6'>-->
    <!--                Lorem ipsum dolor sit amet.-->
    <!--            </FlowSubtitle>-->

    <!--            <p>-->
    <!--                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget-->
    <!--                ligula vel ligula imperdiet tempor. Vivamus nec nibh lacinia,-->
    <!--                pulvinar magna sit amet, ultrices ante. Lorem ipsum dolor sit-->
    <!--                amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,-->
    <!--                consectetur adipiscing elit. In eget ligula vel ligula imperdiet-->
    <!--                tempor. Vivamus nec nibh lacinia, pulvinar magna sit amet,-->
    <!--                ultrices ante. Lorem ipsum dolor sit amet, consectetur-->
    <!--                adipiscing elit.-->
    <!--            </p>-->
    <!--        </FlowContent>-->
    <!--    </Flow>-->

    <!--    <Divider />-->

    <!--    <StoryOutro>-->
    <!--        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget ligula-->
    <!--        vel ligula imperdiet tempor. Vivamus nec nibh lacinia, pulvinar magna-->
    <!--        sit amet, ultrices ante. Lorem ipsum dolor sit amet, consectetur-->
    <!--        adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing-->
    <!--        elit. In eget ligula vel ligula imperdiet tempor. Vivamus nec nibh-->
    <!--        lacinia, pulvinar magna sit amet, ultrices ante. Lorem ipsum dolor sit-->
    <!--        amet, consectetur adipiscing elit.-->
    <!--    </StoryOutro>-->
</article>
