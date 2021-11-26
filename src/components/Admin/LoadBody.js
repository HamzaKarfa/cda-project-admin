export function loadBody(data){
    const formData = new FormData();
    Object.keys(data).forEach((name) => {
        console.log(name)
        if (name === "image") {
            console.log(data[name].rawFile);
            formData.set(name, data[name].rawFile )
        }else{
            formData.set(name, data[name] )
        }
    });
    if (Object.keys(formData).length >0) {
        return Promise.resolve(formData);
    }

}