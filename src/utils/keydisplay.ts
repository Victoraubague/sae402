export const Z = 'z'
export const Q = 'q'
export const S = 's'
export const D = 'd'
export const SHIFT = 'shift'
export const DIRECTIONS = [Z, Q, S, D]

export class KeyDisplay {

    map: Map<string, HTMLDivElement> = new Map()

    constructor() {
        const z: HTMLDivElement = document.createElement("div")
        const q: HTMLDivElement = document.createElement("div")
        const s: HTMLDivElement = document.createElement("div")
        const d: HTMLDivElement = document.createElement("div")
        const shift: HTMLDivElement = document.createElement("div")

        this.map.set(Z, z)
        this.map.set(Q, q)
        this.map.set(S, s)
        this.map.set(D, d)
        this.map.set(SHIFT, shift)

        this.map.forEach( (v, k) => {
            v.style.color = 'blue'
            v.style.fontSize = '50px'
            v.style.fontWeight = '800'
            v.style.position = 'absolute'
            v.textContent = k
        })

        this.updatePosition()

        this.map.forEach( (v, _) => {
            document.body.append(v)
        })
    }

    public updatePosition() {
        this.map.get(Z).style.top = `${window.innerHeight - 150}px`
        this.map.get(Q).style.top = `${window.innerHeight - 100}px`
        this.map.get(S).style.top = `${window.innerHeight - 100}px`
        this.map.get(D).style.top = `${window.innerHeight - 100}px`
        this.map.get(SHIFT).style.top = `${window.innerHeight - 100}px`

        this.map.get(Z).style.left = `${300}px`
        this.map.get(Q).style.left = `${200}px`
        this.map.get(S).style.left = `${300}px`
        this.map.get(D).style.left = `${400}px`
        this.map.get(SHIFT).style.left = `${50}px`
    }

    public down (key: string) {
        if (this.map.get(key.toLowerCase())) {
            this.map.get(key.toLowerCase()).style.color = 'red'
        }
    }

    public up (key: string) {
        if (this.map.get(key.toLowerCase())) {
            this.map.get(key.toLowerCase()).style.color = 'blue'
        }
    }

}
