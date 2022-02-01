export function windowOpener(url: string) {
  // Tabnabbing 공격 방지
  window.open(url, "_blank", "noopener,noreferrer")
}
