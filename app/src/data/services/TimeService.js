export const TimeService = {
    timeFormatter(duration) {
        const minutes = Math.floor(duration / 60).toString().padStart(2, "0");
        const seconds = (duration % 60).toString().padStart(2, "0");

        return `${minutes}:${seconds}`;
    },
};
