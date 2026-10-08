import React from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Calendar,
  Users,
  Navigation,
  ArrowRight,
  Instagram,
} from 'lucide-react';
import { BUSINESS_INFO, OPENING_HOURS } from '../data/restaurantData';

export interface ReservationDraft {
  date: string;
  time: string;
  guests: string;
  seating: string;
}

interface ReservationAndLocationProps {
  draft: ReservationDraft;
  onChangeDraft: (updated: ReservationDraft) => void;
  onSubmitReservationRequest: (e: React.FormEvent) => void;
  onOpenReservationModal: () => void;
}

export const ReservationAndLocation: React.FC<ReservationAndLocationProps> = ({
  draft,
  onChangeDraft,
  onSubmitReservationRequest,
  onOpenReservationModal,
}) => {
  const lunchTimes = ['12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00'];
  const dinnerTimes = ['18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'];

  return (
    <>
      {/* 18. RESERVATION SECTION */}
      <section
        id="reservas"
        className="py-16 sm:py-24 lg:py-28 bg-[#FAF8F5] border-t border-[#E6E0D6]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Editorial Invitation */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-3 text-xs font-medium tracking-wider text-[#C85A32]">
                <span className="w-6 h-[1.5px] bg-[#C85A32]" aria-hidden="true" />
                <span>RESERVACIONES</span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#181615] leading-[1.1]">
                Reserva tu mesa.
              </h2>

              <p className="text-base sm:text-lg text-[#4A4540] leading-relaxed">
                Planifica tu próxima visita a Sach’a Yuntas.
              </p>

              <div className="pt-2 space-y-3 text-sm text-[#5C5650] border-t border-[#E6E0D6]">
                <p>
                  Selecciona la fecha, horario y número de comensales para
                  preparar tu solicitud de reserva y comunicarte directamente con
                  nuestro equipo en El Bosque Boulevard.
                </p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-[#181615]">
                  <span>Almuerzo: 12:00 – 16:00</span>
                  <span aria-hidden="true">·</span>
                  <span>Cena (Lun–Sáb): 18:30 – 22:30</span>
                </div>
              </div>
            </div>

            {/* Right: Reservation UI Card */}
            <div className="lg:col-span-7">
              <form
                onSubmit={onSubmitReservationRequest}
                className="bg-white rounded-2xl border border-[#E6E0D6] p-6 sm:p-8 lg:p-10 shadow-[0_16px_40px_rgba(24,22,21,0.06)] space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Fecha */}
                  <div className="space-y-2">
                    <label
                      htmlFor="res-date"
                      className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4A4540]"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#C85A32]" />
                      <span>Fecha</span>
                    </label>
                    <input
                      id="res-date"
                      type="date"
                      required
                      value={draft.date}
                      onChange={(e) =>
                        onChangeDraft({ ...draft, date: e.target.value })
                      }
                      className="w-full px-4 py-3 text-sm text-[#181615] bg-[#FAF8F5] border border-[#D6CFC5] rounded-lg focus:outline-none focus:border-[#C85A32] tabular-nums"
                    />
                  </div>

                  {/* Hora */}
                  <div className="space-y-2">
                    <label
                      htmlFor="res-time"
                      className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4A4540]"
                    >
                      <Clock className="w-3.5 h-3.5 text-[#C85A32]" />
                      <span>Hora</span>
                    </label>
                    <select
                      id="res-time"
                      value={draft.time}
                      onChange={(e) =>
                        onChangeDraft({ ...draft, time: e.target.value })
                      }
                      className="w-full px-4 py-3 text-sm text-[#181615] bg-[#FAF8F5] border border-[#D6CFC5] rounded-lg focus:outline-none focus:border-[#C85A32] tabular-nums"
                    >
                      <optgroup label="Almuerzo (Lun – Dom)">
                        {lunchTimes.map((t) => (
                          <option key={t} value={t}>
                            {t} hrs (Almuerzo)
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Cena (Lun – Sáb)">
                        {dinnerTimes.map((t) => (
                          <option key={t} value={t}>
                            {t} hrs (Cena)
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  {/* Número de personas */}
                  <div className="space-y-2">
                    <label
                      htmlFor="res-guests"
                      className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4A4540]"
                    >
                      <Users className="w-3.5 h-3.5 text-[#C85A32]" />
                      <span>Número de personas</span>
                    </label>
                    <select
                      id="res-guests"
                      value={draft.guests}
                      onChange={(e) =>
                        onChangeDraft({ ...draft, guests: e.target.value })
                      }
                      className="w-full px-4 py-3 text-sm text-[#181615] bg-[#FAF8F5] border border-[#D6CFC5] rounded-lg focus:outline-none focus:border-[#C85A32]"
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

                  {/* Preferencia de ubicación */}
                  <div className="space-y-2">
                    <label
                      htmlFor="res-seating"
                      className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4A4540]"
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
                      <span>Preferencia de mesa</span>
                    </label>
                    <select
                      id="res-seating"
                      value={draft.seating}
                      onChange={(e) =>
                        onChangeDraft({ ...draft, seating: e.target.value })
                      }
                      className="w-full px-4 py-3 text-sm text-[#181615] bg-[#FAF8F5] border border-[#D6CFC5] rounded-lg focus:outline-none focus:border-[#C85A32]"
                    >
                      <option value="Salón interior">Salón interior</option>
                      <option value="Mesas al aire libre">
                        Mesas al aire libre
                      </option>
                      <option value="Sin preferencia">Sin preferencia</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base font-medium text-white bg-[#C85A32] hover:bg-[#B04B25] rounded-lg transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85A32]"
                  >
                    Solicitar reserva
                  </button>

                  <a
                    href={BUSINESS_INFO.phone.tel}
                    className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-[#4A4540] hover:text-[#C85A32] transition-colors tabular-nums"
                  >
                    <Phone className="w-4 h-4 text-[#C85A32]" />
                    <span>Atención directa: {BUSINESS_INFO.phone.display}</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 19. LOCATION SECTION & 20. OPENING HOURS */}
      <section
        id="contacto"
        className="py-16 sm:py-24 lg:py-28 bg-white border-t border-[#E6E0D6]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3 mb-12 sm:mb-14">
            <div className="flex items-center gap-3 text-xs font-medium tracking-wider text-[#C85A32]">
              <span className="w-6 h-[1.5px] bg-[#C85A32]" aria-hidden="true" />
              <span>UBICACIÓN Y HORARIOS</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#181615]">
              Visítanos en La Paz.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Location Card & Map */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-[#FAF8F5] rounded-2xl border border-[#E6E0D6] p-6 sm:p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="font-editorial text-3xl font-semibold text-[#181615]">
                    {BUSINESS_INFO.name}
                  </h3>
                  <p className="text-xs font-medium text-[#C85A32] tracking-wider uppercase">
                    {BUSINESS_INFO.concept} · Cocina Peruana, Mariscos y Sushi
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-[#E6E0D6]">
                  <div className="space-y-1.5">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#5C5650]">
                      Dirección
                    </div>
                    <address className="not-italic text-sm sm:text-base text-[#181615] leading-relaxed">
                      Calle 15 de Calacoto
                      <br />
                      El Bosque Boulevard
                      <br />
                      La Paz, Bolivia
                    </address>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#5C5650]">
                      Teléfono
                    </div>
                    <a
                      href={BUSINESS_INFO.phone.tel}
                      className="inline-block text-base sm:text-lg font-medium text-[#181615] hover:text-[#C85A32] transition-colors tabular-nums"
                    >
                      {BUSINESS_INFO.phone.display}
                    </a>
                    <p className="text-xs text-[#5C5650]">
                      Reservaciones, consultas y pedidos para llevar
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <a
                    href={BUSINESS_INFO.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#C85A32] hover:bg-[#B04B25] rounded-lg transition-colors whitespace-nowrap"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Cómo llegar</span>
                  </a>

                  <a
                    href={BUSINESS_INFO.phone.tel}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-[#181615] bg-white hover:bg-[#EAE3DA]/60 border border-[#D6CFC5] rounded-lg transition-colors whitespace-nowrap tabular-nums"
                  >
                    <Phone className="w-4 h-4 text-[#C85A32]" />
                    <span>Llamar</span>
                  </a>
                </div>
              </div>

              {/* Embedded Address Map */}
              <div className="rounded-2xl overflow-hidden border border-[#E6E0D6] bg-[#F3EFEA] h-[280px] sm:h-[320px]">
                <iframe
                  title="Ubicación de Sach’a Yuntas en Calle 15 de Calacoto, El Bosque Boulevard, La Paz, Bolivia"
                  src="https://www.google.com/maps?q=Calle+15+de+Calacoto,+El+Bosque+Boulevard,+La+Paz,+Bolivia&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* 20. OPENING HOURS CARD */}
            <div className="lg:col-span-5">
              <div className="bg-[#FAF8F5] rounded-2xl border border-[#E6E0D6] p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between border-b border-[#E6E0D6] pb-4">
                  <div>
                    <h3 className="font-editorial text-3xl font-semibold text-[#181615]">
                      Horarios
                    </h3>
                    <p className="text-xs text-[#5C5650] mt-0.5">
                      Almuerzo y cena en El Bosque Boulevard
                    </p>
                  </div>
                  <Clock className="w-5 h-5 text-[#C85A32]" />
                </div>

                <div className="divide-y divide-[#E6E0D6]">
                  {OPENING_HOURS.map((item) => (
                    <div
                      key={item.day}
                      className="py-3.5 flex items-start justify-between gap-4 text-sm"
                    >
                      <span className="font-medium text-[#181615]">
                        {item.day}
                      </span>
                      <div className="text-right tabular-nums text-[#4A4540] space-y-0.5">
                        <div>{item.lunch}</div>
                        {item.dinner ? (
                          <div>{item.dinner}</div>
                        ) : (
                          <div className="text-xs text-[#7A7269]">
                            Solo turno almuerzo
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-[#E6E0D6] text-xs text-[#5C5650] flex items-center justify-between">
                  <span>Turnos: Almuerzo · Cena · Bebidas</span>
                  <span>Calacoto, La Paz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 23. FINAL CTA SECTION */}
      <section className="py-16 sm:py-24 bg-[#1F241F] text-white border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-3 text-xs font-medium tracking-wider text-[#E88D67]">
            <span className="w-5 h-[1.5px] bg-[#E88D67]" aria-hidden="true" />
            <span>SACH’A YUNTAS · LA PAZ</span>
            <span className="w-5 h-[1.5px] bg-[#E88D67]" aria-hidden="true" />
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-[54px] font-semibold text-white leading-[1.1]">
            Tu próxima experiencia gastronómica comienza aquí.
          </h2>

          <p className="text-base sm:text-lg text-[#D5CEC4] max-w-xl mx-auto">
            Reserva tu mesa y descubre Sach’a Yuntas en La Paz.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenReservationModal}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm sm:text-base font-medium text-white bg-[#C85A32] hover:bg-[#B04B25] rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Reservar mesa</span>
            </button>

            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm sm:text-base font-medium text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg transition-colors whitespace-nowrap"
            >
              <span>Ver menú</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 24. FOOTER */}
      <footer className="bg-[#181615] text-[#D5CEC4] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-4">
              <a
                href="#inicio"
                className="font-editorial text-3xl font-semibold text-white inline-block"
              >
                {BUSINESS_INFO.name}
              </a>
              <p className="text-sm text-[#B8B0A4] leading-relaxed max-w-sm">
                Cocina peruana, mariscos, sushi y una experiencia gastronómica
                en La Paz.
              </p>
              <div className="pt-1 flex items-center gap-3">
                <a
                  href="#redes"
                  aria-label="Instagram de Sach’a Yuntas"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#C85A32] text-white flex items-center justify-center transition-colors border border-white/10"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Navigation Column */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
                Navegación
              </h3>
              <ul className="space-y-2.5 text-sm">
                {[
                  { label: 'Inicio', href: '#inicio' },
                  { label: 'Nosotros', href: '#nosotros' },
                  { label: 'Menú', href: '#menu' },
                  { label: 'Experiencia', href: '#experiencia' },
                  { label: 'Galería', href: '#galeria' },
                  { label: 'Contacto', href: '#contacto' },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[#B8B0A4] hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
                Contacto
              </h3>
              <address className="not-italic text-sm text-[#B8B0A4] space-y-2">
                <p>
                  Calle 15 de Calacoto
                  <br />
                  El Bosque Boulevard
                  <br />
                  La Paz, Bolivia
                </p>
                <p className="pt-1">
                  <a
                    href={BUSINESS_INFO.phone.tel}
                    className="text-white hover:text-[#E88D67] transition-colors font-medium tabular-nums"
                  >
                    {BUSINESS_INFO.phone.display}
                  </a>
                </p>
              </address>
            </div>

            {/* Opening Hours Column */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
                Horarios
              </h3>
              <div className="text-sm text-[#B8B0A4] space-y-2 tabular-nums">
                <div>
                  <span className="text-white font-medium block">
                    Lunes a Sábado
                  </span>
                  <span>12:00 – 16:00 · 18:30 – 22:30</span>
                </div>
                <div>
                  <span className="text-white font-medium block">Domingo</span>
                  <span>12:00 – 16:00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9C9488]">
            <p>© 2026 Sach’a Yuntas. Todos los derechos reservados.</p>
            <p>Calle 15 de Calacoto, El Bosque Boulevard · La Paz, Bolivia</p>
          </div>
        </div>
      </footer>
    </>
  );
};
