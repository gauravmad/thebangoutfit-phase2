export default {
  name: 'userdetails',
  title: 'User Details',
  type: 'document',
  fields: [
    {
      name: 'firstname',
      title: 'First Name',
      type: 'string',
    },
    // {
    //     name: 'userprofilepic',
    //     title: 'User Profile Image',
    //     type: 'image',
    //     options: {
    //       hotspot: true,
    //       crop: true
    //     }
    // },
    {
      name: 'lastname',
      title: 'Last Name',
      type: 'string',
    },
    {
      name: 'mobilenumber',
      title: 'Contact Number',
      type: 'string',
    },
    {
      name: 'emailid',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'alternatemailid',
      title: 'Alternate Email ID',
      type: 'string',
    },
    {
      name: 'streetaddress',
      title: 'Flat No./Street Address',
      type: 'string',
    },
    {
      name: 'zipcode',
      title: 'Pincode/ZipCode',
      type: 'string',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
    },
    {
      name: 'state',
      title: 'State',
      type: 'string',
    },
    {
      name: 'country',
      title: 'Country',
      type: 'string',
    },
    {
      name: 'cartItems',
      title: 'Cart Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'productName',
              title: 'Product Name',
              type: 'string',
              readOnly: true,
              options: {
                source: 'productitle',
              },
            },
            {
              name: 'productImage',
              title: 'Product Image',
              type: 'image',
              readOnly: true,
              options: {
                source: 'productimage',
              },
            },
            {
              name: 'productMRP',
              title: 'Product MRP',
              type: 'number',
              readOnly: true,
              options: {
                source: 'finalproductprice',
              },
            },
            {
              name: 'productQuantity',
              title: 'Product Quantity',
              type: 'number',
            },
          ],
        },
      ],
    },
  ],
}
