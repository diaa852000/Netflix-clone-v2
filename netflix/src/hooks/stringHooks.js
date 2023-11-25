export const useHandleStrHook = (overview, num) => {
    if (overview && overview.length > 0) {
        if (overview?.length <= num) {
            return overview
        } else {
            let wordsArray = overview?.split(" ");
            return wordsArray.slice(0, num).join(" ")
        }
    }
};

export default useHandleStrHook;