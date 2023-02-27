export interface User {
  idusuario?: string
  username: string
  nombre: string
  apellidoPaterno: string
  apellidoMaterno: string
  password?: string
  idrol: number
  email: string
  fechaNacimiento: string
  celular: number
  estado?: boolean
}
