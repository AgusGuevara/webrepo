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
} from "devicons-react";

interface nodes {
    toolname: string;
    toolcomponent: JSX.Element;
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
            { toolname: "Javascript", toolcomponent: <JavascriptOriginal /> },
            { toolname: "Jquery", toolcomponent: <JqueryOriginalWordmark /> },
            { toolname: "Html5", toolcomponent: <Html5Original /> },
            { toolname: "Css3", toolcomponent: <Css3Original /> },
            { toolname: "React", toolcomponent: <ReactOriginal /> },
            { toolname: "Redux", toolcomponent: <ReduxOriginal /> },
            { toolname: "Tailwindcss", toolcomponent: <TailwindcssOriginal /> },
            { toolname: "Sass", toolcomponent: <SassOriginal /> },
            { toolname: "Cypress.io", toolcomponent: <CypressioLine /> },
        ],
    },
    {
        section: "backEnd",
        label: "Back End Tools",
        nodes: [
            { toolname: "Node.js", toolcomponent: <NodejsOriginal /> },
            { toolname: "Express", toolcomponent: <ExpressOriginal /> },
            { toolname: "Mongodb", toolcomponent: <MongodbOriginal /> },
            { toolname: "Postman", toolcomponent: <PostmanOriginal /> },
        ],
    },

    {
        section: "devTools",
        label: "Development Tools",
        nodes: [
            { toolname: "Git", toolcomponent: <GitOriginal /> },
            { toolname: "Github", toolcomponent: <GithubOriginal /> },
            { toolname: "Gitlab", toolcomponent: <GitlabOriginal /> },
            { toolname: "Jira", toolcomponent: <JiraOriginal /> },
            { toolname: "Figma", toolcomponent: <FigmaOriginal /> },
            { toolname: "Slack", toolcomponent: <SlackOriginal /> },
        ],
    },
];
