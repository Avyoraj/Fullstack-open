## 📝 Exercise 0.6: New note in Single page app diagram

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: User types note and clicks "Save"
    
    Note right of browser: JavaScript code (spa.js):
    Note right of browser: 1. Prevent default form submit
    Note right of browser: 2. Create note object
    Note right of browser: 3. Add note to DOM immediately
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note right of browser: Request contains JSON payload:
    Note right of browser: { content: "new note", date: "2023-09-20T..." }
    Note left of server: Server validates and saves note
    server-->>browser: HTTP 201 Created {"message":"note created"}
    deactivate server

    Note right of browser: No page reload needed
    Note right of browser: Existing notes remain visible
    Note right of browser: New note stays in DOM
```
