from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import joblib

app = FastAPI()

model = joblib.load("spam_detector_model.pkl")
vectorizer = joblib.load("vectorizer.pkl")


class EmailData(BaseModel):
    text: str


@app.post("/classify")
async def classify_email(data: EmailData):
    text_vectorized = vectorizer.transform([data.text])
    prediction = model.predict(text_vectorized)
    return {"isSpam": bool(prediction[0] == 1)}
