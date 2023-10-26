// Example of an API route on Next.js
export default function handler(req, res) {
  res.status(200).json({ status: 200, name: "API example", text: "Hello" });
}
