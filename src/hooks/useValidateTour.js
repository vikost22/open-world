export function useValidateTour(tour) {
    if (!tour.name) return false;
    if (!tour.description) return false;
    if (!tour.reviewsCount) return false;
    if (!tour.imageShort) return false;
    if (!tour.imageTour) return false;
    if (!tour.tourId) return false;
    if (!tour.price) return false;
    if (!tour.background) return false;
    if (!tour.title) return false;
    if (!tour.aboutText) return false;
    if (!tour.aboutImg) return false;
    if (!tour.locationTitle) return false;
    if (!tour.locations) return false;
    if (!tour.locationsPhoto) return false;
    if (!tour.tripDays) return false;
    if (!tour.tripDaysImg) return false;
    if (!tour.equipment) return false;
    if (!tour.equipmentPhoto) return false;
    if (!tour.reviews) return false;
    if (!tour.reviewersPhoto) return false;
    if (!tour.bookTourImg) return false;
    return true;
  }
  