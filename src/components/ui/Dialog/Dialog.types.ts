/* TODO: cleanup types */
import type { TDialogId as TGlobalDialogId } from '$types';

// ---------------------------------------------------------------------------------------------------------------------
// Variables
// ---------------------------------------------------------------------------------------------------------------------
export type TDialogElement = HTMLDialogElement;

// ---------------------------------------------------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------------------------------------------------
export type TDialogId = TGlobalDialogId;
export type TDialogTitle = string;

export interface TDialog {
    id: TDialogId;
    title: TDialogTitle;
}
