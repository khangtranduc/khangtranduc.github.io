export enum Status {
    Ongoing = 0,
    Completed = 1,
    Sidelined = 2
};

export type Project = {
    name: string,
    status: Status,
    att: Attachment[],
    desc?: string,
    src?: string
}

export type Attachment = {
    name: string,
    icon: string,
    href: string
}