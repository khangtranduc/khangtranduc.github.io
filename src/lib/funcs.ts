export const getText = async (path: string) => {
    return await fetch(path).then(async (res) => {
        if (res.ok) return await res.text();
        return "";
    })
}