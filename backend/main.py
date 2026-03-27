from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

email_user = os.getenv('GMAIL_USER')
email_pass = os.getenv('GMAIL_PASS')

@app.post("/contact")
async def contact(
    name: str = Form(...),
    phone: str = Form(...),
    email: str = Form(None),
    message: str = Form("")
):
    try:
        msg = MIMEMultipart()
        msg['From'] = email_user
        msg['To'] = email_user
        msg['Subject'] = f"New Lead: {name} - {phone}"

        body = f"""New Consultation Request

Name: {name}
Phone: {phone}
Email: {email or 'Not provided'}
Message: {message or 'No message'}

---
Jahaazibano Contact Form"""
        msg.attach(MIMEText(body, 'plain'))

        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(email_user, email_pass)
        text = msg.as_string()
        server.sendmail(email_user, email_user, text)
        server.quit()

        return {"success": True, "message": "Email sent to jahaazibano@gmail.com!"}

    except Exception as e:
        return JSONResponse({"success": False, "message": str(e)}, status_code=500)

@app.get("/")
async def root():
    return {"status": "Backend ready - POST /contact"}

