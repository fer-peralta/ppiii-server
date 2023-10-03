import { toast } from 'react-toastify'

export const loginErrorToast = () => {
  toast.error('Usuario y/o contraseña incorrectos', {
    position: 'bottom-center',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark'
  })
}

export const loginMissConfirmToast = () => {
  toast.error('Por favor confirma tu usuario, verifica tu casilla de email', {
    position: 'bottom-center',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark'
  })
}

export const subscriptionSuccessToast = () => {
  toast.success('Te suscribiste con éxito', {
    position: 'bottom-center',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark'
  })
}

export const deleteSubSuccessToast = () => {
  toast.success('Te desubscribiste con éxito', {
    position: 'bottom-center',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark'
  })
}

export const subscriptionErrorToast = () => {
  toast.error('Ya estás subscripto a la mentoría seleccionada', {
    position: 'bottom-center',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark'
  })
}
