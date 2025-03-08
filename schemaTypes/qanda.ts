import { defineField, defineType } from "sanity";

export const qanda = defineType({
    name: 'qanda',
    title: 'Q&A',
    type: 'document',
    fields: [
        defineField({
            name: 'question',
            title: 'Question',
            type: 'string',
        }),
        defineField({
            name: 'answer',
            title: 'Answer',
            type: 'string',
        }),
    ],
})