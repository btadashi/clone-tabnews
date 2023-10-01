function status(request, response) {
  response.status(200).json({ chave: "é acima da média" });
}

export default status;
