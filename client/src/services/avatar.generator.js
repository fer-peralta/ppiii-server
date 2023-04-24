const newColor = () => {
    let hexadecimal = "0123456789ABCDEF"
    let color = ""

    for (let i = 0; i < 6; i++) {
        color += hexadecimal[Math.floor(Math.random() * 16)]
    }

    return color
}

export const avatarGenerator = (name, surname) => {
    const bgColor = newColor()
    const letterColor = newColor()

    return `https://ui-avatars.com/api/?name=${name}+${surname}&background=${bgColor}&color=${letterColor}`
}