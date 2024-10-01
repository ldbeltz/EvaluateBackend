import {Request, Response} from "express"

export async function getUser(req: Request, res: Response) {
  try {
    res.status(200).send({
      mensagem: "User Details",
    });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
