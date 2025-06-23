import React from "react";

export function Footer() {
  return (
    <footer className="py-6 px-6 text-center text-sm text-gray-500">
      <p>© {new Date().getFullYear()} Den Kloka Ugglan Lyssnar. Alla rättigheter förbehållna.</p>
      <p>Kontakt: sokandetefterlivspusslet@gmail.com</p>
    </footer>
  );
}
