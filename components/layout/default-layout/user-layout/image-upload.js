import { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import showCustomSwal from './sweet-alert'

const imageStyle = {
  borderRadius: '50%',
  width: '260px',
  height: '260px',
  objectFit: 'cover',
  boxShadow:
    '130px 107px 47px 0px rgba(0, 0, 0, 0.00), 83px 68px 43px 0px rgba(0, 0, 0, 0.01), 47px 38px 36px 0px rgba(0, 0, 0, 0.05), 21px 17px 27px 0px rgba(0, 0, 0, 0.09), 5px 4px 15px 0px rgba(0, 0, 0, 0.10)',
  position: 'relative',
  border: '17px solid #A6977C',
}

const secondImageStyle = {
  position: 'absolute',
  top: '50%',
  right: '10%',
  cursor: 'pointer', // 添加光標提示
  filter:
    'drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.10)) drop-shadow(0px 9px 9px rgba(0, 0, 0, 0.09)) drop-shadow(0px 20px 12px rgba(0, 0, 0, 0.05)) drop-shadow(0px 35px 14px rgba(0, 0, 0, 0.01)) drop-shadow(0px 55px 15px rgba(0, 0, 0, 0.00))',
}

const ImageUpload = ({ initialImage }) => {
  const [previewImage, setPreviewImage] = useState(
    initialImage ? `http://localhost:3006/avatar/${initialImage}` : ''
  )

  const handleImageChange = (e) => {
    const file = e.target.files[0] // 選中的圖片檔案
    if (file) {
      setPreviewImage(URL.createObjectURL(file)) // 更新預覽圖片
      handleImageUpload(file) // 上傳圖片
    }
  }

  const handleImageUpload = async (file) => {
    const formData = new FormData()
    formData.append('avatar', file)

    try {
      const token = localStorage.getItem('accessToken')
      const response = await axios.post(
        'http://localhost:3006/user-profile/upload-avatar',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (response.data.status === 'success') {
        showCustomSwal('上傳成功', '您的圖片已成功更新', 'success') // 使用自定義 Swal
        setPreviewImage(
          `http://localhost:3006/avatar/${
            response.data.data.user_img
          }?t=${new Date().getTime()}`
        )
        window.dispatchEvent(new Event('userDataUpdated'))
      } else {
        showCustomSwal('上傳失敗', response.data.message, 'error') // 使用自定義 Swal
      }
    } catch (error) {
      showCustomSwal('伺服器錯誤', '請稍後再試', 'error') // 使用自定義 Swal
    }
  }

  return (
    <>
      <Image
        src={
          previewImage ||
          'https://i.postimg.cc/C1L1cpS1/DALL-E-2024-10-14-03-01-56-Flat-minimalistic-user-icon-in-grayscale-and-gold-featuring-a-person.png'
        }
        alt="User Avatar"
        width={260}
        height={260}
        style={imageStyle}
      />

      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        id="imageUpload"
        onChange={handleImageChange}
      />

      <label htmlFor="imageUpload">
        <Image
          src="https://i.postimg.cc/dtzxD7Ks/cccccrrr.png"
          alt="Upload Icon"
          width={80}
          height={80}
          style={secondImageStyle}
        />
      </label>
    </>
  )
}

export default ImageUpload
