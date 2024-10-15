import React, { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import showCustomSwal from './sweet-alert'
import dynamic from 'next/dynamic'

import '@pqina/pintura/pintura.css'
import { getEditorDefaults } from '@pqina/pintura'

const PinturaEditor = dynamic(
  () => import('@pqina/react-pintura').then((mod) => mod.PinturaEditor),
  { ssr: false }
)

const editorDefaults = getEditorDefaults({
  stickers: [
    '😎', // Emoji
    '/stickers/bat-svgrepo-com.svg', // 放在 public/stickers 下的圖片
    '/stickers/collect-svgrepo-com.svg',
    '/stickers/husky-svgrepo-com.svg',
    '/stickers/snake-svgrepo-com.svg',
  ],
})

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
  cursor: 'pointer',
  filter:
    'drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.10)) drop-shadow(0px 9px 9px rgba(0, 0, 0, 0.09)) drop-shadow(0px 20px 12px rgba(0, 0, 0, 0.05)) drop-shadow(0px 35px 14px rgba(0, 0, 0, 0.01)) drop-shadow(0px 55px 15px rgba(0, 0, 0, 0.00))',
}

const ImageUpload = ({ initialImage }) => {
  const [previewImage, setPreviewImage] = useState(
    initialImage ? `http://localhost:3006/avatar/${initialImage}` : ''
  )
  const [isEditorOpen, setIsEditorOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(null)
  const [croppedImage, setCroppedImage] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setCurrentImage(URL.createObjectURL(file))
      setIsEditorOpen(true)
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
        showCustomSwal('上傳成功', '您的圖片已成功更新', 'success')
        setPreviewImage(
          `http://localhost:3006/avatar/${
            response.data.data.user_img
          }?t=${new Date().getTime()}`
        )
        setCroppedImage(null)
        window.dispatchEvent(new Event('userDataUpdated'))
      } else {
        showCustomSwal('上傳壞ㄌ', response.data.message, 'error')
      }
    } catch (error) {
      console.error('Upload error:', error)
      showCustomSwal('伺服器錯誤，請稍後再說', 'error')
    }
  }

  return (
    <>
      {!isEditorOpen && !croppedImage && (
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
      )}

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

      {isEditorOpen && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: '1000',
          }}
        >
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'white',
              padding: '20px',
              zIndex: '1001',
              width: '80vw',
              height: '80vh',
              overflow: 'hidden',
            }}
          >
            <PinturaEditor
              {...editorDefaults}
              src={currentImage}
              imageCropAspectRatio={1}
              onLoad={(res) => console.log('load image', res)}
              onProcess={({ dest }) => {
                console.log('Process result:', dest)
                if (dest instanceof Blob) {
                  const croppedURL = URL.createObjectURL(dest)
                  setPreviewImage('')
                  setCroppedImage(croppedURL)
                  setIsEditorOpen(false)
                  handleImageUpload(dest)
                } else {
                  console.error('Unexpected dest type:', typeof dest)
                  showCustomSwal('错误', '裁剪结果无法处理', 'error')
                }
              }}
              onCancel={() => setIsEditorOpen(false)}
            />
          </div>
        </div>
      )}

      {croppedImage && (
        <Image
          src={croppedImage}
          alt="Cropped Result"
          width={260}
          height={260}
          style={imageStyle}
        />
      )}
    </>
  )
}

export default ImageUpload
