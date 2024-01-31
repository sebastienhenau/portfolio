<script
    context="module"
    lang="ts"
>
    export type TButtonGroupDirection = 'row' | 'column' | 'custom';
    export type TCustomDirectionClass = string;

    export interface TButtonGroupProps {
        direction?: TButtonGroupDirection;
        customDirectionClass?: TCustomDirectionClass;
    }

    export type TButtonGroupContext = boolean;
</script>

<script lang="ts">
    import clsx from 'clsx';
    import { setContext } from 'svelte';

    export let customDirectionClass: TCustomDirectionClass = '';
    export let direction: TButtonGroupDirection = customDirectionClass ? 'custom' : 'row';

    setContext<TButtonGroupContext>('buttonGroup', true);
</script>

<div class={clsx('relative z-0 inline-block', $$props.class)}>
    <div class="absolute inset-0 -z-20 bg-line rounded pointer-events-none translate-x-2 translate-y-2" />

    <menu
        class={clsx('flex w-full', {
            '[&>*:not(:first-child)]:ml-[-2px]': direction === 'row',
            'flex-col [&>*:not(:first-child)]:mt-[-2px]': direction === 'column',
            [customDirectionClass]: direction === 'custom',
        })}
    >
        <slot />
    </menu>
</div>
