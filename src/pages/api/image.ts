import { NextApiRequest, NextApiResponse } from "next";

import { upload } from "@/lib/upload/config";

import nc from "next-connect";

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(upload.single("file"))
  .post((req, res) => {
    try {
      return res.json({
        imageUrl: req.file?.location,
      });
    } catch(err) {
      console.log(err)

      res.status(500).end()
    }
  });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
