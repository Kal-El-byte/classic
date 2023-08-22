const doWorkCallback = (callback) => {
    setTimeout(() => {
        callback('This is my error!', undefined)
    })
}

doWorkCallback((error, result) => {
    if (error){
        return console.log(error)
    }

    console.log(result)
}) 