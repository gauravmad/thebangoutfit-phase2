import { typed, validation } from "sanity";

export default{
    name:'category',
    title:'Category',
    type:'document',
    fields:[
        {
            name:'Title',
            title:'Title',
            type:'string',
            validation:Rule=>Rule.required(),
        },
        {
            name:'slug',
            title:'Slug',
            type:'slug',
            options:{
                source:'Title',
                maxLength:200,
                slugify:input=>input.toLowerCase().replace(/\s+/g, '-').slice(0,200)
            },
            // validation:Rule=>Rule.required(),
        },
        {
            name:'image',
            title:'Category Image',
            type:'image',
            options:{
                hotspot:true,
                crop:true
            },
        },
        {
            name:'trending',
            title:'Trending Detail',
            type:'string'
        }
    ],
};