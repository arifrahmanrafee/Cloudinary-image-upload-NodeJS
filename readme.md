# 📤 Cloud Image Uploader API

## Project Name

Cloud Image Uploader API

---

## Project Description

Cloud Image Uploader API is a simple backend application that allows users to upload images to Cloudinary using a Node.js server.

We built this project to make image uploading easy and secure. Instead of storing images on our own server, we send them to Cloudinary, which safely stores and manages them in the cloud.

The server receives an image file from the user, uploads it to Cloudinary, and then returns the image URL.

---

## Technologies Used

### Programming Language

- JavaScript (Node.js)

### Framework

- Express.js

### Libraries

- Multer (for handling file uploads)
- Cloudinary SDK

### Service Provider

- Cloudinary (Cloud image storage service)

---

## Installation Guide

### 1. Clone the Project

```bash
git clone https://github.com/arifrahmanrafee/Cloudinary-image-upload-NodeJS.git
```

## Install dependencies

npm install

## Run server

npm start

### Server

http://localhost:3000

### Result:

JSON Format
{
"success": true,
"message": "Uploaded!",
"data": {
"asset_id": "38aaab0660830cfcc427a2a9a09eba92",
"public_id": "aotowzhes3qm1pxqtmlq",
"version": 1772565138,
"version_id": "bbe72862bb608b36b3fdb66248b95292",
"signature": "0cfb1947c221b1c20976ab583419968d80a018a6",
"width": 1920,
"height": 1280,
"format": "jpg",
"resource_type": "image",
"created_at": "2026-03-03T19:12:18Z",
"tags": [],
"bytes": 589438,
"type": "upload",
"etag": "6d531c1186c2677d645dbc01a6a4ef5a",
"placeholder": false,
"url": "http://res.cloudinary.com/dh6bgpoyc/image/upload/v1772565138/aotowzhes3qm1pxqtmlq.jpg",
"secure_url": "https://res.cloudinary.com/dh6bgpoyc/image/upload/v1772565138/aotowzhes3qm1pxqtmlq.jpg",
"asset_folder": "",
"display_name": "aotowzhes3qm1pxqtmlq",
"original_filename": "Nature",
"api_key": "416198931147727"
}
}
