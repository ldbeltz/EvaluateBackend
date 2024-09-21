export async function getUser(req: any, res: any) {
  try {
    res.status(200).send({
      mensagem: "User Details",
    });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
