import { Status, type Project } from '$lib/types';

export const prerender = true;

export const load = async () => {
    return {
        projects: (<Project[]>
            [
                {name: "Signal Noise Suppression in Portable MRI", status: Status.Ongoing, desc:"mri.html", src: "/images/mri.jpg"
                    , att: [
                        {
                            name: "Download PDF",
                            icon: "lucide:download",
                            href: "/downloads/mri_noise_proj.pdf"
                        }
                    ]},
                {name: "Project 1", status: Status.Ongoing, src: "/wave.gif"},
                {name: "Project 3", status: Status.Ongoing},
                {name: "Project 4", status: Status.Completed},
                {name: "Project 5", status: Status.Sidelined},
                {name: "Project 6", status: Status.Completed},
                {name: "Project 7", status: Status.Sidelined}
            ]).sort((a, b) => {return a.status - b.status})
    }
}