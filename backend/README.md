# Jahaazibano Merchant Navy EdTech Platform Backend

## Setup

1. (Recommended) Create a virtual environment:
   
   python -m venv venv
   
   On Windows:
   venv\Scripts\activate
   
   On Mac/Linux:
   source venv/bin/activate

2. Install dependencies:
   
   pip install -r requirements.txt

3. Run the FastAPI server:
   
   uvicorn main:app --reload

The API will be available at http://localhost:8000

## Endpoints
- POST /contact: Accepts name, email, message (JSON)

CORS is enabled for local frontend development.
