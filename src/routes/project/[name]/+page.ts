export const entries = () => {
    return [
        { name: '0' }
    ]
}

export const load = async ({ params }) => {
    return {
        name: params.name
    }
}