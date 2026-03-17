export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const response = await fetch("https://cuifeifei.cn/wp-json/my-guestbook/v1/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Memorial-Token": process.env.MEMORIAL_API_TOKEN
        },
        body: JSON.stringify(req.body)
    });

    const data = await response.json();
    return res.status(response.status).json(data);
}
