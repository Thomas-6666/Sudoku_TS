type NativeJSONTypes = number | string | boolean | null
type JSONArray = JSON[]
type JSONObject = {[key: string]: JSON}
type JSON = NativeJSONTypes | JSONArray | JSONObject

class Variable{
    private va: any

    constructor(v) {
        this.va = {"value": v, "type": typeof(v)}
    }

    setValue(v){
        this.va.value = v
    }
    unset(){
        //TODO
    }
    toJson(){
        return this.va.toJSON()
    }
    getValue(){
        return this.va.value
    }
}