export default{
    name:'userdetails',
    title:'User Details',
    type:'document',
    fields:[
        {
            name:'userprofilepic',
            title:'User Profile Image',
            type:'image',
            options:{
                hotspot:true,
                crop:true
            }
        },
        {
            name:'firstname',
            title:'First Name',
            type:'string',
        },
        {
            name:'lastname',
            title:'Last Name',
            type:'string'
        },
        {
            name:'mobilenumber',
            title:'Contact Number',
            type:'number'
        },
        {
            name:'emailid',
            title:'Email',
            type:'string'
        },
        {
            name:'streetaddress',
            title:'Flat No./Street Address',
            type:'string'
        },
        {
            name:'zipcode',
            title:'Pincode/ZipCode',
            type:'number'
        },
        {
            name:'city',
            title:'City',
            type:'string'
        },
        {
            name:'state',
            title:'State',
            type:'string'
        },
        {
            name:'country',
            title:'Country',
            type:'string'
        },

    ]
};