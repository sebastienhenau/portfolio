<script context="module" lang="ts">
    import type { TImageProps } from "$components";

    export type TBlogpostImageImage = TImageProps;

    export interface TBlogpostImageProps {
        image: TBlogpostImageImage;
    }
</script>

<script lang="ts">
    import clsx from "clsx";
    import { Panel, Image } from "$components";

    export let image: TBlogpostImageImage;
</script>

<Panel class={clsx("post-image flex", $$props.class)}>
    <Image {...image} />
</Panel>
