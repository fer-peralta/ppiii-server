import * as UserService from "../services/user.service.js";

export const getUsers = async (req, res) => {
    try {
        const response = await UserService.getUsers()
        response.length != 0 ? res.status(200).send({ data: response }) : res.status(200).send({ message: "No se encontró ningún usuario" })
    } catch (error) {
        res.status(400).send({ message: `Hubo un error ${error}`, error: error, section: "controller" })
    }
}

export const saveUsers = async (req, res) => {
    try {
        const response = await UserService.saveUser(req.body)
        res.status(200).send({ data: response })
    } catch (error) {
        res.status(400).send({ message: `Hubo un error ${error}` })
    }
}

export const findUser = async (req, res) => {
    try {
        const response = await UserService.findUser(req.params.id)
        res.status(200).json({ data: response })
    } catch (error) {
        res.status(400).json({ message: `Hubo un error ${error}` })
    }
}

export const updateUser = async (req, res) => {

    try {
        const response = await UserService.updateUser(req.params.id, req.body)
        res.status(200).send({ data: [response, `Se ha actualizado el turno con exito`] })
    } catch (error) {
        res.status(400).send({ message: `Hubo un error ${error}` })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const response = await UserService.deleteUser(req.params.id)
        res.status(200).json({ data: response })
    } catch (error) {
        res.status(400).json({ message: `Hubo un error ${error}` })
    }
}