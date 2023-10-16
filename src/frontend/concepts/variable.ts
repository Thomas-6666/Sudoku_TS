type NativeJSONTypes = number | string | boolean | null
type JSONArray = JSON[]
type JSONObject = { [key: string]: JSON }
type JSON = NativeJSONTypes | JSONArray | JSONObject

class Variable {
    private readonly domain: Domain
    private value

    constructor(d, v) {
        this.domain = d
        this.value = v || null
    }

    setValue(v) {
        this.value = v
    }

    unsetValue() {
        this.value = null
    }

    toJSON(): JSONArray {
        return [this.domain, this.value]
    }

    fromJSON(json: JSONArray): Variable {
        return new Variable(json[0], json[1])
    }
}