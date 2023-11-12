import { Status, type Project } from '$lib/types';

export const prerender = true;

export const load = async () => {
    return {
        projects: (<Project[]>
            [
                {name: "Signal Noise Suppression in Portable MRI", status: Status.Completed, desc:"mri.html", src: "/images/mri.jpg"
                    , att: [
                        {
                            name: "Download Report",
                            icon: "lucide:download",
                            href: "/downloads/mri_noise_proj.pdf"
                        }
                    ]},
                {name: "Project 1", status: Status.Ongoing, src: "/wave.gif"},
                {name: "Project 2", status: Status.Sidelined},
                {name: "Project 2", status: Status.Sidelined}
                // {name: "Project 2", status: Status.Sidelined},
                // {name: "Project 2", status: Status.Sidelined},
                // {name: "Project 2", status: Status.Sidelined}
            ]).sort((a, b) => {return a.status - b.status})
    }
}