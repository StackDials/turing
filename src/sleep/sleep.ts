function sleep(ms = 0): Promise<any> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default sleep;
