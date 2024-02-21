<script lang="ts">
    import clsx from 'clsx';
</script>

<main
    id="main"
    class={clsx('relative 900:pl-7', $$props.class)}
>
    <div class="max-900:hidden absolute top-0 left-0 w-border h-full bg-gradient-vertical-dashed -translate-x-1/2" />

    <slot />
</main>
