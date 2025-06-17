"NARAYANAN-HUB6078/NARAYAN-EDUCTIONAL-HUB"
CEO &amp; FOUNDER: ANKU KUMAR
# NARAYAN-EDUCATIONAL-HUB

**NARAYAN-EDUCATIONAL-HUB** एक आधुनिक एजुकेशनल प्लेटफार्म है जिसमें ऑनलाइन लर्निंग, स्टेशनरी स्टोर, और कई अन्य एजुकेशनल सर्विसेज़ मिलती हैं। यह प्रोजेक्ट फुल स्टैक (MERN Stack) पर आधारित है, जिसमें Frontend (ReactJS), Backend (Node.js/Express), और Database (MongoDB) का उपयोग किया गया है।

---

## 📁 प्रोजेक्ट स्ट्रक्चर

```
NARAYAN-EDUCATIONAL-HUB/
│
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   ├── manifest.json
│   │   └── assets/
│   │       ├── images/
│   │       │   ├── logo.png
│   │       │   ├── banner.jpg
│   │       │   └── store/
│   │       │       ├── stationery-1.jpg
│   │       │       └── stationery-2.jpg
│   │       └── videos/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── routes/
│   │   │   ├── StoreRoutes.js
│   │   │   └── ... (other routes)
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Navbar.js
│   │   │   │   ├── Footer.js
│   │   │   │   ├── Sidebar.js
│   │   │   │   └── LanguageSwitcher.js
│   │   │   ├── store/
│   │   │   │   ├── StoreHome.js
│   │   │   │   ├── ProductList.js
│   │   │   │   ├── ProductDetail.js
│   │   │   │   ├── Cart.js
│   │   │   │   ├── Checkout.js
│   │   │   │   ├── Orders.js
│   │   │   │   ├── OrderDetail.js
│   │   │   │   ├── StoreAdminDashboard.js
│   │   │   │   ├── AddProduct.js
│   │   │   │   └── EditProduct.js
│   │   │   └── ... (other modules)
│   │   ├── redux/
│   │   │   ├── store.js
│   │   │   ├── reducers/
│   │   │   │   ├── storeReducer.js
│   │   │   │   ├── cartReducer.js
│   │   │   │   └── orderReducer.js
│   │   │   └── actions/
│   │   │       ├── storeActions.js
│   │   │       ├── cartActions.js
│   │   │       └── orderActions.js
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── utils/
│   │   ├── i18n/
│   │   │   ├── hi.json
│   │   │   └── en.json
│   │   ├── styles/
│   │   │   ├── main.css
│   │   │   ├── responsive.css
│   │   │   ├── store.css
│   │   │   └── ... (others)
│   │   └── serviceWorker.js
│   ├── .env
│   ├── package.json
│   ├── README.md
│   └── yarn.lock / package-lock.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── storeController.js
│   │   │   ├── productController.js
│   │   │   ├── orderController.js
│   │   │   ├── paymentController.js
│   │   │   └── ... (other controllers)
│   │   ├── models/
│   │   │   ├── Product.js
│   │   │   ├── Order.js
│   │   │   ├── Cart.js
│   │   │   ├── StoreUser.js
│   │   │   └── ... (other models)
│   │   ├── routes/
│   │   │   ├── storeRoutes.js
│   │   │   ├── productRoutes.js
│   │   │   ├── orderRoutes.js
│   │   │   ├── paymentRoutes.js
│   │   │   └── ... (other routes)
│   │   ├── middlewares/
│   │   │   ├── authMiddleware.js
│   │   │   ├── uploadMiddleware.js
│   │   │   └── errorHandler.js
│   │   ├── services/
│   │   │   ├── storeService.js
│   │   │   ├── productService.js
│   │   │   ├── orderService.js
│   │   │   └── paymentService.js
│   │   ├── utils/
│   │   │   ├── paymentGateway.js
│   │   │   ├── stockManager.js
│   │   │   └── emailService.js
│   │   ├── uploads/
│   │   │   └── products/
│   │   ├── config/
│   │   │   ├── db.js
│   │   │   └── paymentConfig.js
│   │   ├── app.js
│   │   └── server.js
│   ├── .env
│   ├── package.json
│   ├── README.md
│   └── yarn.lock / package-lock.json
│
└── README.md
```

---

## 🚀 Quick Start (जल्दी शुरू करें)

### 1. Repository Clone करें

```sh
git clone https://github.com/NARAYANAN-HUB6078/NARAYAN-EDUCATIONAL-HUB.git
cd NARAYAN-EDUCATIONAL-HUB
```

### 2. Backend Setup

