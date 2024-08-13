export interface Cita {
    
    [key: string]: string //index signature, el primer string dice con que tipo de dato se puede acceder al objeto, el segundo define con cual tipo de dato se puede almacenar en las propiedades del objeto 
    id: string;
    paciente: string;
    propietario: string;
    email: string;
    fecha: string;
    sintomas: string;
}