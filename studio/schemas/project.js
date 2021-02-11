export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
        },
        {
            name: "place",
            type: "string",
        },
        {
            name: "description",
            type: "text",
        },
        {
            name: "projectType",
            title: "Project type",
            type: "string",
            options: {
                list: [
                    {value: "personal", title: "Personal"},
                    {value: "work", title: "Work"},
                ]
            },
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                    type: "string",
                }
            ],
            options: {
                layout: "tags",
            },
        }
    ],
}