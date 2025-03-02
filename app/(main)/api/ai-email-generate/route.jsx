import { GenerateEmailTemplateAIModel } from "@/config/AiModel";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { prompt} = await req.json();

        const result = await GenerateEmailTemplateAIModel.sendMessage(prompt);
        const aiResp = result.response.text(); // Ensure we await the response

        console.log(aiResp);

        // Save this to DB (if needed)

        return NextResponse.json(JSON.parse(aiResp)); // Correctly returning JSON response
    } catch (e) {
        console.error("AI API Error:", e);
        return NextResponse.json({ error: e.message || "Something went wrong" }, { status: 500 });
    }
}
