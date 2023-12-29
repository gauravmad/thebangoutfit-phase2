import { data } from "autoprefixer";
import { client } from "../../lib/client";

export default async function handler(req, res) {
  if (req.method != "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const {
    firstname,
    lastname,
    emailid,
    mobilenumber,
    alternatemailid,
    streetaddress,
    zipcode,
    city,
    state,
    country,
  } = req.body;

  try {
    const existingUser = await client.fetch(
     ` *[_type == 'userdetails' && emailid == $emailid]`,
      { emailid }
    );

    console.log('Existing user:', existingUser); // Log the existing user

    if (existingUser.length > 0) {
      const user = existingUser[0];

      const result = await client
        .patch(user._id)
        .set({
          mobilenumber,
          alternatemailid,
          streetaddress,
          zipcode,
          city,
          state,
          country,
        })
        .commit();

      console.log('Patch result:', result); // Log the result of the patch query

      return res.status(200).json({ message: "User details updated successfully", data: result });
    } else {
      const result = await client.create({
        _type: "userdetails",
        firstname,
        lastname,
        mobilenumber,
        alternatemailid,
        streetaddress,
        zipcode,
        city,
        state,
        country,
      });

      console.log('Create result:', result); // Log the result of the create query

      return res.status(200).json({ message: "User details saved successfully", data: result });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to save user details", error: error.message });
  }
};