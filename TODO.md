# Project TODOs

## Completed
- [x] Run on localhost (Vite dev server http://localhost:5173/)
- [x] EmailJS contact form with Gmail integration
  - Service: service_juzy0ld
  - Template: template_cryxbpp 
  - Form sends data (History confirms name/phone/email/message received)
  - Template body needs {{name}} {{phone}} etc for content (Auto-Reply shown due to template config)

## Pending 
- Edit EmailJS template_cryxbpp body:
```
Subject: New Lead from {{name}}
Body:
Name: {{name}}
Phone: {{phone}}
Email: {{email}}
Message: {{message}}
```
- Parents page merge to WhyChooseUs (awaiting plan approval)
- Navbar mobile menu
- Courses redesign

Test form localhost:5173/contact - data sends, check Gmail after template fix.

