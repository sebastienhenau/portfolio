<script lang="ts" context="module">
    import type { TTagsText } from "$types";

    export type THeadingsLevel = number;

    export interface THeadingsProps {
        level?: THeadingsLevel;
    }

    export interface THeadingsContext {
        level: THeadingsLevel;
        tag: TTagsText;
    }
</script>

<script lang="ts">
    import { getContext, setContext } from "svelte";

    const parentHeadingsContext = getContext<THeadingsContext>("headings") || {};
    const { level: parentHeadingContextLevel = 0 } = parentHeadingsContext;

    export let level: THeadingsLevel = parentHeadingContextLevel + 1;

    const getHeadingsTagByLevel = (): TTagsText => {
        switch (level) {
            case 1:
                return "h1";
            case 2:
                return "h2";
            case 3:
                return "h3";
            case 4:
                return "h4";
            case 5:
                return "h5";
            case 6:
                return "h6";
            default:
                return "p";
        }
    };

    setContext<THeadingsContext>("headings", {
        level,
        tag: getHeadingsTagByLevel(),
    });
</script>

<slot />
