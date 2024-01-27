<script lang="ts">
    import { setContext } from 'svelte';
    import clsx from 'clsx';
    import type { TActionElement } from '$components';
    import type { TActionWrapperContext } from './ActionWrapper.types';

    // -----------------------------------------------------------------------------------------------------------------
    // Variables
    // -----------------------------------------------------------------------------------------------------------------
    let actionElement: TActionElement;
    let mouseDownTimeStamp: number;
    let mouseUpTimeStamp: number;

    // -----------------------------------------------------------------------------------------------------------------
    // Methods
    // -----------------------------------------------------------------------------------------------------------------
    const setElement = (element: TActionElement) => {
        actionElement = element;
    };

    const onMouseDown = () => {
        mouseDownTimeStamp = +new Date();
    };

    const onMouseUp = () => {
        mouseUpTimeStamp = +new Date();

        if (mouseUpTimeStamp - mouseDownTimeStamp < 200) {
            actionElement.click();
        }
    };

    // -----------------------------------------------------------------------------------------------------------------
    // Context setters
    // -----------------------------------------------------------------------------------------------------------------
    setContext('actionWrapper', {
        setElement,
    } as TActionWrapperContext);
</script>

<!-- TODO: fix div wrapper -->
<div
    class={clsx('relative cursor-pointer group', $$props.class)}
    on:mousedown={onMouseDown}
    on:mouseup={onMouseUp}
    role="button"
    tabindex="0"
>
    <slot elevate="relative" />
</div>
