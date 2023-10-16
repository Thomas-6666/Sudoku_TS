type NativeJSONTypes = number | string | boolean | null
type JSONArray = JSON[]
type JSONObject = { [key: string]: JSON }
type JSON = NativeJSONTypes | JSONArray | JSONObject

type PossibleValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

class Domain {
    private readonly d: Array<PossibleValue>

    constructor(d) {
        this.d = d || new Array<PossibleValue>()
    }

    addValue(v){
        this.delValue(v)
        this.d.push(v)
    }

    hasValue(v): boolean {
        return this.d.includes(v)
    }

    delValue(v) {
        if (this.hasValue(v)) {
            this.d.slice(v)
        }
    }

    copy(dcopy: Domain): Domain {
        return new Domain(dcopy.d)
    }

    toJSON(): JSONArray {
        return [this.d]
    }

    fromJSON(json:JSONArray): Domain{
        return new Domain(json[0])
    }
}