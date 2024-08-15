export function isHasCookie(name: string): boolean {
    return !!document.cookie
        .split("; ")
        .find(el => el.startsWith(name))
}