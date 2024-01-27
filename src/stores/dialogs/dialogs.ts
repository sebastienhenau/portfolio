/* TODO: type cleanup */
import type { TDialogId } from '$types';
import { get, writable } from 'svelte/store';

import type { TDialogsState, TDialogsStateDialogsValue } from './dialogs.types';

const createDialogs = (initialState: TDialogsState) => {
    const store = writable(initialState);

    const getDialog = (id: TDialogId): TDialogsStateDialogsValue | null => {
        return get(store).dialogs[id] || null;
    };

    const showDialog = (id: TDialogId) => {
        const dialog = getDialog(id);

        if (!dialog) {
            return;
        }

        store.update(({ activeDialogs, ...state }) => {
            return {
                ...state,
                activeDialogs: [...activeDialogs, id],
            };
        });

        dialog.showModal();
    };

    const hideDialog = (id: TDialogId) => {
        const dialog = getDialog(id);

        if (!dialog) {
            return;
        }

        store.update(({ activeDialogs: initialActiveDialogs, ...state }) => {
            const activeDialogs = initialActiveDialogs.filter((dialog) => dialog !== id);

            return {
                ...state,
                activeDialogs,
            };
        });

        dialog.close();
    };

    const clearActiveDialogs = () => {
        store.update(({ activeDialogs, ...state }) => {
            activeDialogs.forEach((activeDialog) => {
                const dialog = getDialog(activeDialog);

                if (dialog) {
                    dialog.close();
                }
            });

            return {
                ...state,
                activeDialogs: [],
            };
        });
    };

    const registerDialog = (id: TDialogId, element: TDialogsStateDialogsValue) => {
        store.update(({ dialogs, ...state }) => {
            return {
                ...state,
                dialogs: {
                    ...dialogs,
                    [id]: element,
                },
            };
        });
    };

    return {
        ...store,
        registerDialog,
        showDialog,
        hideDialog,
        clearActiveDialogs,
    };
};

export default createDialogs({
    dialogs: {},
    activeDialogs: [],
});
