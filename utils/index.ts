export const customInputValidator = (sq: string) => {
    let isCity = /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/.test(sq)
    return isCity
}

export const getDailyDate = (dt: number, id: number) => {
    const date = new Date(dt * 1000)
    const weekday = date.toLocaleString(navigator.language, {
        weekday: "long",
    })
    const monthday = date.toLocaleString(navigator.language, {
        month: "short",
        day: "numeric",
    })
    return id === 0
        ? "Today, " + monthday
        : id === 1
        ? "Tomorrow, " + monthday
        : weekday + ", " + monthday
}
export const getCurrentDate = (dt: number) => {
    const date = new Date(dt * 1000)

    const monthday = date.toLocaleString(navigator.language, {
        month: "short",
        day: "numeric",
    })
    return monthday
}

export const degreesToCardinal = (degrees: number) => {
    degrees *= 10
    const caridnals = [
        "N",
        "NNE",
        "NE",
        "ENE",
        "E",
        "ESE",
        "SE",
        "SSE",
        "S",
        "SSW",
        "SW",
        "WSW",
        "W",
        "WNW",
        "NW",
        "NNW",
        "N",
    ]
    return caridnals[Math.round((degrees % 3600) / 225)]
}

export const shuffled = (T?: any[]) => {
    if (!T) return undefined
    for (let i = T.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = T[i]
        T[i] = T[j]
        T[j] = temp
    }
    return T
}

export const convertTime = (date: Date, timezone?: string) => {
    return +date.toLocaleTimeString(navigator.language, {
        hour12: false,
        hour: "numeric",
        timeZone: timezone,
    })
}

export const getTime = (
    dt: number,
    sunset?: number,
    sunrise?: number,
    timezone?: string
) => {
    let time = convertTime(new Date(dt * 1000), timezone)

    if (!sunset || !sunrise) return time

    const set = convertTime(new Date(sunset * 1000), timezone)
    const rise = convertTime(new Date(sunrise * 1000), timezone)

    if (time === 24) return "midnight"
    if (time === set) return "sunset"
    if (time === rise) return "sunrise"

    return time
}
export const toCapitalize = (s: string) => {
    const res = []
    const strings = s.split(" ")

    for (const str of strings) {
        if (str.charAt(0) === "a") {
            res.push(str)
            continue
        }
        res.push(str.charAt(0).toUpperCase() + str.slice(1))
    }

    return res.join(" ")
}
