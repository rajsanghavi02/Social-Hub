export function getSocialHubPhone(): string {
  return import.meta.env.VITE_SOCIAL_HUB_PHONE || "";
}

export function getSocialHubPhoneHref(phoneNumber: string): string {
  return phoneNumber ? `tel:${phoneNumber.replace(/\s/g, "")}` : "#";
}
