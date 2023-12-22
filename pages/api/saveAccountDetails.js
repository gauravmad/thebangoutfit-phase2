import { data } from "autoprefixer";
import { client } from "../../lib/client";

export default async function handler(req, res) {
  if (req.method != "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const {
    firstname,
    lastname,
    mobilenumber,
    alternatemailid,
    streetaddress,
    zipcode,
    city,
    state,
    country,
  } = req.body;

  try {
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

    return res
      .status(200)
      .json({ message: "User details saved successfully", data: result });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to save user details", error: error.message });
  }
}
