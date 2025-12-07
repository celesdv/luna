// Ejemplo de servicio para enviar el formulario RSVP
// Copia este archivo como formService.js y configura según tu opción elegida

// ============================================
// OPCIÓN 1: Formspree (Más simple)
// ============================================
// 1. Crea una cuenta en https://formspree.io/
// 2. Crea un nuevo formulario y obtén el endpoint
// 3. Reemplaza 'YOUR_FORMSPREE_ENDPOINT' con tu endpoint

export const submitToFormspree = async (formData) => {
  const response = await fetch('YOUR_FORMSPREE_ENDPOINT', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  
  if (!response.ok) {
    throw new Error('Error al enviar el formulario');
  }
  
  return response.json();
};

// ============================================
// OPCIÓN 2: Firebase Firestore
// ============================================
// 1. npm install firebase
// 2. Crea un proyecto en Firebase Console
// 3. Configura Firestore
// 4. Crea un archivo firebase.js con tu configuración

/*
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';

export const submitToFirebase = async (formData) => {
  try {
    const docRef = await addDoc(collection(db, 'rsvp'), {
      ...formData,
      timestamp: new Date(),
    });
    return { id: docRef.id, success: true };
  } catch (error) {
    throw new Error('Error al guardar en Firebase: ' + error.message);
  }
};
*/

// ============================================
// OPCIÓN 3: Backend Node.js/Express simple
// ============================================
// Crea un servidor Express simple:
/*
// server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/rsvp', async (req, res) => {
  try {
    const { name, email, phone, guests, message } = req.body;
    
    // Aquí puedes guardar en una base de datos
    // Por ejemplo: MongoDB, PostgreSQL, etc.
    
    // Por ahora solo logueamos
    console.log('Nueva confirmación:', { name, email, phone, guests, message });
    
    res.json({ success: true, message: 'Confirmación recibida' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
*/

export const submitToBackend = async (formData) => {
  const response = await fetch('http://localhost:3000/api/rsvp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  
  if (!response.ok) {
    throw new Error('Error al enviar el formulario');
  }
  
  return response.json();
};

// ============================================
// Uso en RSVP.jsx
// ============================================
/*
import { submitToFormspree } from '../utils/formService';

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await submitToFormspree(formData);
    setSubmitted(true);
  } catch (error) {
    alert('Error al enviar. Por favor intenta nuevamente.');
    console.error(error);
  }
};
*/

