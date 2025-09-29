import { LuDownload } from 'react-icons/lu';
import { PiBroomBold } from 'react-icons/pi';
import confetti from 'canvas-confetti';
import html2canvas from 'html2canvas';
import Swal from 'sweetalert2';

import './cta-invitation.css';
import { useRef, useState } from 'react';

export const CtaInvitation = () => {
  const [formState, setformState] = useState({
    name: '',
    message: '',
  });
  const { name, message } = formState;

  const exportRef = useRef(null);
  // const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonDownload = async () => {
    if (name.trim().length < 3) {
      Swal.fire({
        title: '¡Nombre incorrecto!',
        text: 'Introduce un nombre mayor o igual a 3 letras',
        icon: 'warning',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#3085d6',
        width: '50rem',
        customClass: {
          title: 'swal-title',
          htmlContainer: 'swal-text',
          confirmButton: 'my-confirm-btn',
        },
      });
      return;
    }
    // canvas
    if (!exportRef.current) return;
    const canvas = await html2canvas(exportRef.current, {
      width: 1577, // ancho final en px
      height: 1350, // alto final en px
      scale: 1, // evita duplicar tamaños (usa los que definimos arriba)
    });
    const link = document.createElement('a');
    link.download = `Invitacion-especial-para-${name.split(' ').join('-')}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();

    //alert
    Swal.fire({
      title: '¡Invitación descargada!',
      text: 'Revisalo en tu dispositivo. No olvides compartirlo.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#3085d6',
      width: '50rem',
      customClass: {
        title: 'swal-title',
        htmlContainer: 'swal-text',
        confirmButton: 'my-confirm-btn',
      },
    });

    // animation
    confetti({
      particleCount: 250,
      spread: 170,
      origin: { y: 0.7 },
      zIndex: 9000,
    });
  };

  return (
    <section id="cta-invitacion" className="cta-invitacion">
      <div className="container invitation-container">
        <div className="invitation-img-box">
          <img
            className="invitation-img"
            src="/cta/invitacion.png"
            alt="Invitacion de la conferencia general con los horarios"
          />
          <p className="invitation-name">{name}</p>
          <p className="invitation-msg">{message}</p>
        </div>
        <div className="invitation-box">
          <h2 className="invitation-title">Invitación para alguien especial</h2>
          <p className="invitation-description">
            Escribe un nombre, un mensaje especial y descarga una invitación
            personalizada.
          </p>
          <input
            className="input-name"
            type="text"
            name="name"
            id="name"
            placeholder="Tu nombre, de un amigo o familiar"
            autoComplete="off"
            value={name}
            onChange={(e) =>
              setformState({ ...formState, name: e.target.value })
            }
          />
          <textarea
            className="input-msg"
            name="personal-msg"
            id="personal-msg"
            placeholder="Tu mensaje personal. Unas palabras de ánimo o testimonio…"
            value={message}
            onChange={(e) =>
              setformState({ ...formState, message: e.target.value })
            }
          ></textarea>
          <div className="invitation-actions">
            <button
              onClick={handleButtonDownload}
              className="invitation-btn-download"
            >
              <LuDownload className="inv-icon-download" />
              <span>Descargar invitación</span>
            </button>
            <button
              onClick={() => setformState({ message: '', name: '' })}
              className="invitation-btn-clean"
            >
              <PiBroomBold className="inv-icon-clean" />
              <span>Limpiar</span>
            </button>
          </div>
        </div>
      </div>
      {/* container oculto */}
      <div
        ref={exportRef}
        className="container-invitation-hidden"
        style={{
          width: '1577px',
          height: '1350px',
          position: 'absolute',
          left: '-9999px', // fuera de pantalla
          top: 0,
          backgroundImage: "url('/cta/invitacion.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span className="cta-image-name-2">{name}</span>
        <span className="cta-image-msg-2">{message}</span>
      </div>
    </section>
  );
};
