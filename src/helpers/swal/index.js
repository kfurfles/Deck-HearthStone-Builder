import Swal from 'sweetalert2'

export function isLoading(){
    Swal.fire({
        title: 'Loading!',
        onBeforeOpen: () => Swal.showLoading()
    })
}


export function close(){
    Swal.close()
}