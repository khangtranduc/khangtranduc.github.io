export const entries = () => {
    return [
        { index: '0' }
    ]
}

export const load = ({ params }) => {
    let index = +(params.index ?? '0');
    return { index }
}