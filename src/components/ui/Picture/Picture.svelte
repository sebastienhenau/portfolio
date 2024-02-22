<script
    lang="ts"
    context="module"
>
    import type { TImageProps } from '$components';

    export type TPictureImage = TImageProps;
</script>

<script lang="ts">
    import { Image } from '$components';

    export let image: TPictureImage;
</script>

<picture>
    <slot />

    <Image {...image} />
</picture>
