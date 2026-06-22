# V-BANK-APP – Vulnerabilities List (Educational Hacking Practice)

**⚠️ WARNING**: This application is intentionally insecure. Do not deploy in production or use with real data.

---

## 🎯 Vulnerabilities Present (for you to discover & exploit)

1. **No Authentication / Authorization**  
   - All API endpoints are publicly accessible.  
   - No login, session, or token validation.  
   - Anyone can view, create, update, or delete any user’s data.

2. **Insecure Direct Object References (IDOR)**  
   - `PUT /update/:id` and `DELETE /delete/:id` accept a MongoDB `_id` from the URL.  
   - No ownership check – you can modify or delete any account if you know its `_id`.  
   - `_id` values are exposed in the `/data` endpoint.

3. **Plaintext Password Storage**  
   - Passwords are stored as plain strings in the database.  
   - Anyone with database access (or via the UI) can read them.

4. **No Input Validation / NoSQL Injection**  
   - `req.body` is passed directly to `Data.create()` – allows arbitrary fields and MongoDB operators.  
   - No checks on `amount` – negative values accepted (can steal money).  
   - Emails, names, and other fields are not validated.

5. **Missing Rate Limiting**  
   - No request frequency limits – brute‑force account numbers (numeric) or repeatedly call deposit/withdraw to drain funds.

6. **Sensitive Data Exposure in UI**  
   - The `/alldata` page displays all user records, including the `password` column in plaintext.

7. **No Error Handling & Information Leakage**  
   - Async operations lack try/catch – may reveal stack traces or internal errors.

8. **Overly Permissive CORS**  
   - `cors()` allows requests from any origin – can be abused by malicious websites.

9. **Insecure Delete (no confirmation)**  
   - Clicking the delete button immediately removes the record without user confirmation.

10. **No HTTPS (plain HTTP)**  
    - All traffic transmitted unencrypted – vulnerable to Man‑in‑the‑Middle attacks.

11. **Missing Security Headers**  
    - No `helmet` or similar – lacks protection against clickjacking, MIME sniffing, etc.

---

## 📌 How to Use This List

- Try to exploit each vulnerability manually or with tools (Burp Suite, Postman, browser dev tools).  
- Understand the root cause and think about how you would fix it.  
- Use this as a hands‑on exercise for learning web security.

Happy hacking – but only on your own local instance!
