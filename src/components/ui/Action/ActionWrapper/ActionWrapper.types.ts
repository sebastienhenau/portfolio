import type { TActionElement } from '$components';

// ---------------------------------------------------------------------------------------------------------------------
// Contexts
// ---------------------------------------------------------------------------------------------------------------------
export interface TActionWrapperContext {
    setElement: (element: TActionElement) => void;
}
