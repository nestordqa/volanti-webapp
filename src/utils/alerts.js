import Swal from "sweetalert2"

export const showQuestion = (
    title,
    text,
    icon = 'question',
    showConfirmButton = true,
    showDenyButton = true,
    confirmButtonColor = '#3085d6',
    cancelButtonColor = '#d33',
    confirmButtonText = 'Sí, continuar!',
    cancelButtonText = 'No, cancelar'

) => {
    return Swal.fire(
        title,
        text,
        icon,
        showConfirmButton,
        showDenyButton,
        confirmButtonColor,
        cancelButtonColor,
        confirmButtonText,
        cancelButtonText
    )
}