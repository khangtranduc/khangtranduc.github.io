export enum Status {
    Ongoing = 0,
    Completed = 1,
    Sidelined = 2
};

export type Project = {
    name: string,
    status: Status,
    desc?: string,
    src?: string
}