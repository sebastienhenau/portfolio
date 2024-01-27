<script lang="ts">
    import { onMount } from 'svelte';
    import clsx from 'clsx';
    import { Button, ButtonIcon, ButtonText } from '$components';
    import { dialogs } from '$stores';
    import type { TDialogElement, TDialogId, TDialogTitle } from './Dialog.types';

    // -----------------------------------------------------------------------------------------------------------------
    // Variables
    // -----------------------------------------------------------------------------------------------------------------
    let element: TDialogElement;

    // -----------------------------------------------------------------------------------------------------------------
    // Props
    // -----------------------------------------------------------------------------------------------------------------
    export let id: TDialogId;
    export let title: TDialogTitle;

    // -----------------------------------------------------------------------------------------------------------------
    // Event Listeners
    // -----------------------------------------------------------------------------------------------------------------
    const onCloseButtonClick = () => {
        dialogs.hideDialog(id);
    };

    /* TODO: typescript */
    /* eslint-disable-next-line */
    const onDialogClick = ({ target }: any) => {
        if (target.nodeName === 'DIALOG') {
            /* TODO: string dismiss in close */
            target.close();
        }
    };

    // -----------------------------------------------------------------------------------------------------------------
    // Life cycles
    // -----------------------------------------------------------------------------------------------------------------
    onMount(() => {
        dialogs.registerDialog(id, element);
    });
</script>

<dialog
    bind:this={element}
    class={clsx('dialog panel', $$props.class)}
    {id}
>
    <div class="dialog-wrapper">
        <header class="flex items-center justify-between gap-4 p-5 border-b border-border">
            <h2 class="flex-1 font-bold text-6 text-site-contrast-1">
                {title}
            </h2>

            <Button
                on:click={onCloseButtonClick}
                size="sm"
                variant="neutral"
            >
                <ButtonText>Sluiten</ButtonText>

                <ButtonIcon icon={{ name: 'Close' }} />
            </Button>
        </header>

        <div class="dialog-content p-5">
            <slot name="content" />
        </div>

        {#if !!$$slots.footer}
            <footer class="p-5 border-t border-border">
                <slot name="footer" />
            </footer>
        {/if}
    </div>
</dialog>

<!--
<script lang='ts'>
    import { onMount } from 'svelte';
    import clsx from 'clsx';

    export let id;

    let dialog;

    let dialogClosingEvent;
    let dialogClosedEvent;
    let dialogOpeningEvent;
    let dialogOpenedEvent;
    let dialogRemovedEvent;

    const lightDismiss = ({ target }) => {
        if (target.nodeName === 'DIALOG') {
            target.close('dismiss');
        }
    };

    const dialogClose = async ({ target: dialog }) => {
        dialog.setAttribute('inert', '');
        dialog.dispatchEvent(dialogClosingEvent);

        await animationsComplete(dialog);

        dialog.removeAttribute('loading');
        dialog.dispatchEvent(dialogClosedEvent);
    };

    const animationsComplete = (element) => {
        return Promise.allSettled(
            element.getAnimations()
                   .map((animation) => {
                       return animation.finished;
                   }));
    };

    onMount(() => {
        dialogClosingEvent = new Event('closing');
        dialogClosedEvent = new Event('closed');
        dialogOpeningEvent = new Event('opening');
        dialogOpenedEvent = new Event('opened');
        dialogRemovedEvent = new Event('removed');

        dialog.addEventListener('click', lightDismiss);
        dialog.addEventListener('close', dialogClose);

        const dialogAttrObserver = new MutationObserver((mutations, observer) => {
            mutations.forEach(async mutation => {
                if (mutation.attributeName === 'open') {
                    const dialog = mutation.target;

                    const isOpen = dialog.hasAttribute('open');
                    if (!isOpen) {
                        return;
                    }

                    dialog.removeAttribute('inert');

                    // set focus
                    const focusTarget = dialog.querySelector('[autofocus]');
                    focusTarget
                        ? focusTarget.focus()
                        : dialog.querySelector('button')
                                .focus();

                    dialog.dispatchEvent(dialogOpeningEvent);
                    await animationsComplete(dialog);
                    dialog.dispatchEvent(dialogOpenedEvent);
                }
            });
        });

        dialogAttrObserver.observe(dialog, {
            attributes: true,
        });

        const dialogDeleteObserver = new MutationObserver((mutations, observer) => {
            mutations.forEach(mutation => {
                mutation.removedNodes.forEach(removedNode => {
                    if (removedNode.nodeName === 'DIALOG') {
                        removedNode.removeEventListener('click', lightDismiss);
                        removedNode.removeEventListener('close', dialogClose);
                        removedNode.dispatchEvent(dialogRemovedEvent);
                    }
                });
            });
        });

        dialogDeleteObserver.observe(document.body, {
            attributes: false,
            subtree: false,
            childList: true,
        });
    });
</script>

<dialog
    bind:this={dialog}
    class={clsx(
    )}
    id='dialog'
>
    <form method='dialog'>
        <button autofocus type='submit'>Close</button>

        <header>
            <h1>header</h1>
        </header>

        <article>
            <p>article</p>
            <p>article</p>
            <p>article</p>
            <p>article</p>
            <p>article</p>
            <p>article</p>
            <p>article</p>
            <p>article</p>
            <p>article</p>
            <p>article</p>
            <p>article</p>
            <p>article</p>
            <p>article</p>
            <p>article</p>
            <p>article</p>
            <p>article</p>
            <p>article</p>
            <p>article</p>
            <p>article</p>
            <p>article</p>
            <p>article</p>
            <p>article</p>
            <p>article</p>
            <p>article</p>
        </article>

        <footer>
            <p>footer</p>
        </footer>
    </form>
</dialog>

<style>
    dialog {
        display: grid;

        max-inline-size: min(90vw, 60ch);
        max-block-size: min(80vh, 100%);
        max-block-size: min(80dvb, 100%);
        overflow: hidden;
        width: 100%;

        margin: auto;
        padding: 0;
        position: fixed;
        inset: 0;
        z-index: 100;

        transition: opacity .5s ease-in-out;
    }

    dialog > form {
        display: grid;
        grid-template-rows: auto 1fr auto;
        align-items: start;
        max-block-size: 80vh;
        max-block-size: 80dvb;
    }

    dialog > form > article {
        overflow-y: auto;
        max-block-size: 100%; /* safari */
        overscroll-behavior-y: contain;
        display: grid;
        justify-items: flex-start;
    }

    dialog::backdrop {
        backdrop-filter: blur(8px);
    }

    /* check main.css for html element :has */

    dialog:not([open]) {
        pointer-events: none;
        opacity: 0;
    }

    @media (max-width: 768px) {
        dialog {
            margin-block-end: 0;
            border-end-end-radius: 0;
            border-end-start-radius: 0;
        }
    }
</style>
-->
