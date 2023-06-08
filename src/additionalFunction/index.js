export function resetStorage() {
  if (!localStorage.getItem("favoriteItems")) {
    localStorage.setItem("favoriteItems", "[]");
  }
}

