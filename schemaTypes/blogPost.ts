import { defineField, defineType } from "sanity";

export const post = defineType({
    name: 'post',
    title: 'Blog Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'string',
            options: {
                list: ['Magal', 'Ornito', 'Texugo', 'Neto', 'Guilherme', 'Francis', 'Yuri', 'Matheus'],
                layout: 'dropdown'
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Post URL',
            type: 'string',
            validation: (Rule) => Rule.required(), 
        }),
        defineField({
            name: 'image',
            title: 'Cover Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'datePublished',
            title: 'Date Published',
            type: 'date',
            validation: (Rule) => Rule.required(),
            options: {
                dateFormat: 'DD-MM-YYYY',
            }
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }, { type: 'image' }],
            validation: (Rule) => Rule.required(),
        })
    ]
})