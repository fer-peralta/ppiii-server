

const getUsers = async (req, res) => {
    try {
        res.status(200).json({ message: "Hola desde Users" })
    } catch (error) {
        console.error(error)
    }
}