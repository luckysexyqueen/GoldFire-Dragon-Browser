const url = "https://openrouter.ai/api/v1/chat/completions";
const headers = {
    "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
    "Content-Type": "application/json"
};
const payload = {
"model": "@preset/custom-gpt",
"messages": [
{
  "role": "user",
  "content": "Hello! How are you today?"
}
]
};

const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(payload)
});

const data = await response.json();
console.log(data);
