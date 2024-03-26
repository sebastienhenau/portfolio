<script lang="ts" context="module">
    import type { TBreakpointIdentifier } from "$types";

    export type TPictureSourceSrcset = string;
    export type TPictureSourceType = string;
    export type TPictureSourceMedia = TBreakpointIdentifier;

    export interface TPictureSourceProps {
        srcset: TPictureSourceSrcset;
        type: TPictureSourceType;
        media: TPictureSourceMedia;
    }
</script>

<script lang="ts">
    import { getBreakpointMediaQuery } from "$utilities";

    export let srcset: TPictureSourceSrcset;
    export let type: TPictureSourceType;
    export let media: TPictureSourceMedia;
</script>

<source {srcset} {type} media={getBreakpointMediaQuery(media)} />
