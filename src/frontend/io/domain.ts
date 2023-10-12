type NativeJSONTypes = number | string | boolean | null
type JSONArray = JSON[]
type JSONObject = {[key: string]: JSON}
type JSON = NativeJSONTypes | JSONArray | JSONObject

type PossibleValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

class Domain {
    private d: Array<PossibleValue>

    constructor(v) {
        this.d = new Array<PossibleValue>(v)
    }
    addValue(v){
        this.d.push(v)
    }
    removeValue(v) {
        this.d.slice(v)
    }

    containsValue(v) {
        return this.d.includes(v)
    }

    copy() {
        return this.d
    }

    toJson() {
        //TODO
    }
}