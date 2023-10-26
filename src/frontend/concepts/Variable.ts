import {Domain, DomainImpl} from "./Domain";
import type {JSONArray, JSONObject, JSONPrimitives} from "../JSON"

export type JSONVariable = {
    domain: JSONArray
    value?: JSONPrimitives
}

export type Variable<T extends JSONPrimitives> = {
    readonly domain: Domain<T>
    readonly value?: T
    set(v: T): void
    unset(): void
    toJSON(): JSONVariable
}

export class VariableImpl<T extends JSONPrimitives> implements Variable<T> {
    private _value?: T

    constructor(private readonly _domain: Domain<T>, private readonly _value?: T) {
    }

    get domain() {
        return this._domain
    }

    set(v: T): void {
        if (this._domain.has(v)){
            this._value = v
        }
    }

    unset(): void {
        this._value = undefined
    }

    toJSON(): JSONObject {
        const result: JSONVariable = {domain: this._domain.toJSON()}
        if (typeof this._value !== "undefined"){
            result.value = this._value
        }
        return result
    }

    static fromJSON<T extends JSONPrimitives>(json: JSONVariable): Variable<T> {
        let validationOk = typeof json === "object" && "domain" in json
        if (validationOk && DomainImpl.validateJSON(json.domain)){
            const domain = new DomainImpl(json.domain) as unknown as Domain<T>
            return new Variable(domain)
        }
        throw new Error(`Unexpected JSONVariable object: ${JSON.stringify(json)}`)
    }
}