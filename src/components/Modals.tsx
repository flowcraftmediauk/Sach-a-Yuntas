import React, { useEffect } from 'react';
import {
  X,
  Phone,
  Calendar,
  Clock,
  Users,
  MapPin,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from 'lucide-react';
import {
  BUSINESS_INFO,
  DishItem,
  GalleryItem,
  GALLERY_ITEMS,
} from '../data/restaurantData';
import { ReservationDraft } from './ReservationAndLocation';
import { ResilientImage } from './ResilientImage';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  draft: ReservationDraft;
  onChangeDraft: (updated: ReservationDraft) => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  draft,
  onChangeDraft,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const whatsappMessage = encodeURIComponent(
    `Hola Sach’a Yuntas, me gustaría consultar disponibilidad para una reserva de mesa:\n• Fecha: ${draft.date}\n• Hora: ${draft.time} hrs\n• Personas: ${draft.guests}\n• Preferencia: ${draft.seating}`
  );
  const whatsappUrl = `https://wa.me/59177748201?text=${whatsappMessage}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-reservation-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl border border-[#E6E0D6] max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-[#E6E0D6] pb-4">
          <div>
            <div className="text-xs font-medium tracking-wider text-[#C85A32] uppercase">
              {BUSINESS_INFO.name} · La Paz
            </div>
            <h3
              id="modal-reservation-title"
              className="font-editorial text-3xl font-semibold text-[#181615] mt-0.5"
            >
              Solicitar reserva de mesa
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar ventana de reserva"
            className="w-9 h-9 rounded-lg text-[#5C5650] hover:text-[#181615] hover:bg-[#FAF8F5] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Editable summary inputs inside modal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label
              htmlFor="modal-res-date"
              className="flex items-center gap-1.5 text-xs font-medium text-[#5C5650]"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>Fecha</span>
            </label>
            <input
              id="modal-res-date"
              type="date"
              value={draft.date}
              onChange={(e) =>
                onChangeDraft({ ...draft, date: e.target.value })
              }
              className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#D6CFC5] rounded-lg tabular-nums"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="modal-res-time"
              className="flex items-center gap-1.5 text-xs font-medium text-[#5C5650]"
            >
              <Clock className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>Hora</span>
            </label>
            <select
              id="modal-res-time"
              value={draft.time}
              onChange={(e) =>
                onChangeDraft({ ...draft, time: e.target.value })
              }
              className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#D6CFC5] rounded-lg tabular-nums"
            >
              <optgroup label="Almuerzo (12:00 – 16:00)">
                {['12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00'].map(
                  (t) => (
                    <option key={t} value={t}>
                      {t} hrs
                    </option>
                  )
                )}
              </optgroup>
              <optgroup label="Cena (Lun–Sáb 18:30 – 22:30)">
                {['18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'].map(
                  (t) => (
                    <option key={t} value={t}>
                      {t} hrs
                    </option>
                  )
                )}
              </optgroup>
            </select>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="modal-res-guests"
              className="flex items-center gap-1.5 text-xs font-medium text-[#5C5650]"
            >
              <Users className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>Personas</span>
            </label>
            <select
              id="modal-res-guests"
              value={draft.guests}
              onChange={(e) =>
                onChangeDraft({ ...draft, guests: e.target.value })
              }
              className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#D6CFC5] rounded-lg"
            >
              {[
                '1 persona',
                '2 personas',
                '3 personas',
                '4 personas',
                '5 personas',
                '6 personas',
                '7 personas',
                '8+ personas (Grupo)',
              ].map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="modal-res-seating"
              className="flex items-center gap-1.5 text-xs font-medium text-[#5C5650]"
            >
              <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>Espacio</span>
            </label>
            <select
              id="modal-res-seating"
              value={draft.seating}
              onChange={(e) =>
                onChangeDraft({ ...draft, seating: e.target.value })
              }
              className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#D6CFC5] rounded-lg"
            >
              <option value="Salón interior">Salón interior</option>
              <option value="Mesas al aire libre">Mesas al aire libre</option>
              <option value="Sin preferencia">Sin preferencia</option>
            </select>
          </div>
        </div>

        <div className="bg-[#FAF8F5] rounded-xl p-4 border border-[#E6E0D6] text-xs text-[#4A4540] space-y-1.5">
          <div className="font-semibold text-[#181615]">
            Confirmación directa con el restaurante
          </div>
          <p>
            Para garantizar disponibilidad de tu mesa en Calle 15 de Calacoto,
            El Bosque Boulevard, comunícate directamente con nosotros por
            teléfono o WhatsApp con los datos seleccionados:
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={BUSINESS_INFO.phone.tel}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-white bg-[#C85A32] hover:bg-[#B04B25] rounded-lg transition-colors tabular-nums"
          >
            <Phone className="w-4 h-4" />
            <span>Llamar al {BUSINESS_INFO.phone.display}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-[#181615] bg-[#F3EFEA] hover:bg-[#E6E0D6] border border-[#D6CFC5] rounded-lg transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#C85A32]" />
            <span>Enviar por WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

interface DishDetailModalProps {
  dish: DishItem | null;
  onClose: () => void;
  onOpenReservation: () => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  dish,
  onClose,
  onOpenReservation,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (dish) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [dish, onClose]);

  if (!dish) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-dish-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl border border-[#E6E0D6] max-w-lg w-full overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-16/10 bg-[#F3EFEA]">
          <ResilientImage
            src={dish.image}
            alt={dish.alt}
            className="w-full h-full object-cover"
            containerClassName="w-full h-full"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar detalle del plato"
            className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-7 space-y-4">
          <div className="space-y-1">
            <div className="text-xs font-medium text-[#C85A32]">
              {dish.categoryLabel}
            </div>
            <h3
              id="modal-dish-title"
              className="font-editorial text-3xl font-semibold text-[#181615]"
            >
              {dish.name}
            </h3>
          </div>

          <p className="text-sm sm:text-base text-[#4A4540] leading-relaxed">
            {dish.description}
          </p>

          <p className="text-xs text-[#5C5650] bg-[#FAF8F5] p-3.5 rounded-lg border border-[#E6E0D6]">
            {dish.details}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenReservation();
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-white bg-[#C85A32] hover:bg-[#B04B25] rounded-lg transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Reservar mesa</span>
            </button>

            <a
              href={BUSINESS_INFO.phone.tel}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-[#181615] bg-[#FAF8F5] hover:bg-[#EAE3DA] border border-[#D6CFC5] rounded-lg transition-colors tabular-nums"
            >
              <Phone className="w-4 h-4 text-[#C85A32]" />
              <span>Consultar: {BUSINESS_INFO.phone.display}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

interface GalleryLightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  item,
  onClose,
  onSelect,
}) => {
  useEffect(() => {
    if (!item) return;
    const currentIndex = GALLERY_ITEMS.findIndex((g) => g.id === item.id);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        const next = GALLERY_ITEMS[(currentIndex + 1) % GALLERY_ITEMS.length];
        onSelect(next);
      }
      if (e.key === 'ArrowLeft') {
        const prev =
          GALLERY_ITEMS[
            (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
          ];
        onSelect(prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose, onSelect]);

  if (!item) return null;

  const currentIndex = GALLERY_ITEMS.findIndex((g) => g.id === item.id);
  const handlePrev = () => {
    const prev =
      GALLERY_ITEMS[
        (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
      ];
    onSelect(prev);
  };
  const handleNext = () => {
    const next = GALLERY_ITEMS[(currentIndex + 1) % GALLERY_ITEMS.length];
    onSelect(next);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Vista ampliada: ${item.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#181615] rounded-2xl overflow-hidden border border-white/15 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-16/10 bg-black flex items-center justify-center">
          <ResilientImage
            src={item.image}
            alt={item.alt}
            className="w-full h-full object-cover"
            containerClassName="w-full h-full"
          />

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar galería"
            className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-black/65 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={handlePrev}
            aria-label="Imagen anterior"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-black/65 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Siguiente imagen"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-black/65 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-white">
          <div className="space-y-1">
            <div className="text-xs font-medium text-[#E88D67]">
              {item.category} · {currentIndex + 1} / {GALLERY_ITEMS.length}
            </div>
            <h3 className="font-editorial text-2xl font-semibold">
              {item.title}
            </h3>
            <p className="text-sm text-[#D5CEC4]">{item.caption}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
