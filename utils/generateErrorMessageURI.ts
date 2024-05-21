function generateErrorMessageURI(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return encodedMessage;
}

export default generateErrorMessageURI;
