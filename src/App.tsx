/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutAndFeatures } from './components/AboutAndFeatures';
import { PopularAndMenuSection } from './components/PopularAndMenuSection';
import { CulinaryShowcases } from './components/CulinaryShowcases';
import { ExperienceAndGallery } from './components/ExperienceAndGallery';
import {
  ReservationAndLocation,
  ReservationDraft,
} from './components/ReservationAndLocation';
import {
  ReservationModal,
  DishDetailModal,
  GalleryLightbox,
} from './components/Modals';
import { DishItem, GalleryItem } from './data/restaurantData';

export default function App() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDate = tomorrow.toISOString().split('T')[0];

  const [reservationDraft, setReservationDraft] = useState<ReservationDraft>({
    date: defaultDate,
    time: '13:00',
    guests: '2 personas',
    seating: 'Salón interior',
  });

  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<DishItem | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] =
    useState<GalleryItem | null>(null);

  const handleOpenReservationModal = () => {
    setIsReservationModalOpen(true);
  };

  const handleSubmitReservationForm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsReservationModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#181615] overflow-x-hidden">
      <Header onOpenReservationModal={handleOpenReservationModal} />

      <main className="flex-1">
        <HeroSection onOpenReservationModal={handleOpenReservationModal} />

        <AboutAndFeatures />

        <PopularAndMenuSection
          onSelectDish={(dish) => setSelectedDish(dish)}
        />

        <CulinaryShowcases />

        <ExperienceAndGallery
          onOpenReservationModal={handleOpenReservationModal}
          onSelectGalleryItem={(item) => setSelectedGalleryItem(item)}
        />

        <ReservationAndLocation
          draft={reservationDraft}
          onChangeDraft={setReservationDraft}
          onSubmitReservationRequest={handleSubmitReservationForm}
          onOpenReservationModal={handleOpenReservationModal}
        />
      </main>

      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
        draft={reservationDraft}
        onChangeDraft={setReservationDraft}
      />

      <DishDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onOpenReservation={handleOpenReservationModal}
      />

      <GalleryLightbox
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
        onSelect={(item) => setSelectedGalleryItem(item)}
      />
    </div>
  );
}

