import React, { useState } from "react";
import {
  BookOpen,
  FileText,
  PlayCircle,
  HelpCircle,
  ListChecks,
  QrCode,
  Landmark,
  MessageCircle,
  Lock,
  CheckCircle2,
  ArrowRight,
  PenSquare,
} from "lucide-react";

/* ============================================================ */
/* DATOS EDITABLES — cambia esto por tu información real          */
/* ============================================================ */
const CONFIG = {
  precioUsd: "5",
  precioBs: "50",
  whatsappNumero: "59170201606",
  whatsappMensaje:
    "Hola Betty, ya realicé el pago del curso Ficha APA y te comparto mi comprobante.",
  correoContacto: "bmeneses772020@gmail.com",
  banco: "Banco Ganadero",
  titular: "Betty Meneses Ayllón",
  numeroCuenta: "1051993464",
  tipoCuenta: "Caja de ahorro",
};

const INK = "#0B3D42";
const INK_SOFT = "#1B4C52";
const PAPER = "#F6F1E7";
const PAPER_CARD = "#FCFAF4";
const GOLD = "#C98A2E";
const WINE = "#7A2E3B";
const SAGE = "#4F7A5D";
const LINE = "#DDD3BE";
const TEXT = "#29291F";
const TEXT_SOFT = "#6b6b5f";

const modules = [
  "Bienvenida y fundamentos",
  "Formato general del documento",
  "Niveles de títulos y subtítulos",
  "Citas en el texto",
  "Lista de referencias",
  "Tablas y figuras en APA 7",
];

export default function Landing({ onUnlock }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  const whatsappHref = `https://wa.me/${CONFIG.whatsappNumero}?text=${encodeURIComponent(
    CONFIG.whatsappMensaje
  )}`;

  function handleSubmit(e) {
    e.preventDefault();
    const ok = onUnlock(code);
    if (!ok) {
      setError(true);
    }
  }

  return (
    <div className="ld-root">
      <Styles />

      {/* -------- Encabezado -------- */}
      <header className="ld-header">
        <BookOpen size={22} strokeWidth={2} />
        <div>
          <div className="ld-brand">APA 7</div>
          <div className="ld-brand-sub">Curso de autogestión · Normas APA 7.ª edición</div>
        </div>
      </header>

      {/* -------- Hero -------- */}
      <section className="ld-hero">
        <span className="ld-kicker">Curso corto y 100% a tu ritmo</span>
        <h1>Aprende a citar y referenciar en APA 7 sin enredos</h1>
        <p className="ld-hero-sub">
          Seis módulos, texto y video, cuestionarios y listas de chequeo — todo pensado para
          que apliques las normas APA con confianza en tus trabajos, ensayos y tesis.
        </p>
        <div className="ld-price-badge">
          <span className="ld-price-amount">${CONFIG.precioUsd} USD</span>
          <span className="ld-price-alt">≈ Bs. {CONFIG.precioBs} · pago único, acceso permanente</span>
        </div>
        <a href="#pagar" className="ld-btn-primary">
          Quiero el curso <ArrowRight size={16} strokeWidth={2.2} />
        </a>
      </section>

      {/* -------- Qué incluye -------- */}
      <section className="ld-section">
        <h2>Qué incluye</h2>
        <div className="ld-grid-4">
          <div className="ld-feature">
            <FileText size={20} strokeWidth={2} />
            <span>37 lecciones de lectura, práctica y video</span>
          </div>
          <div className="ld-feature">
            <PlayCircle size={20} strokeWidth={2} />
            <span>Videos explicativos por módulo</span>
          </div>
          <div className="ld-feature">
            <HelpCircle size={20} strokeWidth={2} />
            <span>Cuestionarios de autoevaluación</span>
          </div>
          <div className="ld-feature">
            <ListChecks size={20} strokeWidth={2} />
            <span>Listas de chequeo para tus propios trabajos</span>
          </div>
          <div className="ld-feature">
            <PenSquare size={20} strokeWidth={2} />
            <span>Actividades prácticas, en línea o para descargar</span>
          </div>
          <div className="ld-feature">
            <CheckCircle2 size={20} strokeWidth={2} />
            <span>Tu progreso se guarda automáticamente</span>
          </div>
        </div>

        <div className="ld-modules">
          {modules.map((m, i) => (
            <div className="ld-module-chip" key={m}>
              <span className="ld-module-num">{i + 1}</span>
              {m}
            </div>
          ))}
        </div>
      </section>

      {/* -------- Cómo pagar -------- */}
      <section className="ld-section ld-section-alt" id="pagar">
        <h2>Cómo obtener acceso</h2>
        <p className="ld-section-sub">
          Tres pasos simples. No necesitas tarjeta de crédito internacional.
        </p>

        <div className="ld-steps">
          <div className="ld-step">
            <span className="ld-step-num">1</span>
            <div>
              <strong>Paga por QR o transferencia</strong>
              <p>Escanea el código o transfiere el monto a la cuenta indicada abajo.</p>
            </div>
          </div>
          <div className="ld-step">
            <span className="ld-step-num">2</span>
            <div>
              <strong>Envía tu comprobante por WhatsApp</strong>
              <p>Con una captura de pantalla es suficiente.</p>
            </div>
          </div>
          <div className="ld-step">
            <span className="ld-step-num">3</span>
            <div>
              <strong>Recibe tu código de acceso</strong>
              <p>Te lo enviamos por WhatsApp apenas confirmamos el pago.</p>
            </div>
          </div>
        </div>

        <div className="ld-pay-grid">
          <div className="ld-pay-card">
            <div className="ld-pay-card-tag">
              <QrCode size={16} strokeWidth={2} /> PAGO POR QR
            </div>
            <div className="ld-qr-box">
              <img src="/qr.png" alt="QR de pago Banco Ganadero" className="ld-qr-img" />
            </div>
          </div>

          <div className="ld-pay-card">
            <div className="ld-pay-card-tag">
              <Landmark size={16} strokeWidth={2} /> TRANSFERENCIA BANCARIA
            </div>
            <ul className="ld-bank-list">
              <li><span>Banco</span><strong>{CONFIG.banco}</strong></li>
              <li><span>Titular</span><strong>{CONFIG.titular}</strong></li>
              <li><span>N.º de cuenta</span><strong>{CONFIG.numeroCuenta}</strong></li>
              <li><span>Tipo de cuenta</span><strong>{CONFIG.tipoCuenta}</strong></li>
            </ul>
          </div>
        </div>

        <a href={whatsappHref} target="_blank" rel="noreferrer" className="ld-btn-whatsapp">
          <MessageCircle size={18} strokeWidth={2} />
          Enviar mi comprobante por WhatsApp
        </a>
        <p className="ld-alt-contact">
          ¿Prefieres correo? Escríbeme a <strong>{CONFIG.correoContacto}</strong>
        </p>
      </section>

      {/* -------- Código de acceso -------- */}
      <section className="ld-section ld-unlock" id="acceso">
        <div className="ld-unlock-icon">
          <Lock size={22} strokeWidth={2} />
        </div>
        <h2>¿Ya tienes tu código de acceso?</h2>
        <p className="ld-section-sub">Ingrésalo aquí para entrar directo al curso.</p>
        <form className="ld-unlock-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={code}
            placeholder="Escribe tu código de acceso"
            onChange={(e) => {
              setCode(e.target.value);
              setError(false);
            }}
          />
          <button type="submit" className="ld-btn-primary">
            Ingresar <ArrowRight size={16} strokeWidth={2.2} />
          </button>
        </form>
        {error && <p className="ld-error">Ese código no es válido. Revisa mayúsculas y espacios.</p>}
      </section>

      <footer className="ld-footer">
        <CheckCircle2 size={14} strokeWidth={2} />
        <span>Msc. Betty Meneses Ayllón</span>
      </footer>
    </div>
  );
}

