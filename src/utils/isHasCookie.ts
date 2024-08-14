export function isHasCookie(name: string): boolean {
    return !!document.cookie
        .split("; ")
        .filter(el => el.startsWith(name))[0]
}