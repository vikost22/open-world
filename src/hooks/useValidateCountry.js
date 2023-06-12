export function useValidateCountry(country) {
  if (!country) return false;
  if (!country.countryId) return false;
  if (!country.name) return false;
  if (!country.countryDescription) return false;
  if (!country.backgroundImage) return false;
  if (!country.backgroundImagePage) return false;
  if (!country.backgroundImageVideo) return false;
  if (!country.videoLink) return false;
  if (!country.bestTours) return false;
  if (!country.tours) return false;
  if (!country.reasonsImages) return false;
  if (!country.reasons) return false;
  return true;
}