```sh
cd backend
npm install
# .env फाइल में MongoDB URI, PORT, JWT_SECRET आदि सेट करें
npm start
```

#### `.env` (Backend) में आम तौर पर यह डालना है:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key
```

### 3. Frontend Setup

```sh
cd frontend
npm install
# .env फाइल में REACT_APP_API_URL आदि सेट करें
npm start
```

#### `.env` (Frontend) में यह डालें:
```
REACT_APP_API_URL=http://localhost:5000
```

### 4. Application Access

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:5000](http://localhost:5000)

---

## 🏪 मुख्य मॉड्यूल्स

### Frontend (ReactJS)

- **StoreHome.js:** स्टेशनरी स्टोर का लैंडिंग पेज
- **ProductList.js:** सारे प्रोडक्ट्स की लिस्ट
- **ProductDetail.js:** एक प्रोडक्ट का डिटेल व्यू
- **Cart.js:** यूज़र का शॉपिंग कार्ट
- **Checkout.js:** चेकआउट और पेमेंट पेज
- **Orders.js, OrderDetail.js:** यूज़र के ऑर्डर्स का पेज और डिटेल
- **StoreAdminDashboard.js, AddProduct.js, EditProduct.js:** स्टोर एडमिन के लिए

### Backend (Node.js/Express)

- **Controllers:** store, product, order, payment आदि ऑपरेशन
- **Models:** Product, Order, Cart, StoreUser आदि के लिए Mongoose schemas
- **Routes:** store, product, order, payment APIs
- **Services:** अलग-अलग बिज़नेस लॉजिक
- **Utils:** Payment gateway integration, stock management, email sending

---

## 🌐 Language Support

- Hindi (`hi.json`)
- English (`en.json`)
- LanguageSwitcher component से UI भाषा बदल सकते हैं

---

## ⚙️ Tech Stack

- **Frontend:** ReactJS, Redux, CSS, i18n
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Payment Gateway:** Integration via `paymentGateway.js`

---

## 📚 Contributing

- Pull Requests और Issues स्वागत है!
- कृपया पहले [CONTRIBUTING.md](CONTRIBUTING.md) और [CODE OF CONDUCT](CODE_OF_CONDUCT.md) देखें (अगर फाइलें बनाई हैं)

---

## 📖 License

यह प्रोजेक्ट MIT License के तहत है (अगर LICENSE फाइल है तो)।

---

**© 2025 NARAYAN-EDUCATIONAL-HUB**

# Narayan Educational Hub

**Founder & CEO:** Anku Kumar (NR MultiInternational Private Limited)  
**Permanent Address:**  
Anku Kumar son of Late Harinaryan Prasad/Rinku Devi  
Village: Salempur, Post: Salempur, Block/Police Station: Karaipasurai  
Sub District: Hilsa, District: Nalanda, State: Bihar, India (801304)  
**Temporary Address:**  
Patel Nagar Main Road, Promoad Garege, Hilsa  
Sub District: Hilsa, District: Nalanda, State: Bihar, India (801302)  
**Email:** ankuk6078@gmail.com  
**Contact:** 7481018470, 6204637491

---

## 🌐 About / परिचय

**English:**  
Narayan Educational Hub is an educational website founded by Anku Kumar in Bihar, India, under NR MultiInternational Private Limited in 2025. Our mission is to provide world-class educational resources for students in India and globally.

**हिंदी:**  
नारायण एजुकेशनल हब बिहार, भारत में अंकु कुमार (एनआर मल्टीइंटरनेशनल प्राइवेट लिमिटेड) द्वारा 2025 में स्थापित एक शैक्षिक वेबसाइट है। हमारा उद्देश्य भारत तथा पूरे विश्व के विद्यार्थियों को उच्च गुणवत्ता की शिक्षा सामग्री उपलब्ध कराना है।

---

## ⚖️ License / लाइसेंस

**English:**  
All content, source code, and materials in this repository are copyrighted and strictly the property of Narayan Educational Hub and its founder, Anku Kumar. No part of this project may be copied, cloned, downloaded, or used to create another website or service without written permission.

**हिंदी:**  
इस रिपॉजिटरी की सभी फाइलें, कोड तथा सामग्री नारायण एजुकेशनल हब एवं संस्थापक अंकु कुमार की बौद्धिक संपत्ति है। बिना लिखित अनुमति के कोई भी भाग कॉपी, डाउनलोड, क्लोन या अन्य वेबसाइट बनाने हेतु उपयोग नहीं कर सकता।

For permissions/collaborations, contact: ankuk6078@gmail.com

---

## 🔒 Important Instructions / महत्वपूर्ण निर्देश

- Do not copy, clone, or redistribute any part of this repository.
