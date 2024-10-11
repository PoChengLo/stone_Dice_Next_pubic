import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import styles from '@/styles/user-profile/sweet-alert.module.scss'

// 初始化 Swal
const MySwal = withReactContent(Swal)

// 自定義樣式
const showCustomSwal = (title, text, icon) => {
  MySwal.fire({
    title: title,
    text: text,
    icon: icon,
    background: '#D9D9D9',
    confirmButtonColor: '#423C32',
    customClass: {
      popup: styles['swal-popup'],
      confirmButton: styles['swal-confirm-button'],
    },
  })
}

export default showCustomSwal
