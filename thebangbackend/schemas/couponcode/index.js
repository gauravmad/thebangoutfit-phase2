import { types } from "@babel/core";

export default{
    name:'couponcode',
    title:'Coupon Code',
    type:'document',
    fields:[
        {
            name:'couponcode',
            title:'Coupon Code',
            type:'string'
        },
        {
            name:'discountedPrice',
            title:'Discounted Price in Rupees',
            type:'number'
        }
    ]
}