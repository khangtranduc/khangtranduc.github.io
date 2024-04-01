export const entries = () => {
    return [
        { name: 'white' }
    ]
}

export const load = async ({ params }) => {
    return {
        name: params.name
    }
}