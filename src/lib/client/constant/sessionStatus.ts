type Status = "authenticated" | "loading" | "unauthenticated"

export const authenticated = (status: Status) => status === "authenticated"

export const loading = (status: Status) => status === "loading"

export const unauthenticated = (status: Status) => status === "unauthenticated"
