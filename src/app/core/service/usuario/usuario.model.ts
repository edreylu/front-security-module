export interface User{
    noUsuario: number,
    userName: string,
    password: string,
    encrytedPassword: string,
    fechaAuditoria: string,
    noInmueble: number,
    estatus:{
        idEstatus: number,
        descripcion: string},
    idEstatus: number,
    enabled: number,
    datosPersonales:{
        noPersonal: number, 
        apellidoPaterno: string, 
        apellidoMaterno: string, 
        nombre: string,
        nombreCompleto: string,
        correo: string,
        telefonoFijo: number,
        telefonoMovil: number
        },
    unidadResponsable:{
        claveUr: number, 
        descripcion: string, 
        fechaInicio: string, 
        fechaFinal: string,
        estatus:{
            idEstatus: number, 
            descripcion: string}
        }
}