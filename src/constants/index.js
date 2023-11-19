import {
    mobile,
    backend,
    creator,
    web,

    csharp,
    python,
    cuda,
    django,
    docker,
    rust,

    cog,
    liberty,
    maverickTech,
    mavefund,
    admindashboardcog,
    rgbprint
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Full stack web Developer",
        icon: web,
    },
    {
        title: "Discord bots",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Low level systems programmer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "cs",
        icon: csharp
    },
    {
        name: "cuda",
        icon: cuda
    },
    {
        name: "django",
        icon: django
    },
    {
        name: "docker",
        icon: docker
    },
    {
        name: "python",
        icon: python
    },
    {
        name: "rust",
        icon: rust
    },
];

const experiences = [
    {
        title: "ASP.NET core back-end developer",
        company_name: "Liberty Bank",
        icon: liberty,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using ASP.NET core",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing APIs and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "FastAPI back-end developer",
        company_name: "Maverick tech",
        icon: maverickTech,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using FastAPI, React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing backend APIs and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "ASP.NET core full-stack web developer",
        company_name: "Children Of Georgia",
        icon: cog,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using ASP.NET blazor and MVC",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing role based authentication and ensuring cross-browser compatibility.",
            "Making the design fully responsive and mobile friendly.",
        ],
    },
    {
        title: "Node & React full stack web developer",
        company_name: "Hinkal.pro",
        icon: liberty,
        iconBg: "#383E56",
        date: "September 2023 - Currently",
        points: [
            "Tasked with maintaining the existing UI as well as implementing high quality components for new features",
            "Collaborating with cross company teams including designers, product managers, and other developers to deliver the expectations in record breaking times",
            "Participating in code reviews and providing as well as receiving constructive feedback to and from other developers.",
        ],
    }
];

const testimonials = [
    {
        testimonial: "I thought it was impossible to make a website as beautiful as our product, but Gio proved me wrong.",
        name: "Songyi Deng",
        designation: "CFO",
        company: "Mavefund",
        image: "https://como.ceb.cam.ac.uk/media/biogs/sd626_photo.jpg",
    },
    {
        testimonial: "I've never met a web developer who truly cares about their clients' success like Gio does.",
        name: "Gustavo Pinto",
        designation: "COO",
        company: "DEF Corp",
        image: "https://www.coatingspromag.com/uploads/images/2014/07/Orion%20Engineered%20Carbons%20-%20Gustavo%20Pinto.jpg",
    },
    {
        testimonial: "Gio helped us kickstart our startup business and supported us throughout the whole process!",
        name: "Andrew Karan",
        designation: "President",
        company: "UpCode",
        image: "https://media.licdn.com/dms/image/C4E22AQEPUNhivGX7Lw/feedshare-shrink_800/0/1665463874723?e=2147483647&v=beta&t=EMpe09kzoAWrlZ0XG6wAViZqWVeXMLHxwhay2yLf49M",
    },
];

const projects = [
    {
        name: "Mavefund.com",
        description: "Web-based platform that allows users to search, book, and manage stocks and data. providing a convenient and efficient solution for financial needs.",
        tags: [
            {
                name: "FastAPI",
                color: "green-text-gradient",
            },
            {
                name: "PostgreSQL",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: mavefund,
        source_code_link: "https://github.com/ddjerqq",
    },
    {
        name: "RGB print",
        description: "Python library for printing colored text and gradients in the terminal. It has much more functionality than colorama. It can animate the gradients on your terminal too.",
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "PyPi",
                color: "green-text-gradient",
            }
        ],
        image: rgbprint,
        source_code_link: "https://github.com/ddjerqq/rgbprint",
    },
    {
        name: "Admin Dashboard",
        description: "A comprehensive dashboard for admins and therapists working in children of Georgia. With JWT based authentication and Authorization. Data persistence using postgres and much more",
        tags: [
            {
                name: "ASP.NET",
                color: "green-text-gradient",
            },
            {
                name: "PostgreSQL",
                color: "blue-text-gradient",
            },
            {
                name: "BootstrapCss",
                color: "pink-text-gradient",
            },
        ],
        image: admindashboardcog,
        source_code_link: "https://github.com/",
    },
    {
        name: "Crypton",
        description: "A blockain based web app, built for fun and as a showcase of my skill and knowhow, with many modern technologies used, such as: .NET 8 Blazor Hybrid & WebAssembly, " 
                     + "Realtime connections with WebSockets through SignalR and many more in-house technologies made by me for anti-bot account protection, rate limtting and Identity management, all under one single project",
        tags: [
            {
                name: "ASP.NET Blazor",
                color: "purple-text-gradient",
            },
            {
                name: "PostgreSQL",
                color: "ping-text-gradient",
            },
            {
                name: "TailwindCss",
                color: "blue-text-gradient",
            },
        ],
        image: admindashboardcog,
        source_code_link: "https://github.com/ddjerqq/Crypton",
    },
];

export {services, technologies, experiences, testimonials, projects};
