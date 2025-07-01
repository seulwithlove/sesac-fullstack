class User{
    constructor() {
        return new Proxy(this, {
            get(target, prop, receiver) {
                if (prop === 'fullName') {
                    return `${target.firstName} ${target.lastNAme}`
                }else{
                return target[prop];
            }
        },
            set(target, prop, value, receiver){
            
        })
    }
}