/* TODO: cleanup */
import type { TDialogId } from '$types';

export type TDialogsStateDialogsValue = HTMLDialogElement;

export type TDialogsStateDialogs = {
    [key in TDialogId]?: TDialogsStateDialogsValue;
};

export type TDialogsStateActiveDialogs = TDialogId[];

export interface TDialogsState {
    dialogs: TDialogsStateDialogs;
    activeDialogs: TDialogsStateActiveDialogs;
}
