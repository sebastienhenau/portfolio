import { doesReducedMotionPreferenceMatch, getReducedMotionPreference } from "$utilities";
import { readable } from "svelte/store";

export type TReducedMotionStore = boolean;

const createReducedMotionStore = () => {
    return readable<TReducedMotionStore>(doesReducedMotionPreferenceMatch(), (set) => {
        const reducedMotionPreference = getReducedMotionPreference();

        const onChangeMotionPreference = () => {
            set(doesReducedMotionPreferenceMatch());
        };

        if (reducedMotionPreference) {
            reducedMotionPreference.addEventListener("change", onChangeMotionPreference);
        }

        return () => {
            if (reducedMotionPreference) {
                reducedMotionPreference.removeEventListener("change", onChangeMotionPreference);
            }
        };
    });
};

export default createReducedMotionStore();
