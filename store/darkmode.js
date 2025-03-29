export const state = () => ({
    darkMode: false
});

export const mutations = {
    TOGGLE_DARK_MODE(state) {
        state.darkMode = !state.darkMode;
    }
};