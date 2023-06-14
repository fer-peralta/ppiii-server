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
