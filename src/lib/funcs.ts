export const getDesc = async (filename: any) => {
    return await fetch(`/texts/${filename}`).then(async (res) => {
        if (res.ok) return await res.text();
        throw new Error("not found");
    })
}