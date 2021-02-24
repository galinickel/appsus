export const utilService = {
    makeId
}

function debounce(func, wait) {
    let timeout;

    return function (...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}