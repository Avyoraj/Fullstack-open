## 📝 Exercise 0.5: Single page app diagram

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document (SPA version)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: JavaScript (SPA logic)
    deactivate server

    Note right of browser: Browser executes spa.js code

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: JSON notes data
    deactivate server

    Note right of browser: Browser renders initial notes using DOM API

    Note right of browser: User types note and clicks "Save"

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note left of  server: Server processes JSON payload,<br/>adds new note to data.json
    server-->>browser: HTTP 201 Created (no redirect)
    deactivate server

    Note right of browser: JavaScript adds new note to DOM<br/>without page reload

```