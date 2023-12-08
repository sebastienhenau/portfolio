import type { TStory } from '$types';
import type { SvelteComponent } from 'svelte';

export interface TPageData {
    metadata: TStory;
    content: typeof SvelteComponent;
}
