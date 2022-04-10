import { NextApiRequest, NextApiResponse } from "next";

import { upload } from "@/lib/upload/config";

import nc from "next-connect";

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(upload.single("file"))
  .post((req, res) => {
    return res.json({
      imageUrl: req.file.location,
    });
  });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
