import React, { useEffect, useState } from "react";
import App from "./App.jsx";
import Landing from "./Landing.jsx";

const ACCESS_KEY = "ficha-apa-access-v1";

/**
 * Códigos de acceso válidos.
 * Agrega o cambia códigos aquí cuando quieras — no distingue mayúsculas/minúsculas.
 * Ejemplo: puedes usar un código distinto cada mes, o uno por cada grupo de estudiantes.
 */
const VALID_CODES = ["APA-AGOSTO2026"];

export default function Gate() {
  const [unlocked, setUnlocked] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(ACCESS_KEY);
      if (saved && isValid(saved)) setUnlocked(true);
    } catch {
      // localStorage no disponible; se pedirá el código cada vez
    }
    setReady(true);
  }, []);

  function isValid(code) {
    const clean = code.trim().toUpperCase();
    return VALID_CODES.some((c) => c.toUpperCase() === clean);
  }

  function tryUnlock(code) {
    if (!code || !isValid(code)) return false;
    try {
      localStorage.setItem(ACCESS_KEY, code.trim());
    } catch {
      // si no se puede guardar, igual desbloqueamos para esta sesión
    }
    setUnlocked(true);
    return true;
  }

  function lockAgain() {
    try {
      localStorage.removeItem(ACCESS_KEY);
    } catch {}
    setUnlocked(false);
  }

  if (!ready) return null;

  return unlocked ? <App onLock={lockAgain} /> : <Landing onUnlock={tryUnlock} />;
}