function Styles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&family=Inter:wght@400;500;600;700&display=swap');

      .ld-root {
        font-family: 'Inter', sans-serif;
        color: ${TEXT};
        background: ${PAPER};
        min-height: 100%;
        width: 100%;
      }
      .ld-root * { box-sizing: border-box; }

      .ld-header {
        display: flex; align-items: center; gap: 10px;
        padding: 20px 8%;
        background: ${INK}; color: ${PAPER};
      }
      .ld-brand { font-family: 'Source Serif 4', serif; font-weight: 700; font-size: 18px; }
      .ld-brand-sub { font-size: 11.5px; color: #CFE0DD; margin-top: 1px; }

      .ld-hero {
        padding: 64px 8% 48px 8%;
        text-align: center;
        max-width: 780px;
        margin: 0 auto;
      }
      .ld-kicker {
        display: inline-block; font-size: 12px; font-weight: 700; letter-spacing: 1.5px;
        color: ${GOLD}; text-transform: uppercase; margin-bottom: 14px;
      }
      .ld-hero h1 {
        font-family: 'Source Serif 4', serif; font-weight: 700; font-size: 36px;
        color: ${INK}; line-height: 1.2; margin: 0 0 16px 0;
      }
      .ld-hero-sub { font-size: 16px; color: ${TEXT_SOFT}; line-height: 1.6; margin: 0 0 26px 0; }
      .ld-price-badge {
        display: inline-flex; flex-direction: column; align-items: center; gap: 2px;
        background: ${PAPER_CARD}; border: 1px solid ${LINE}; border-radius: 12px;
        padding: 14px 28px; margin-bottom: 26px;
      }
      .ld-price-amount { font-family: 'Source Serif 4', serif; font-size: 26px; font-weight: 700; color: ${INK}; }
      .ld-price-alt { font-size: 12.5px; color: ${TEXT_SOFT}; }

      .ld-btn-primary {
        display: inline-flex; align-items: center; gap: 8px;
        background: ${INK}; color: ${PAPER}; text-decoration: none;
        border: none; border-radius: 8px; padding: 13px 26px;
        font-size: 15px; font-weight: 600; cursor: pointer;
      }
      .ld-btn-primary:hover { background: ${INK_SOFT}; }

      .ld-section { padding: 48px 8%; max-width: 900px; margin: 0 auto; }
      .ld-section h2 {
        font-family: 'Source Serif 4', serif; font-size: 26px; color: ${INK};
        text-align: center; margin: 0 0 8px 0;
      }
      .ld-section-sub { text-align: center; color: ${TEXT_SOFT}; margin: 0 0 30px 0; font-size: 14.5px; }

      .ld-grid-4 {
        display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin: 30px 0 34px 0;
      }
      .ld-feature {
        display: flex; align-items: center; gap: 10px;
        background: ${PAPER_CARD}; border: 1px solid ${LINE}; border-radius: 10px;
        padding: 14px 16px; font-size: 14px; color: ${TEXT};
      }
      .ld-feature svg { color: ${GOLD}; flex-shrink: 0; }

      .ld-modules { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; }
      .ld-module-chip {
        display: flex; align-items: center; gap: 8px;
        background: ${PAPER_CARD}; border: 1px solid ${LINE}; border-radius: 999px;
        padding: 8px 16px; font-size: 13px; color: ${TEXT};
      }
      .ld-module-num {
        width: 20px; height: 20px; border-radius: 50%; background: ${INK}; color: ${PAPER};
        display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700;
      }

      .ld-section-alt { background: ${PAPER_CARD}; border-top: 1px solid ${LINE}; border-bottom: 1px solid ${LINE}; max-width: none; }
      .ld-section-alt > * { max-width: 900px; margin-left: auto; margin-right: auto; }

      .ld-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-bottom: 36px; }
      .ld-step { display: flex; gap: 12px; }
      .ld-step-num {
        width: 30px; height: 30px; border-radius: 50%; background: ${GOLD}; color: ${INK};
        display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0;
      }
      .ld-step strong { display: block; font-size: 14.5px; color: ${INK}; margin-bottom: 3px; }
      .ld-step p { margin: 0; font-size: 13px; color: ${TEXT_SOFT}; line-height: 1.4; }

      .ld-pay-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 26px; }
      .ld-pay-card { background: ${PAPER}; border: 1px solid ${LINE}; border-radius: 12px; padding: 20px; }
      .ld-pay-card-tag {
        display: flex; align-items: center; gap: 6px;
        font-size: 11px; font-weight: 700; letter-spacing: 0.8px; color: ${WINE};
        margin-bottom: 14px;
      }
      .ld-qr-box {
        display: flex; flex-direction: column; align-items: center; gap: 10px;
        border: 1px dashed ${LINE}; border-radius: 8px; padding: 16px; text-align: center;
        color: ${TEXT_SOFT}; font-size: 12px;
      }
      .ld-qr-img {
        width: 100%; max-width: 220px; border-radius: 8px; display: block;
      }
      .ld-bank-list { list-style: none; margin: 0; padding: 0; }
      .ld-bank-list li {
        display: flex; justify-content: space-between; padding: 7px 0;
        border-bottom: 1px solid ${LINE}; font-size: 13.5px;
      }
      .ld-bank-list li:last-child { border-bottom: none; }
      .ld-bank-list span { color: ${TEXT_SOFT}; }
      .ld-bank-list strong { color: ${INK}; }

      .ld-btn-whatsapp {
        display: flex; align-items: center; justify-content: center; gap: 8px;
        background: ${SAGE}; color: #fff; text-decoration: none;
        border-radius: 8px; padding: 14px; font-size: 15px; font-weight: 600;
        max-width: 420px; margin: 0 auto;
      }
      .ld-alt-contact { text-align: center; font-size: 12.5px; color: ${TEXT_SOFT}; margin-top: 12px; }

      .ld-unlock { text-align: center; }
      .ld-unlock-icon {
        width: 46px; height: 46px; border-radius: 50%; background: ${INK}; color: ${PAPER};
        display: flex; align-items: center; justify-content: center; margin: 0 auto 14px auto;
      }
      .ld-unlock-form { display: flex; gap: 10px; justify-content: center; max-width: 420px; margin: 0 auto; }
      .ld-unlock-form input {
        flex: 1; border: 1px solid ${LINE}; border-radius: 8px; padding: 12px 14px;
        font-size: 14px; background: ${PAPER_CARD}; color: ${TEXT};
      }
      .ld-error { color: ${WINE}; font-size: 13px; margin-top: 10px; }

      .ld-footer {
        display: flex; align-items: center; justify-content: center; gap: 8px;
        padding: 22px 8% 34px 8%; color: ${TEXT_SOFT}; font-size: 12.5px;
      }
      .ld-footer svg { color: ${SAGE}; }

      @media (max-width: 640px) {
        .ld-hero h1 { font-size: 27px; }
        .ld-grid-4 { grid-template-columns: 1fr; }
        .ld-steps { grid-template-columns: 1fr; }
        .ld-pay-grid { grid-template-columns: 1fr; }
        .ld-unlock-form { flex-direction: column; }
      }
    `}</style>
  );
}
