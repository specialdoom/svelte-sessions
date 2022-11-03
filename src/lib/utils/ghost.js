export function generateGhosts(count = 30) {
    return [...Array(count).keys()].map((i) => i);
}