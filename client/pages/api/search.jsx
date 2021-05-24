// pages/api/search
export async function getData(query) {
    const response = await fetch(`http://localhost:9000/api/items?q=${query}`);
    const jsonData = await response.json()
    return jsonData
}

export default async function handler(req, res) {
    const jsonData = await getData()
    res.status(200).json(jsonData)
}