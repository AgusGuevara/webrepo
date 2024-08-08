import {
    JavascriptOriginal,
    JqueryOriginalWordmark,
    Html5Original,
    Css3Original,
    ReactOriginal,
    ReduxOriginal,
    NodejsOriginal,
    ExpressOriginal,
    MongodbOriginal,
    GitOriginal,
    GithubOriginal,
    GitlabOriginal,
    TailwindcssOriginal,
    SassOriginal,
    CypressioLine,
    JiraOriginal,
    FigmaOriginal,
    SlackOriginal,
    PostmanOriginal,
    TypescriptOriginal,
} from "devicons-react";

interface nodes {
    toolname: string;
    toolcomponent: JSX.Element;
    experience: string;
}

interface tool {
    section: string;
    label: string;
    nodes: nodes[];
}

export const tools: tool[] = [
    {
        section: "frontEnd",
        label: "Front End Tools",
        nodes: [
            {
                toolname: "Javascript",
                toolcomponent: <JavascriptOriginal />,
                experience: "Professional+ (4+/years)",
            },
            {
                toolname: "Typescript",
                toolcomponent: <TypescriptOriginal />,
                experience: "Trainee/Jr (Months/exp)",
            },
            {
                toolname: "Jquery",
                toolcomponent: <JqueryOriginalWordmark />,
                experience: "Proffessional (2+/years)",
            },
            {
                toolname: "Html5",
                toolcomponent: <Html5Original />,
                experience: "Professional+ (4+/years)",
            },
            {
                toolname: "Css3",
                toolcomponent: <Css3Original />,
                experience: "Professional+ (4+/years)",
            },
            {
                toolname: "React",
                toolcomponent: <ReactOriginal />,
                experience: "Professional+ (4+/years)",
            },
            {
                toolname: "Redux",
                toolcomponent: <ReduxOriginal />,
                experience: "Professional (2+/years)",
            },
            {
                toolname: "Tailwindcss",
                toolcomponent: <TailwindcssOriginal />,
                experience: "Trainee/Jr (Months/exp)",
            },
            {
                toolname: "Sass",
                toolcomponent: <SassOriginal />,
                experience: "Professional+ (4+/years)",
            },
            {
                toolname: "Cypress.io",
                toolcomponent: <CypressioLine />,
                experience: "Junior (1/year)",
            },
        ],
    },
    {
        section: "backEnd",
        label: "Back End Tools",
        nodes: [
            {
                toolname: "Node.js",
                toolcomponent: <NodejsOriginal />,
                experience: "Junior (1/year)",
            },
            {
                toolname: "Express",
                toolcomponent: <ExpressOriginal />,
                experience: "Junior (1/year)",
            },
            {
                toolname: "Mongodb",
                toolcomponent: <MongodbOriginal />,
                experience: "Trainee/Jr (Months/exp)",
            },
            {
                toolname: "Postman",
                toolcomponent: <PostmanOriginal />,
                experience: "Professional+ (4+/years)",
            },
        ],
    },

    {
        section: "devTools",
        label: "Development Tools",
        nodes: [
            {
                toolname: "Git",
                toolcomponent: <GitOriginal />,
                experience: "Professional+ (4+/years)",
            },
            {
                toolname: "Github",
                toolcomponent: <GithubOriginal />,
                experience: "Professional+ (4+/years)",
            },
            {
                toolname: "Gitlab",
                toolcomponent: <GitlabOriginal />,
                experience: "Professional+ (4+/years)",
            },
            {
                toolname: "Jira",
                toolcomponent: <JiraOriginal />,
                experience: "Professional+ (4+/years)",
            },
            {
                toolname: "Figma",
                toolcomponent: <FigmaOriginal />,
                experience: "",
            },
            {
                toolname: "Slack",
                toolcomponent: <SlackOriginal />,
                experience: "",
            },
        ],
    },
];
