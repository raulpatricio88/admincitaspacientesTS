import './style.css'  // Vite puede importar una hoja de estilo así
import { pacienteInput, propietarioInput, emailInput, fechaInput, sintomasInput, formulario } from './selectores'
import { datosCita, submitCita } from './funciones'

// Eventos ( ?. : optional chaining: en este caso: en caso de que exista el elemento registra el evento sino no lo agrega)
pacienteInput?.addEventListener('change', datosCita)
propietarioInput?.addEventListener('change', datosCita)
emailInput?.addEventListener('change', datosCita)
fechaInput?.addEventListener('change', datosCita)
sintomasInput?.addEventListener('change', datosCita)
formulario?.addEventListener('submit', submitCita)