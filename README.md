# Gmail Spam Filter

The Gmail Spam Filter is a Chrome extension that automatically identifies and moves emails marked as spam to the spam folder in Gmail. It utilizes a machine learning model to classify emails based on their content.

## Technologies

- Python 3.x
- FastAPI
- scikit-learn
- Chrome Extension API
- Firebase (optional)

## Project Structure
```
/gmail-spam-filter 
├── main.py # Main FastAPI file | 
├── spam_detector_model.pkl # Saved classification model
├── vectorizer.pkl # Saved vectorizer
└── requirements.txt # Project dependencies
├── manifest.json # Chrome extension manifest file 
├── content.js # Email classification script
└── background.js # Extension background script 
└── .env # Configuration file with Firebase credentials
```
## Model and JavaScript Scripts Overview

### Machine Learning Model
The spam detection model is trained on a labeled email dataset to classify emails as spam or non-spam. It uses vectorization (like TF-IDF) to convert text into numerical format and employs a classification algorithm (e.g., linear regression). The trained model and vectorizer are saved as `spam_detector_model.pkl` and `vectorizer.pkl`, respectively.

### JavaScript Code in the Chrome Extension
The extension consists of two main scripts:

1. **Content Script (`content.js`)**: This script interacts with Gmail's interface. It selects all emails, extracts the subject and snippet, and sends this data to the FastAPI server for classification. If the response indicates the email is spam, it automatically selects the email and moves it to the spam folder.

2. **Background Script (`background.js`)**: This script manages the overall functionality of the extension and initializes Firebase for data storage. It listens for events and ensures classification requests are handled appropriately.

### Workflow Summary
Upon opening Gmail, the extension scans for emails, extracts their content, sends it for classification, and acts on the server's prediction to enhance email management.


## Config
FIREBASE_TYPE=...
FIREBASE_PROJECT_ID=...
FIREBASE_PRIVATE_KEY_ID=...
FIREBASE_PRIVATE_KEY=...
FIREBASE_EMAIL=...
FIREBASE_CLIENT_ID=...
FIREBASE_AUTH_URL=...
FIREBASE_TOKEN=...
FIREBASE_AUTH=...
FIREBASE_AUTH_PROV=...
FIREBASE_DOMAIN=...


